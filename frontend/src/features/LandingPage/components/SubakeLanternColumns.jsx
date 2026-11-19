import React, { useState } from 'react';
import styles from './SubakLanternColumns.module.css';

const DEFAULT_PANELS = [
  {
    id: '01',
    image: '/images/verticalimg/gambar1.jpg',
    title: 'Hulu & Empelan',
  },
  {
    id: '02',
    image: '/images/verticalimg/gambar2.jpg',
    title: 'Aungan & Tektek',
  },
  {
    id: '03',
    image: '/images/verticalimg/gambar3.jpg',
    title: 'Terasering Jatiluwih',
  },
  {
    id: '04',
    image: '/images/verticalimg/gambar4.jpg',
    title: 'Panen Kerta Masa',
  },
];

const LanternColumnCard = ({ panel, isActiveMobile, onActivateMobile }) => {
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
    setCursorPos({ x: xPercent, y: yPercent });
  };

  const lit = isHovered || isActiveMobile;

  return (
    <article
      className={`${styles.columnCard} ${lit ? styles.isLit : ''}`}
      style={{
        '--cursor-x': `${cursorPos.x}%`,
        '--cursor-y': `${cursorPos.y}%`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handlePointerMove}
      onClick={() => onActivateMobile(panel.id)}
    >
      {/* Lapisan 1: Foto Hitam Putih (Default) */}
      <img
        src={panel.image}
        alt={panel.title}
        className={styles.grayscaleImg}
        loading="lazy"
      />

      {/* Lapisan 2: Foto Berwarna (Hanya terbuka di area cahaya lentera kursor) */}
      <img
        src={panel.image}
        alt=""
        aria-hidden="true"
        className={styles.colorRevealImg}
        loading="lazy"
      />

      {/* Lapisan 3: Pendaran Hangat Lentera yang Mengikuti Kursor */}
      <div className={styles.lanternHalo} aria-hidden="true" />

      {/* Gradien Bawah Halus & Label Minimalis */}
      <div className={styles.bottomShade} aria-hidden="true" />
      <div className={styles.minimalCaption}>
        <span className={styles.indexTag}>{panel.id}</span>
        {/* <span className={styles.titleTag}>{panel.title}</span> */}
      </div>
    </article>
  );
};

const SubakLanternColumns = ({ panels = DEFAULT_PANELS }) => {
  // Ubah dari '01' menjadi null agar tidak ada gambar yang menyala otomatis di awal
  const [activeMobileId, setActiveMobileId] = useState(null);

  const handleCardTap = (id) => {
    // Aktifkan toggle tap hanya di perangkat touch / layar kecil (<= 960px)
    if (window.matchMedia('(hover: none), (max-width: 960px)').matches) {
      setActiveMobileId((prev) => (prev === id ? null : id));
    }
  };

  return (
    <section
      className={styles.fullBleedSection}
      aria-label="Galeri Interaktif Lanskap Subak"
    >
      <div className={styles.columnsGrid}>
        {panels.map((panel) => (
          <LanternColumnCard
            key={panel.id}
            panel={panel}
            isActiveMobile={activeMobileId === panel.id}
            onActivateMobile={handleCardTap}
          />
        ))}
      </div>
    </section>
  );
};

export default SubakLanternColumns;