import React, { useState } from 'react';
import styles from './InteractiveSolutionsSection.module.css';

const SUBAK_SYSTEMS = [
  {
    id: 'tektek',
    title: 'Sistem Pembagian Air Tektek',
    summary:
      'Mekanisme distribusi air proporsional menggunakan takik kayu atau batu berukur presisi untuk memastikan keadilan debit di setiap petak sawah.',
    detail:
      'Besaran bagian air (satu tektek) dihitung berdasarkan luas garapan, kebutuhan fase tanam, dan kesepakatan paruman krama sehingga mencegah perebutan air pada musim kemarau.',
  },
  {
    id: 'kertamasa',
    title: 'Pola Tanam Serentak Kerta Masa',
    summary:
      'Penjadwalan masa tanam dan masa bera secara kolektif untuk memutus siklus hidup hama alami tanpa ketergantungan pestisida kimia.',
    detail:
      'Dengan menanam dan memanen dalam rentang waktu yang terkoordinasi, populasi tikus dan wereng terkendali secara biologis sekaligus menjaga kesuburan unsur hara tanah.',
  },
  {
    id: 'digital-hub',
    title: 'Pemetaan & Pelaporan Saluran Terpadu',
    summary:
      'Inovasi digital Subak Connect yang memudahkan petani dan relawan memantau kondisi empelan, telabah, serta agenda gotong royong.',
    detail:
      'Setiap kendala pendangkalan saluran atau pencemaran limbah di hulu dapat segera dilaporkan dan dikoordinasikan bersama pekaseh setempat.',
  },
];

const InteractiveSolutionsSection = () => {
  const [activeId, setActiveId] = useState('digital-hub');

  return (
    <section className={`section ${styles.solutionsSection}`}>
      <div className="container">
        <div className={styles.topHeader}>
          {/* <span className={styles.tagLabel}> Pilar Tata Kelola</span> */}
          <span className={styles.tagLabel}>---------</span>
          <div className={styles.introBlock}>
            <h2 className={styles.sectionTitle}>
              Mendorong Keberlanjutan Lewat Sinergi Tradisi dan Teknologi
            </h2>
            <p className={styles.sectionSubtitle}>
              Perpaduan aturan adat awig-awig dengan pemantauan modern menjaga
              efisiensi distribusi air dan ketahanan pangan Bali.
            </p>
          </div>
        </div>

        <div className={styles.accordionList}>
          {SUBAK_SYSTEMS.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                className={`${styles.accordionItem} ${
                  isOpen ? styles.accordionItemActive : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveId(isOpen ? '' : item.id)}
                  className={styles.accordionTrigger}
                  aria-expanded={isOpen}
                >
                  <span className={styles.itemTitle}>{item.title}</span>
                  <span className={styles.arrowIcon} aria-hidden="true">
                    {isOpen ? '↓' : '→'}
                  </span>
                </button>

                {isOpen && (
                  <div className={styles.accordionPanel}>
                    <p className={styles.itemSummary}>{item.summary}</p>
                    <p className={styles.itemDetail}>{item.detail}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSolutionsSection;