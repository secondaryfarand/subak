import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FieldShowcaseBanner.module.css';

const FieldShowcaseBanner = () => {
  return (
    <section className={styles.bannerWrapper}>
      <div className="container">
        <div className={styles.panoramaFrame}>
          <img
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=85"
            alt="Hamparan sawah hijau Subak di lereng pegunungan Bali"
            className={styles.panoramaImg}
            loading="lazy"
          />

          {/* Overlay Kartu Forest di Kiri */}
          <div className={styles.overlayCard}>
            <h2 className={styles.overlayTitle}>
              Menjaga Aliran Hulu ke Hilir Secara Berkelanjutan
            </h2>
            <p className={styles.overlayText}>
              Sistem jaringan irigasi Subak menghubungkan mata air pegunungan,
              pura air, terowongan bawah tanah, dan terasering sawah menjadi satu
              kesatuan lanskap hidup yang lestari.
            </p>
            <Link to="/peta-subak" className={styles.overlayBtn}>
              Buka Peta Interaktif Subak →
            </Link>
          </div>

          {/* Badge Lokasi di Kanan Atas */}
          <div className={styles.locationPill}>
            <span className={styles.locationDot} aria-hidden="true" />
            <span>DAS Pakerisan &amp; Jatiluwih, Bali</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldShowcaseBanner;