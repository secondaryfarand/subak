import React from 'react';
import styles from './LandingPage.module.css';
import ScrollReveal from '../../../components/ScrollReveal';
import HeroVideoSection from '../components/HeroVideoSection';
import EditorialIntroSection from '../components/EditorialIntroSection';
import InteractiveSolutionsSection from '../components/InteractiveSolutionsSection';
import FieldShowcaseBanner from '../components/FieldShowcaseBanner';
import FarmerVoicesSection from '../components/FarmerVoicesSection';

const LandingPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <main>
        {/* 1. Hero Video Sinematik Full-Screen (Langsung tampil tanpa delay ScrollReveal) */}
        <HeroVideoSection />

        {/* 2. Statistik & Angka */}
        <ScrollReveal delay={100}>
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
        </ScrollReveal>

        {/* 3. Child: Editorial Split Narasi + 3 Kartu Foto */}
        <ScrollReveal delay={100}>
          <EditorialIntroSection />
        </ScrollReveal>

        {/* 4. Ekosistem & Pilar Utama (Tri Hita Karana) */}
        <ScrollReveal delay={100}>
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
        </ScrollReveal>

        {/* 5. Child: Accordion Interaktif Pilar Tata Kelola */}
        <ScrollReveal delay={100}>
          <InteractiveSolutionsSection />
        </ScrollReveal>

        {/* 6. Child: Banner Panorama Sawah & Overlay Card */}
        <ScrollReveal delay={100}>
          <FieldShowcaseBanner />
        </ScrollReveal>

        {/* 7. Kutipan Editorial */}
        <ScrollReveal delay={100}>
          <section id="filosofi" className={styles.quoteSection}>
            <div className={`container ${styles.quoteContainer}`}>
              <blockquote className={`${styles.quoteText} font-dm-serif`}>
                &ldquo;Air bukan sekadar komoditas pertanian, melainkan nadi kehidupan
                bersama yang mempersatukan hulu dan hilir dalam rasa syukur.&rdquo;
              </blockquote>
              <cite className={styles.quoteAuthor}>— Kearifan Lokal Krama Subak Bali —</cite>
            </div>
          </section>
        </ScrollReveal>

        {/* 8. Child: Bento Grid Suara Krama & CTA Penutup */}
        <ScrollReveal delay={100}>
          <FarmerVoicesSection />
        </ScrollReveal>
      </main>
    </div>
  );
};

export default LandingPage;