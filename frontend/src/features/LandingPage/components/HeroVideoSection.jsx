import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroVideoSection.module.css';

const HeroVideoSection = ({
  videoSrc = '/videos/subak-background-v2.mp4',
  posterSrc = 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1800&q=85',
  playbackSpeed = 2,      // Kecepatan putar 2x
  fadeDuration = 1.2,     // Durasi transisi fade-out / fade-in (detik)
}) => {
  const videoARef = useRef(null);
  const videoBRef = useRef(null);
  const isFadingRef = useRef(false);

  const [activeLayer, setActiveLayer] = useState('A');
  const [isPaused, setIsPaused] = useState(false);

  // Set kecepatan 2x pada kedua layer video saat metadata dimuat
  useEffect(() => {
    const videos = [videoARef.current, videoBRef.current];
    videos.forEach((vid) => {
      if (vid) {
        vid.playbackRate = playbackSpeed;
      }
    });
  }, [playbackSpeed]);

  // Pantau waktu putar video aktif; mulai crossfade sebelum video habis
  const handleTimeUpdate = (layer) => {
    if (layer !== activeLayer || isPaused || isFadingRef.current) return;

    const currentVid = layer === 'A' ? videoARef.current : videoBRef.current;
    const nextVid = layer === 'A' ? videoBRef.current : videoARef.current;

    if (!currentVid || !nextVid || !currentVid.duration) return;

    // Hitung sisa waktu nyata (memperhitungkan playbackSpeed 2x)
    const remainingRealSeconds =
      (currentVid.duration - currentVid.currentTime) / playbackSpeed;

    if (remainingRealSeconds <= fadeDuration) {
      isFadingRef.current = true;

      // Siapkan video berikutnya dari detik 0 dengan kecepatan 2x
      nextVid.currentTime = 0;
      nextVid.playbackRate = playbackSpeed;
      nextVid.play().catch(() => {});

      // Tukar layer aktif untuk memicu CSS opacity transition (fade out & fade in)
      const nextLayer = layer === 'A' ? 'B' : 'A';
      setActiveLayer(nextLayer);

      // Reset flag setelah transisi fade selesai
      setTimeout(() => {
        currentVid.pause();
        currentVid.currentTime = 0;
        isFadingRef.current = false;
      }, fadeDuration * 1000);
    }
  };

  // Sinkronkan tombol Play / Pause
  const handleTogglePlay = () => {
    const activeVid =
      activeLayer === 'A' ? videoARef.current : videoBRef.current;
    if (!activeVid) return;

    if (isPaused) {
      activeVid.playbackRate = playbackSpeed;
      activeVid.play();
      setIsPaused(false);
    } else {
      videoARef.current?.pause();
      videoBRef.current?.pause();
      setIsPaused(true);
    }
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('data');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="beranda"
      className={styles.heroViewport}
      style={{ '--fade-duration': `${fadeDuration}s` }}
    >
      {/* Layer Video A */}
      <video
        ref={videoARef}
        className={`${styles.bgVideo} ${
          activeLayer === 'A' ? styles.videoVisible : styles.videoHidden
        }`}
        autoPlay
        muted
        playsInline
        poster={posterSrc}
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = playbackSpeed;
        }}
        onTimeUpdate={() => handleTimeUpdate('A')}
      >
        <source src={videoSrc} type="video/mp4" />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-green-rice-terraces-in-bali-41573-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Layer Video B (Untuk transisi cross-fade mulus tanpa layar hitam) */}
      <video
        ref={videoBRef}
        className={`${styles.bgVideo} ${
          activeLayer === 'B' ? styles.videoVisible : styles.videoHidden
        }`}
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = playbackSpeed;
        }}
        onTimeUpdate={() => handleTimeUpdate('B')}
      >
        <source src={videoSrc} type="video/mp4" />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-green-rice-terraces-in-bali-41573-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay Gradien Sinematik */}
      {/* <div className={styles.scrimOverlay} aria-hidden="true" /> */}

      {/* Konten Editorial Kiri */}
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.editorialBlock}>
          <span className={styles.eyebrow}>
            WARISAN BUDAYA DUNIA &bull; BALI
          </span>

          <h1 className={styles.heroTitle}>
            Air dari hulu
            <br />
            yang lestari.
          </h1>

          <p className={styles.heroSubtitle}>
            Mengalir dari mata air pegunungan Bali, dibagi secara adil lewat
            musyawarah krama untuk menjaga harmoni Tri Hita Karana sejak abad
            ke-11.
          </p>

          <div className={styles.actionGroup}>
            <Link to="/irigasi" className={styles.pillPrimaryBtn}>
              Pelajari Aliran Air
            </Link>
            <Link to="/eksplorasi" className={styles.textGhostBtn}>
              Kenali Subak
            </Link>
          </div>
        </div>
      </div>

      {/* Tombol Kontrol Video Minimalis */}
      {/* <button
        type="button"
        onClick={handleTogglePlay}
        className={styles.videoControlBtn}
        aria-label={isPaused ? 'Putar video latar' : 'Jeda video latar'}
        title={isPaused ? 'Putar Video' : 'Jeda Video'}
      >
        {isPaused ? '▶' : '❚❚'}
      </button> */}

      {/* Indikator Gulir Tengah Bawah */}
      <button
        type="button"
        onClick={handleScrollDown}
        className={styles.scrollCue}
        aria-label="Gulir ke bagian statistik"
      >
        <span>GULIR</span>
        <span className={styles.scrollLine} aria-hidden="true" />
      </button>
    </section>
  );
};

export default HeroVideoSection;