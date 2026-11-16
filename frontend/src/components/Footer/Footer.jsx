import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const badges = [
    { top: 'UNESCO', main: 'WORLD HERITAGE', sub: 'SUBAK BALI' },
    { top: 'TRI HITA', main: 'KARANA', sub: 'HARMONY AWARD' },
    { top: 'CERTIFIED', main: 'ECO', sub: 'SUSTAINABLE' },
    { top: 'ORGANIC', main: 'FARMING', sub: 'INITIATIVE' },
    { top: 'BALI', main: 'HERITAGE', sub: 'PRESERVATION' },
    { top: 'GREEN', main: 'TOURISM', sub: 'ASIA PACIFIC' },
    { top: 'WATERSHED', main: 'GUARDIAN', sub: '2026' },
    { top: '1%', main: 'FOR THE', sub: 'PLANET' },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* ================================================================
            1. NEWSLETTER BANNER BOX (Mirip kotak atas referensi)
           ================================================================ */}
        <div className={styles.newsletterBox}>
          <div className={styles.newsletterText}>
            <h3 className={styles.newsletterTitle}>
              Berlangganan buletin Subak
            </h3>
            <p className={styles.newsletterDesc}>
              Ingin menjadi yang pertama mengetahui kabar terbaru dari kawasan Subak?
              <br />
              Masuk ke kotak masuk Anda dan jangan lewatkan cerita pelestarian kami.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
            <div className={styles.inputGroup}>
              <span className={styles.mailIcon} aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  subscribed
                    ? 'Terima kasih telah berlangganan!'
                    : 'Masukkan alamat email Anda di sini'
                }
                className={styles.emailInput}
                aria-label="Alamat email untuk buletin"
              />

              <button
                type="submit"
                className={styles.submitBtn}
                aria-label="Kirim email langganan"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* ================================================================
            2. MIDDLE SECTION: QUICK LINKS, INFORMATION, & SOCIAL ICONS
           ================================================================ */}
        <div className={styles.middleGrid}>
          {/* Kolom 1: Quick Links */}
          <div className={styles.linkColumn}>
            <span className={styles.columnLabel}>quick links</span>
            <ul className={styles.linkList}>
              <li>
                <Link to="/filosofi">Filosofi Tri Hita Karana</Link>
              </li>
              <li>
                <Link to="/tourism-map">TourismMap &amp; Etika Wisata</Link>
              </li>
              <li>
                <Link to="/stories-gallery">Stories &amp; Gallery</Link>
              </li>
              <li>
                <Link to="/ekosistem">Arsitektur Irigasi Subak</Link>
              </li>
            </ul>
          </div>

          {/* Kolom 2: Information & Get Direction */}
          <div className={styles.infoColumn}>
            <span className={styles.columnLabel}>information</span>
            <div className={styles.infoContent}>
              <strong className={styles.orgName}>
                Lanskap Budaya Subak Bali
              </strong>
              <p className={styles.addressText}>
                Kawasan Subak Jatiluwih, Kecamatan Penebel, Kabupaten Tabanan —
                Bali 82152, Indonesia
              </p>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=-8.3688,115.1319"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionLink}
            >
              Get Direction
            </a>
          </div>

          {/* Kolom 3: Social Media Icons */}
          <div className={styles.socialColumn}>
            <div className={styles.socialList}>
              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram Subak Bali"
                className={styles.socialBtn}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook Subak Bali"
                className={styles.socialBtn}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube Subak Bali"
                className={styles.socialBtn}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48L15.5 11.75l-5.75 3.27z" />
                </svg>
              </a>

              {/* Spotify / Podcast */}
              <a
                href="#spotify"
                aria-label="Podcast Suara Subak"
                className={styles.socialBtn}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 10.5c2.5-1 5.5-1 8 0" />
                  <path d="M8.5 13.5c2-.8 4.5-.8 6.5 0" />
                  <path d="M9.5 16.2c1.5-.5 3.5-.5 5 0" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                aria-label="LinkedIn Inisiatif Subak"
                className={styles.socialBtn}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ================================================================
            3. RECOGNITION & SUSTAINABILITY BADGES ROW (Mirip deretan lencana)
           ================================================================ */}
        <div className={styles.badgesRow}>
          {badges.map((badge, index) => (
            <div key={index} className={styles.badgeCard}>
              <span className={styles.badgeTop}>{badge.top}</span>
              <strong className={styles.badgeMain}>{badge.main}</strong>
              <span className={styles.badgeSub}>{badge.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ====================================================================
          4. BOTTOM BAR: COPYRIGHT & RETURN TO TOP
         ==================================================================== */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContent}`}>
          <div className={styles.copyrightGroup}>
            <span>© {new Date().getFullYear()} Proyek Subak Bali.</span>
            <span>All Rights Reserved</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.returnTopBtn}
          >
            Return To Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;