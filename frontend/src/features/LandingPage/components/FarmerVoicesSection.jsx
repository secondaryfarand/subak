import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FarmerVoicesSection.module.css';

const FarmerVoicesSection = () => {
  return (
    <section className={`section ${styles.voicesSection}`}>
      <div className="container">
        <div className={styles.bentoGrid}>
          <div className={`${styles.bentoTile} ${styles.photoTile}`}>
            <img
              src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=900&q=80"
              alt="Petani Subak Bali di pematang sawah"
              className={styles.tileImg}
              loading="lazy"
            />
          </div>

          <article className={`${styles.bentoTile} ${styles.lightCard}`}>
            <p className={styles.quoteCopy}>
              &ldquo;Dengan jadwal tanam kerta masa dan pemantauan saluran
              bersama, pembagian air ke petak hilir menjadi jauh lebih tenang dan
              hasil panen padi merah tetap terjaga.&rdquo;
            </p>
            <div className={styles.authorMeta}>
              <strong>I Wayan Sudira</strong>
              <span>Pekaseh Subak Pulagan, Gianyar</span>
            </div>
          </article>

          <article className={`${styles.bentoTile} ${styles.forestCard}`}>
            <p className={styles.quoteCopy}>
              &ldquo;Beralih ke pupuk kompos dan pestisida nabati tidak hanya
              mengembalikan ekosistem capung dan belut sawah, tetapi juga membuka
              akses pasar beras organik berkelanjutan.&rdquo;
            </p>
            <div className={styles.authorMeta}>
              <strong>Ni Luh Putu Ariasih</strong>
              <span>Kelompok Tani Organik Subak Sembung</span>
            </div>
          </article>

          <article className={`${styles.bentoTile} ${styles.lightCard}`}>
            <p className={styles.quoteCopy}>
              &ldquo;Hal terbaik dari Subak Connect adalah keterlibatan generasi
              muda dan relawan dalam menjaga kebersihan aliran hulu dari sampah
              plastik setiap akhir pekan.&rdquo;
            </p>
            <div className={styles.authorMeta}>
              <strong>I Made Surya Dharma</strong>
              <span>Koordinator Relawan DAS Pakerisan</span>
            </div>
          </article>

          <article className={`${styles.bentoTile} ${styles.forestCard}`}>
            <p className={styles.quoteCopy}>
              &ldquo;Dokumentasi digital membantu wisatawan memahami bahwa
              pematang sawah adalah ruang kerja sakral petani yang wajib
              dihormati etikanya.&rdquo;
            </p>
            <div className={styles.authorMeta}>
              <strong>Kadek Wirawan</strong>
              <span>Pemandu Ekowisata Subak Jatiluwih</span>
            </div>
          </article>

          <div className={`${styles.bentoTile} ${styles.ctaTile}`}>
            <h3 className={styles.ctaTileTitle}>
              Dengarkan Lebih Banyak Kisah Inspiratif dari Krama Subak
            </h3>
            <Link to="/galeri" className="btn-secondary">
              Lihat Semua Cerita →
            </Link>
          </div>
        </div>

        <div className={styles.bottomCtaBanner}>
          <div className={styles.bottomCtaContent}>
            <h2>Bergabung Menjaga Kelestarian Subak Bali Hari Ini</h2>
            <p>
              Ikuti diskusi komunitas, pantau jadwal tanam, atau daftar sebagai
              relawan pelestarian saluran irigasi warisan dunia.
            </p>
            <div className={styles.bottomCtaActions}>
              <Link to="/komunitas" className={styles.ctaLightBtn}>
                Masuk ke Komunitas
              </Link>
              <Link to="/isu" className={styles.ctaOutlineBtn}>
                Pelajari Tantangan &amp; Isu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmerVoicesSection;