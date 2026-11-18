import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ACTIONS } from '../data/actionsData';
import styles from './GreenActionHub.module.css';

const STORAGE_KEY = 'subak-green-actions';

const readCompletedActions = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return ACTIONS.filter((action) => saved[action.id]).length;
  } catch {
    return 0;
  }
};

const GreenActionPage = () => {
  const [completed, setCompleted] = useState(readCompletedActions);

  useEffect(() => {
    const refresh = () => setCompleted(readCompletedActions());
    window.addEventListener('focus', refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener('focus', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  return (
    <main className={styles.page}>
      <header className={`container ${styles.hero}`}>
        <span className={styles.eyebrow}>GERAKAN SAHABAT SUBAK</span>
        <h1>Mulai langkah kecilmu untuk menjaga Subak.</h1>
        <p>
          Pilih cara berpartisipasi. Kamu bisa mulai dari aksi nyata dan ikrar,
          atau menguji keputusanmu melalui situasi yang dekat dengan kehidupan Subak.
        </p>
      </header>

      <section className={`container ${styles.cards}`} aria-label="Pilihan kegiatan kampanye">
        <Link to="/green-action/aksi" className={`${styles.card} ${styles.actionCard}`}>
          <div className={styles.cardTop}>
            <span className={styles.number}>01 / AKSI NYATA</span>
            <span className={styles.arrow} aria-hidden="true">↗</span>
          </div>
          <div className={styles.illustration} aria-hidden="true">
            <svg viewBox="0 0 320 150" role="img">
              <path d="M12 118 Q75 88 145 112 T308 104" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 132 Q80 102 150 126 T308 118" fill="none" stroke="currentColor" strokeWidth="2" opacity=".55"/>
              <path d="M35 105 Q80 65 130 88 T225 82 T300 70" fill="none" stroke="currentColor" strokeWidth="3"/>
              <path d="M74 91 Q72 67 59 55 M74 91 Q89 66 104 58 M74 91 Q73 61 77 42" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <path d="M190 88 Q187 63 174 52 M190 88 Q205 62 220 54 M190 88 Q190 58 194 39" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="260" cy="35" r="16" fill="currentColor" opacity=".18"/>
              <path d="M253 35h14M260 28v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className={styles.cardBody}>
            <h2>Aksi & Ikrar Sahabat Subak</h2>
            <p>
              Centang kebiasaan baikmu, lihat sawah tumbuh bersamamu, lalu buat
              poster ikrar yang bisa dibagikan.
            </p>
            <div className={styles.cardFoot}>
              <span>{completed} aksi telah kamu lakukan</span>
              <strong>Mulai beraksi <span aria-hidden="true">→</span></strong>
            </div>
          </div>
        </Link>

        <Link to="/green-action/kuis" className={`${styles.card} ${styles.quizCard}`}>
          <div className={styles.cardTop}>
            <span className={styles.number}>02 / UJI PILIHANMU</span>
            <span className={styles.arrow} aria-hidden="true">↗</span>
          </div>
          <div className={styles.illustration} aria-hidden="true">
            <svg viewBox="0 0 320 150" role="img">
              <path d="M24 120 Q92 88 160 112 T296 96" fill="none" stroke="currentColor" strokeWidth="3"/>
              <path d="M35 130 Q100 100 165 124 T290 110" fill="none" stroke="currentColor" strokeWidth="2" opacity=".5"/>
              <path d="M110 32h100a15 15 0 0 1 15 15v39a15 15 0 0 1-15 15h-38l-22 19V101h-40a15 15 0 0 1-15-15V47a15 15 0 0 1 15-15Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
              <path d="M132 62h52M132 78h34" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="245" cy="39" r="17" fill="currentColor" opacity=".18"/>
              <path d="m238 39 5 5 10-11" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.cardBody}>
            <h2>Kamu Akan Melakukan Apa?</h2>
            <p>
              Hadapi lima situasi di kawasan Subak. Pilih tindakanmu dan
              temukan alasan di balik etika berkunjung.
            </p>
            <div className={styles.cardFoot}>
              <span>5 skenario interaktif</span>
              <strong>Mulai belajar <span aria-hidden="true">→</span></strong>
            </div>
          </div>
        </Link>
      </section>

      <section className={`container ${styles.note}`}>
        <span aria-hidden="true">✳</span>
        <p>
          Setiap tindakan kecil berarti. Kenali Subak, hormati ruang hidup petani,
          dan bantu warisan ini tetap tumbuh.
        </p>
      </section>
    </main>
  );
};

export default GreenActionPage;
