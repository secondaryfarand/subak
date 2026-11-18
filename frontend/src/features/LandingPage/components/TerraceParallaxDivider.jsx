import React, { useEffect, useRef, useState } from 'react';
import styles from './TerraceParallaxDivider.module.css';

const FIREFLIES = [
  { id: 1, left: '44%', top: '56%', size: 4, delay: '0s', duration: '5.5s' },
  { id: 2, left: '53%', top: '52%', size: 3, delay: '1.2s', duration: '6.8s' },
  { id: 3, left: '49%', top: '64%', size: 5, delay: '2.4s', duration: '6.2s' },
  { id: 4, left: '57%', top: '60%', size: 3, delay: '0.8s', duration: '7.4s' },
  { id: 5, left: '41%', top: '63%', size: 3.5, delay: '3.1s', duration: '5.9s' },
  { id: 6, left: '51%', top: '47%', size: 2.5, delay: '1.8s', duration: '6.5s' },
];

const TerraceParallaxDivider = ({
  imageSrc = '/images/landingpage/subakoverlay.webp',
  watermarkText = 'TRI HITA KARANA',
  caption = 'Hulu • Pelinggih & Tektek Pembagi Air Subak',
}) => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [cutoutDataUrl, setCutoutDataUrl] = useState(null);

  // Flood-fill dari tepi langit atas agar hanya langit hitam yang menjadi transparan
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      canvas.width = w;
      canvas.height = h;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;

      const visited = new Uint8Array(w * h);
      const stack = [];
      const skyThreshold = 24;

      const isSkyPixel = (idx) => {
        const p = idx * 4;
        return Math.max(data[p], data[p + 1], data[p + 2]) <= skyThreshold;
      };

      for (let x = 0; x < w; x++) {
        if (isSkyPixel(x)) {
          visited[x] = 1;
          stack.push(x);
        }
      }

      while (stack.length > 0) {
        const curr = stack.pop();
        data[curr * 4 + 3] = 0;

        const cx = curr % w;
        const cy = (curr - cx) / w;

        if (cx > 0) {
          const left = curr - 1;
          if (!visited[left] && isSkyPixel(left)) {
            visited[left] = 1;
            stack.push(left);
          }
        }
        if (cx < w - 1) {
          const right = curr + 1;
          if (!visited[right] && isSkyPixel(right)) {
            visited[right] = 1;
            stack.push(right);
          }
        }
        if (cy > 0) {
          const up = curr - w;
          if (!visited[up] && isSkyPixel(up)) {
            visited[up] = 1;
            stack.push(up);
          }
        }
        if (cy < h - 1) {
          const down = curr + w;
          if (!visited[down] && isSkyPixel(down)) {
            visited[down] = 1;
            stack.push(down);
          }
        }
      }

      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const idx = y * w + x;
          if (visited[idx] === 0) {
            const touchesSky =
              visited[idx - 1] ||
              visited[idx + 1] ||
              visited[idx - w] ||
              visited[idx + w];
            if (touchesSky) {
              data[idx * 4 + 3] = 150;
            }
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setCutoutDataUrl(canvas.toDataURL('image/png'));
    };
  }, [imageSrc]);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const rawProgress = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.max(0, Math.min(1, rawProgress));
      setProgress(clamped - 0.5);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Teks turun ke balik lembah; sawah diturunkan posisinya (base +32px) lalu bergerak naik halus
  const textTranslateY = progress * 190;
  const terraceTranslateY = 32 - progress * 85;

  return (
    <section
      ref={sectionRef}
      className={styles.parallaxStage}
      aria-label="Visualisasi Lanskap Terasering Subak"
    >
      {/* Lapisan 1 (Terjauh): Teks 3D TRI HITA KARANA di langit atas lembah */}
      <div
        className={styles.backWatermark}
        style={{
          transform: `translate3d(-50%, ${textTranslateY}px, 0)`,
        }}
        aria-hidden="true"
      >
        <span className={styles.watermarkSub}>FILOSOFI HARMONI</span>
        <span className={styles.watermarkMain}>{watermarkText}</span>
      </div>

      {/* Lapisan 2 (Atmosfer Tengah): Kabut Lembah Transparan Melayang di antara Teks & Sawah */}
      <div className={styles.valleyMistLayer} aria-hidden="true" />

      {/* Lapisan 3 (Subjek Utama): Terasering Sawah & Pelinggih diturunkan agar tidak terpotong atas */}
      <div
        className={styles.terraceLayer}
        style={{
          transform: `translate3d(0, ${terraceTranslateY}px, 0) scale(1.04)`,
        }}
      >
        {/* Sorotan Cahaya Lentera / Dupa Hangat di sekitar Pelinggih & Tektek */}
        <div className={styles.lanternGlow} aria-hidden="true" />

        {/* Partikel Kunang-kunang (Ambient Fireflies) */}
        <div className={styles.firefliesContainer} aria-hidden="true">
          {FIREFLIES.map((fly) => (
            <span
              key={fly.id}
              className={styles.firefly}
              style={{
                left: fly.left,
                top: fly.top,
                width: `${fly.size}px`,
                height: `${fly.size}px`,
                animationDelay: fly.delay,
                animationDuration: fly.duration,
              }}
            />
          ))}
        </div>

        {cutoutDataUrl && (
          <img
            src={cutoutDataUrl}
            alt="Terasering sawah Subak dengan pelinggih dan aliran air bambu"
            className={styles.terraceImage}
          />
        )}
      </div>

      {/* Lapisan 4 (Depan): Kabut Gradasi Bawah */}
      <div className={styles.bottomMistFade} aria-hidden="true" />

      {/* Label Keterangan Minimalis */}
      <div className={`container ${styles.captionBar}`}>
        <span className={styles.captionBadge}>{caption}</span>
      </div>
    </section>
  );
};

export default TerraceParallaxDivider;