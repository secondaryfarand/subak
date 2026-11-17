
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ExploreSubak.module.css';
import ScrollReveal from '../../../components/ScrollReveal';

const ExploreSubak = () => {
  return (
    <main className={styles.page}>

      {/* HERO SECTION */}
      <ScrollReveal>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            MENGENAL SUBAK • WARISAN BUDAYA BALI
          </span>

          <h1>
            Lebih dari Irigasi,
            <br />
            Sebuah <em>Harmoni</em>
            <br />
            Kehidupan.
          </h1>

          <p className={styles.heroDescription}>
            Mengenal Subak, sistem pengelolaan air tradisional
            Bali yang menyatukan manusia, alam, dan spiritualitas
            dalam satu keseimbangan kehidupan.
          </p>

          <div className={styles.heroActions}>
            <a href="#sejarah" className={styles.primaryButton}>
              Kenali Sejarah Subak
            </a>

            <a href="#filosofi" className={styles.secondaryButton}>
              Pelajari Filosofinya
            </a>
          </div>

          <div className={styles.heroImage}>
         <img
            src="/images/explore/subak-hero.jpg"
            alt="Persawahan terasering Bali"
        />
            <span>SUBAK — HARMONI AIR DAN KEHIDUPAN</span>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* INTRODUCTION */}
      <ScrollReveal>
      <section className={styles.introduction}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>01 — TENTANG SUBAK</span>

          <h2>
            Ketika air menjadi
            <em> penghubung kehidupan.</em>
          </h2>

          <p>
            Subak adalah sistem pengelolaan irigasi tradisional
            masyarakat Bali yang tidak hanya mengatur pembagian
            air, tetapi juga membangun kerja sama, tanggung jawab,
            dan hubungan harmonis dengan lingkungan.
          </p>
        </div>
      </section>
</ScrollReveal>

      {/* HISTORY */}
      <ScrollReveal>
      <section id="sejarah" className={styles.section}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>02 — JEJAK SEJARAH</span>

          <h2>
            Warisan yang tumbuh
            <em> selama berabad-abad.</em>
          </h2>

          <div className={styles.historyGrid}>
            <div className={styles.historyImage}>
         <img
            src="/images/explore/petani-subak.jpg"
            alt="Petani Subak Bali"
            />
            </div>

            <div className={styles.historyText}>
              <p>
                Subak berkembang melalui pengetahuan lokal,
                pengalaman bertani, dan kesepakatan masyarakat
                dalam mengelola sumber daya air secara bersama.
              </p>

              <p>
                Sistem ini diwariskan antargenerasi dan menjadi
                bagian penting dari identitas budaya masyarakat Bali.
              </p>

              <p>
                Pada tahun 2012, lanskap budaya Subak Bali
                ditetapkan sebagai Warisan Dunia UNESCO.
              </p>
            </div>
          </div>
        </div>
      </section>
</ScrollReveal>

      {/* TRI HITA KARANA */}
      <ScrollReveal>
      <section id="filosofi" className={styles.philosophy}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>03 — FILOSOFI KEHIDUPAN</span>

          <h2>
            Tri Hita Karana:
            <em> Tiga sumber harmoni.</em>
          </h2>

          <p className={styles.philosophyIntro}>
            Landasan filosofis yang mengajarkan keseimbangan
            hubungan manusia dengan Tuhan, sesama manusia,
            dan alam lingkungan.
          </p>
          <div className={styles.philosophyImage}>
        <img
            src="/images/explore/tri-hita-karana.jpg"
            alt="Pura dan alam Bali sebagai bagian dari filosofi Tri Hita Karana"
        />
        </div>

          <div className={styles.philosophyGrid}>
            <article className={styles.philosophyCard}>
              <span>01</span>
              <h3>Parahyangan</h3>
              <p>
                Hubungan harmonis antara manusia dengan Tuhan
                melalui kehidupan spiritual dan rasa syukur.
              </p>
            </article>

            <article className={styles.philosophyCard}>
              <span>02</span>
              <h3>Pawongan</h3>
              <p>
                Hubungan harmonis antarmanusia melalui gotong
                royong, musyawarah, dan kebersamaan.
              </p>
            </article>

            <article className={styles.philosophyCard}>
              <span>03</span>
              <h3>Palemahan</h3>
              <p>
                Hubungan harmonis manusia dengan alam melalui
                pemeliharaan lingkungan dan sumber daya air.
              </p>
            </article>
          </div>
        </div>
      </section>
</ScrollReveal>

{/* SISTEM IRIGASI */}
<ScrollReveal>
<section className={styles.section}>
  <div className={styles.container}>
    <span className={styles.eyebrow}>
      04 — SISTEM PENGELOLAAN AIR
    </span>

    <h2>
      Air mengalir,
      <em> kehidupan terjaga.</em>
    </h2>

    <div className={styles.historyGrid}>
      <div className={styles.historyText}>
        <p>
          Sistem Subak mengatur aliran dan pembagian air
          dari sumber air menuju lahan pertanian melalui
          jaringan saluran irigasi yang dikelola bersama.
        </p>

        <p>
          Melalui kerja sama dan kesepakatan antarpetani,
          air dapat dimanfaatkan secara teratur untuk
          mendukung kegiatan pertanian.
        </p>
      </div>

      <div className={styles.historyImage}>
        <img
          src="/images/explore/irigasi-subak.png"
          alt="Saluran irigasi tradisional Subak"
        />
      </div>
    </div>
  </div>
</section>
</ScrollReveal>

      {/* JOURNEY CTA */}
      <ScrollReveal>
      <section className={styles.journey}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>LANJUTKAN PENJELAJAHAN</span>

          <h2>
            Ikuti perjalanan
            <em> setiap tetes air.</em>
          </h2>

          <p>
            Cari tahu bagaimana air mengalir dari sumbernya,
            melewati jaringan irigasi, hingga menghidupi
            hamparan sawah Bali.
          </p>

          <Link to="/irigasi" className={styles.primaryButton}>
            Jelajahi Journey of Water →
          </Link>
        </div>
      </section>
</ScrollReveal>
    </main>
  );
};

export default ExploreSubak;
