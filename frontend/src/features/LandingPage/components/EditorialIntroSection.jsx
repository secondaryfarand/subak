import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EditorialIntroSection.module.css';

const GALLERY_HIGHLIGHTS = [
  {
    id: 'gal-1',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    caption: 'Pembagian Debit Air Tektek',
  },
  {
    id: 'gal-2',
    image:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    caption: 'Budidaya Padi Organik & Ekosistem',
  },
  {
    id: 'gal-3',
    image:
      'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80',
    caption: 'Jaringan Terowongan Air Aungan',
  },
];

const EditorialIntroSection = () => {
  return (
    <section className={`section ${styles.introSection}`}>
      <div className="container">
        {/* Split 2 Kolom Editorial */}
        <div className={styles.splitGrid}>
          <div className={styles.leftColumn}>
            <span className={styles.eyebrow}>Warisan Ekologi &amp; Agraria</span>
            <h2 className={styles.heading}>
              Merawat Masa Depan Lewat Kearifan Irigasi Subak
            </h2>
          </div>

          <div className={styles.rightColumn}>
            <p className={styles.bodyText}>
              Di Bali, pertanian bukan sekadar urusan panen—melainkan perjanjian
              ekologis antara manusia dan alam. Melalui tata kelola air berbasis
              musyawarah, setiap petak sawah dari hulu hingga hilir memperoleh hak
              aliran yang adil tanpa merusak keseimbangan daerah aliran sungai.
            </p>
            <p className={styles.bodyText}>
              Kolaborasi lintas generasi antara pekaseh, petani muda, dan pemerhati
              lingkungan memastikan warisan budaya dunia ini tetap hidup dan
              adaptif menghadapi perubahan iklim.
            </p>
            <Link to="/eksplorasi" className={styles.storyLink}>
              <span>Jelajahi Kisah &amp; Sejarah Subak</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* 3 Kartu Foto Ber-caption */}
        <div className={styles.photoGrid}>
          {GALLERY_HIGHLIGHTS.map((item) => (
            <figure key={item.id} className={styles.photoCard}>
              <div className={styles.imageFrame}>
                <img
                  src={item.image}
                  alt={item.caption}
                  className={styles.photoImg}
                  loading="lazy"
                />
              </div>
              <figcaption className={styles.photoCaption}>
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialIntroSection;