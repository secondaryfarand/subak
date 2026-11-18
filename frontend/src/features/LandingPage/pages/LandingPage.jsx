import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import EditorialIntroSection from '../components/EditorialIntroSection';
import InteractiveSolutionsSection from '../components/InteractiveSolutionsSection';
import FieldShowcaseBanner from '../components/FieldShowcaseBanner';
import FarmerVoicesSection from '../components/FarmerVoicesSection';
import HeroVideoSection from '../components/HeroVideoSection';

const LandingPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <main>
        <HeroVideoSection />
        <section id="beranda" className={styles.heroSection}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroText}>
              <span className={styles.eyebrow}>Warisan Budaya Dunia • Bali</span>
              <h1 className={styles.heroTitle}>
                Harmoni Air, Tanah, dan Kehidupan di{' '}
                <em className={styles.italicAccent}>Terasering Bali</em>
              </h1>
              <p className={styles.heroDescription}>
                Lebih dari sekadar sistem irigasi tradisional, Subak adalah wujud nyata
                filosofi <strong>Tri Hita Karana</strong>—menjaga keseimbangan hubungan
                antara manusia, alam, dan Sang Pencipta sejak abad ke-11.
              </p>
              {/* <div className={styles.heroActions}>
                <Link to="/irigasi" className="btn-primary">
                  Pelajari Aliran Air
                </Link>
                <Link to="/filosofi" className="btn-secondary">
                  Baca Filosofi
                </Link>
              </div> */}
            </div>

            <div className={styles.heroImageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=85"
                alt="Terasering sawah hijau di Bali dengan sistem irigasi Subak"
                className={styles.heroImage}
              />
              <div className={styles.imageCaption}>
                <span>Lanskap Subak Jatiluwih, Tabanan</span>
                <span>08°22&apos;S 115°07&apos;E</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Statistik & Angka */}
        <section id="data" className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={`stat-number ${styles.statValue}`}>1.200+</span>
                <span className={styles.statLabel}>Organisasi Subak Aktif</span>
              </div>
              <div className={styles.statItem}>
                <span className={`stat-number ${styles.statValue}`}>19.500</span>
                <span className={styles.statLabel}>Hektar Lahan Terlindungi UNESCO</span>
              </div>
              <div className={styles.statItem}>
                <span className={`stat-number ${styles.statValue}`}>Abad XI</span>
                <span className={styles.statLabel}>Sejarah Peradaban Irigasi</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Child: Editorial Split Narasi + 3 Kartu Foto */}
        <EditorialIntroSection />

        {/* 4. Ekosistem & Pilar Utama (Tri Hita Karana) */}
        <section id="ekosistem" className="section">
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Arsitektur Sosial &amp; Ekologi</span>
              <h2>Tiga Pilar Keseimbangan Subak</h2>
              <p>
                Setiap tetes air yang mengalir dari hulu sungai menuju petak sawah diatur
                secara adil melalui musyawarah krama subak.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              <article className={`card ${styles.featureCard}`}>
                <span className={styles.cardNumber}>01</span>
                <h3>Parahyangan</h3>
                <p>
                  Pura Ulun Danu dan Pura Bedugul menjadi pusat spiritual yang memuliakan
                  air sebagai sumber kehidupan dan kesuburan tanah Bali.
                </p>
              </article>

              <article className={`card ${styles.featureCard}`}>
                <span className={styles.cardNumber}>02</span>
                <h3>Pawongan</h3>
                <p>
                  Tata kelola demokratis antar petani (krama) dalam menentukan jadwal
                  tanam (kerta masa) serta pembagian debit air tanpa konflik.
                </p>
              </article>

              <article className={`card ${styles.featureCard}`}>
                <span className={styles.cardNumber}>03</span>
                <h3>Palemahan</h3>
                <p>
                  Jaringan terowongan air (aungan), bendungan (empelan), dan terasering
                  yang menjaga kelestarian ekosistem sawah secara alami.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 5. Child: Accordion Interaktif Pilar Tata Kelola */}
        <InteractiveSolutionsSection />

        {/* 6. Child: Banner Panorama Sawah & Overlay Card */}
        <FieldShowcaseBanner />

        {/* 7. Kutipan Editorial */}
        <section id="filosofi" className={styles.quoteSection}>
          <div className={`container ${styles.quoteContainer}`}>
            <blockquote className={`${styles.quoteText} font-dm-serif`}>
              &ldquo;Air bukan sekadar komoditas pertanian, melainkan nadi kehidupan
              bersama yang mempersatukan hulu dan hilir dalam rasa syukur.&rdquo;
            </blockquote>
            <cite className={styles.quoteAuthor}>— Kearifan Lokal Krama Subak Bali —</cite>
          </div>
        </section>

        {/* 8. Child: Bento Grid Suara Krama & CTA Penutup */}
        <FarmerVoicesSection />
      </main>
    </div>
  );
};

export default LandingPage;


