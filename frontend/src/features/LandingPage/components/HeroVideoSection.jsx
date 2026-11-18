import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroVideoSection.module.css';

const HeroVideoSection = ({
  theme = 'light',
  lightVideoSrc = '/videos/subak-background-v2.mp4',
  nightVideoSrc = '/videos/subak-background-night.mp4',
  lightPosterSrc = '/images/hero_poster/poster_pagi.jpg',
  nightPosterSrc = '/images/hero_poster/poster_malam.jpg',
  playbackSpeed = 2,      // Kecepatan putar 2x untuk pagi & malam
  fadeDuration = 1.2,     // Durasi cross-fade looping & pergantian tema (detik)
}) => {
  // 4 Ref video agar pagi & malam memiliki dual-layer sendiri tanpa reload src
  const lightARef = useRef(null);
  const lightBRef = useRef(null);
  const nightARef = useRef(null);
  const nightBRef = useRef(null);

  const isLoopFadingRef = useRef({ light: false, night: false });
  const prevThemeRef = useRef(theme);

  const [activeSlot, setActiveSlot] = useState(
    theme === 'dark' ? 'night-A' : 'light-A'
  );
  const [isPaused, setIsPaused] = useState(false);

  const videoRefs = {
    'light-A': lightARef,
    'light-B': lightBRef,
    'night-A': nightARef,
    'night-B': nightBRef,
  };

  // Pastikan kecepatan 2x selalu terpasang pada seluruh elemen video
  useEffect(() => {
    Object.values(videoRefs).forEach((ref) => {
      if (ref.current) {
        ref.current.playbackRate = playbackSpeed;
      }
    });
  }, [playbackSpeed]);

  // Transisi cross-fade mulus ketika theme berubah ('light' <-> 'dark')
  useEffect(() => {
    if (prevThemeRef.current === theme) return;
    prevThemeRef.current = theme;

    const targetMode = theme === 'dark' ? 'night' : 'light';
    const nextSlot = `${targetMode}-A`;
    const nextVid = videoRefs[nextSlot]?.current;

    // Reset flag loop mode tujuan dan mulai putar dari posisi mulus pada kecepatan 2x
    isLoopFadingRef.current[targetMode] = false;

    if (nextVid) {
      nextVid.playbackRate = playbackSpeed;
      if (!isPaused) {
        nextVid.play().catch(() => {});
      }
    }

    // Tukar slot aktif: video baru fade-in, video tema lama fade-out bersamaan
    setActiveSlot(nextSlot);

    // Setelah animasi fade selesai, jeda video tema sebelumnya agar hemat CPU/memori
    const cleanupTimer = setTimeout(() => {
      const oldMode = targetMode === 'night' ? 'light' : 'night';
      videoRefs[`${oldMode}-A`]?.current?.pause();
      videoRefs[`${oldMode}-B`]?.current?.pause();
    }, fadeDuration * 1000 + 100);

    return () => clearTimeout(cleanupTimer);
  }, [theme, playbackSpeed, fadeDuration, isPaused]);

  // Pantau waktu putar video aktif untuk cross-fade looping sebelum durasi habis
  const handleTimeUpdate = (slot) => {
    if (slot !== activeSlot || isPaused) return;

    const [mode, layer] = slot.split('-'); // contoh: ['night', 'A']
    if (isLoopFadingRef.current[mode]) return;

    const currentVid = videoRefs[slot]?.current;
    const nextLayer = layer === 'A' ? 'B' : 'A';
    const nextSlot = `${mode}-${nextLayer}`;
    const nextVid = videoRefs[nextSlot]?.current;

    if (!currentVid || !nextVid || !currentVid.duration) return;

    const remainingRealSeconds =
      (currentVid.duration - currentVid.currentTime) / playbackSpeed;

    if (remainingRealSeconds <= fadeDuration) {
      isLoopFadingRef.current[mode] = true;

      nextVid.currentTime = 0;
      nextVid.playbackRate = playbackSpeed;
      nextVid.play().catch(() => {});

      setActiveSlot(nextSlot);

      setTimeout(() => {
        currentVid.pause();
        currentVid.currentTime = 0;
        isLoopFadingRef.current[mode] = false;
      }, fadeDuration * 1000);
    }
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('intro');
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
      {/* ==================== LAYER VIDEO PAGI (LIGHT) ==================== */}
      <video
        ref={lightARef}
        className={`${styles.bgVideo} ${
          activeSlot === 'light-A' ? styles.videoVisible : styles.videoHidden
        }`}
        src={lightVideoSrc}
        poster={lightPosterSrc}
        autoPlay={theme === 'light'}
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = playbackSpeed;
        }}
        onPlaying={(e) => {
          e.currentTarget.playbackRate = playbackSpeed;
        }}
        onTimeUpdate={() => handleTimeUpdate('light-A')}
      />

      <video
        ref={lightBRef}
        className={`${styles.bgVideo} ${
          activeSlot === 'light-B' ? styles.videoVisible : styles.videoHidden
        }`}
        src={lightVideoSrc}
        poster={lightPosterSrc}
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = playbackSpeed;
        }}
        onPlaying={(e) => {
          e.currentTarget.playbackRate = playbackSpeed;
        }}
        onTimeUpdate={() => handleTimeUpdate('light-B')}
      />

      {/* ==================== LAYER VIDEO MALAM (NIGHT) ==================== */}
      <video
        ref={nightARef}
        className={`${styles.bgVideo} ${
          activeSlot === 'night-A' ? styles.videoVisible : styles.videoHidden
        }`}
        src={nightVideoSrc}
        poster={nightPosterSrc}
        autoPlay={theme === 'dark'}
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = playbackSpeed;
        }}
        onPlaying={(e) => {
          e.currentTarget.playbackRate = playbackSpeed;
        }}
        onTimeUpdate={() => handleTimeUpdate('night-A')}
      />

      <video
        ref={nightBRef}
        className={`${styles.bgVideo} ${
          activeSlot === 'night-B' ? styles.videoVisible : styles.videoHidden
        }`}
        src={nightVideoSrc}
        poster={nightPosterSrc}
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = playbackSpeed;
        }}
        onPlaying={(e) => {
          e.currentTarget.playbackRate = playbackSpeed;
        }}
        onTimeUpdate={() => handleTimeUpdate('night-B')}
      />

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