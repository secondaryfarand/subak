import React, { useState, useEffect } from 'react';
import {
  FEATURED_ARTICLE,
  FARMER_STORIES,
  ARTICLES_ARCHIVE,
  GALLERY_PHOTOS,
  CONSERVATION_INITIATIVES,
} from '../data/subakStories';
import styles from './StoriesGallery.module.css';

const StoriesGallery = () => {
  const [articleFilter, setArticleFilter] = useState('Semua');
  const [galleryFilter, setGalleryFilter] = useState('Semua');
  const [activeArticle, setActiveArticle] = useState(null);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  const articleCategories = [
    'Semua',
    'Arsitektur Tradisional',
    'Budaya & Ritual',
    'Pelestarian',
  ];

  const galleryCategories = ['Semua', 'Lanskap', 'Irigasi', 'Hulu & Ritual'];

  const filteredArticles =
    articleFilter === 'Semua'
      ? ARTICLES_ARCHIVE
      : ARTICLES_ARCHIVE.filter((art) => art.category === articleFilter);

  const filteredPhotos =
    galleryFilter === 'Semua'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === galleryFilter);

  // Tutup modal dengan tombol Escape & kunci scroll background
  useEffect(() => {
    const isModalOpen = Boolean(activeArticle || lightboxPhoto);
    document.body.style.overflow = isModalOpen ? 'hidden' : '';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveArticle(null);
        setLightboxPhoto(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeArticle, lightboxPhoto]);

  return (
    <main className={styles.pageWrapper}>
      {/* ====================================================================
          1. HERO EDITORIAL & FEATURED STORY
         ==================================================================== */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.pageHeader}>
            <span className={styles.eyebrow}>Arsip Pengetahuan & Dokumentasi</span>
            <h1 className={styles.pageTitle}>Stories &amp; Gallery</h1>
            <p className={styles.pageSubtitle}>
              Kumpulan kisah dari pematang sawah, dokumentasi arsitektur irigasi kuno,
              serta upaya kolektif menjaga kelestarian peradaban Subak di Bali.
            </p>
          </div>

          {/* Kartu Artikel Utama */}
          <article className={styles.featuredCard}>
            <div className={styles.featuredImageBox}>
              <img
                src={FEATURED_ARTICLE.image}
                alt={FEATURED_ARTICLE.title}
                className={styles.featuredImage}
              />
              <span className={styles.featuredBadge}>{FEATURED_ARTICLE.category}</span>
            </div>

            <div className={styles.featuredContent}>
              <div className={styles.metaRow}>
                <span>{FEATURED_ARTICLE.date}</span>
                <span>•</span>
                <span>{FEATURED_ARTICLE.readTime}</span>
              </div>

              <h2 className={styles.featuredTitle}>{FEATURED_ARTICLE.title}</h2>
              <p className={styles.featuredExcerpt}>{FEATURED_ARTICLE.excerpt}</p>

              <div className={styles.authorBox}>
                <div>
                  <strong className={styles.authorName}>{FEATURED_ARTICLE.author}</strong>
                  <span className={styles.authorRole}>{FEATURED_ARTICLE.authorRole}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveArticle(FEATURED_ARTICLE)}
                  className="btn-primary"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ====================================================================
          2. CERITA PETANI (SUARA KRAMA SUBAK)
         ==================================================================== */}
      <section className={styles.farmersSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Suara dari Pematang</span>
            <h2>Kisah Para Penjaga Air</h2>
            <p>
              Di balik indahnya lanskap terasering, ada dedikasi para petani yang merawat
              keseimbangan ekologi dan tradisi gotong royong setiap hari.
            </p>
          </div>

          <div className={styles.farmersGrid}>
            {FARMER_STORIES.map((farmer) => (
              <article key={farmer.id} className={`card ${styles.farmerCard}`}>
                <div className={styles.farmerTop}>
                  <img
                    src={farmer.image}
                    alt={farmer.name}
                    className={styles.farmerAvatar}
                  />
                  <div>
                    <span className={styles.farmerExp}>{farmer.yearsActive}</span>
                    <h3 className={styles.farmerName}>{farmer.name}</h3>
                    <span className={styles.farmerRole}>{farmer.role}</span>
                  </div>
                </div>

                <blockquote className={`${styles.farmerQuote} font-dm-serif`}>
                  {farmer.quote}
                </blockquote>

                <p className={styles.farmerBio}>{farmer.story}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. ARTIKEL & WAWASAN PELESTARIAN
         ==================================================================== */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <div>
              <span className={styles.eyebrow}>Jurnal &amp; Riset</span>
              <h2>Artikel Pelestarian Subak</h2>
            </div>

            <div className={styles.filterGroup} role="tablist">
              {articleCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={articleFilter === cat}
                  onClick={() => setArticleFilter(cat)}
                  className={`${styles.filterChip} ${
                    articleFilter === cat ? styles.filterChipActive : ''
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.articlesGrid}>
            {filteredArticles.map((article) => (
              <article key={article.id} className={`card ${styles.articleCard}`}>
                <div className={styles.articleThumbBox}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className={styles.articleThumb}
                  />
                </div>

                <div className={styles.articleBody}>
                  <div className={styles.metaRow}>
                    <span className={styles.categoryText}>{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>

                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className={styles.readLinkBtn}
                  >
                    Baca Artikel →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. DOKUMENTASI FOTO INTERAKTIF (GALLERY + LIGHTBOX)
         ==================================================================== */}
      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <div>
              <span className={styles.eyebrow}>Dokumentasi Visual</span>
              <h2>Galeri Lanskap &amp; Kehidupan Subak</h2>
            </div>

            <div className={styles.filterGroup} role="tablist">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={galleryFilter === cat}
                  onClick={() => setGalleryFilter(cat)}
                  className={`${styles.filterChip} ${
                    galleryFilter === cat ? styles.filterChipActive : ''
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.galleryGrid}>
            {filteredPhotos.map((photo) => (
              <figure
                key={photo.id}
                onClick={() => setLightboxPhoto(photo)}
                className={`${styles.galleryItem} ${
                  photo.aspect === 'wide' ? styles.spanWide : ''
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className={styles.galleryImage}
                />
                <figcaption className={styles.galleryOverlay}>
                  <span className={styles.photoCategory}>{photo.category}</span>
                  <strong className={styles.photoTitle}>{photo.title}</strong>
                  <span className={styles.photoLocation}>{photo.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. INFORMASI DAMPAK PELESTARIAN
         ==================================================================== */}
      <section className="section">
        <div className="container">
          <div className={styles.conservationBanner}>
            <div className={styles.conservationIntro}>
              <span className={styles.eyebrowLight}>Gerakan Keberlanjutan</span>
              <h2 className={styles.conservationHeading}>
                Komitmen Pelestarian Ekosistem Subak
              </h2>
              <p className={styles.conservationDesc}>
                Pelestarian Subak bukan sekadar menjaga pemandangan indah untuk wisata,
                melainkan mempertahankan ketahanan pangan, tata kelola air bersih, dan
                identitas budaya masyarakat Bali.
              </p>
            </div>

            <div className={styles.conservationStats}>
              {CONSERVATION_INITIATIVES.map((item, idx) => (
                <div key={idx} className={styles.conservationStatCard}>
                  <span className={`stat-number ${styles.conservationMetric}`}>
                    {item.metric}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          MODAL 1: READER ARTIKEL LENGKAP
         ==================================================================== */}
      {activeArticle && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setActiveArticle(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.readerModal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className={styles.closeModalBtn}
              aria-label="Tutup artikel"
            >
              ✕ Tutup
            </button>

            <img
              src={activeArticle.image}
              alt={activeArticle.title}
              className={styles.readerCover}
            />

            <div className={styles.readerBody}>
              <div className={styles.metaRow}>
                <span className={styles.categoryText}>{activeArticle.category}</span>
                {activeArticle.date && (
                  <>
                    <span>•</span>
                    <span>{activeArticle.date}</span>
                  </>
                )}
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h2 className={styles.readerTitle}>{activeArticle.title}</h2>

              {activeArticle.author && (
                <p className={styles.readerAuthor}>
                  Ditulis oleh <strong>{activeArticle.author}</strong> —{' '}
                  {activeArticle.authorRole}
                </p>
              )}

              <div className={styles.readerParagraphs}>
                {activeArticle.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 2: LIGHTBOX FOTO DOKUMENTASI
         ==================================================================== */}
      {lightboxPhoto && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setLightboxPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.lightboxModal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxPhoto(null)}
              className={styles.closeLightboxBtn}
              aria-label="Tutup pratinjau foto"
            >
              ✕
            </button>

            <img
              src={lightboxPhoto.url}
              alt={lightboxPhoto.title}
              className={styles.lightboxImage}
            />

            <div className={styles.lightboxInfo}>
              <div>
                <span className={styles.photoCategory}>{lightboxPhoto.location}</span>
                <h3>{lightboxPhoto.title}</h3>
                <p>{lightboxPhoto.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default StoriesGallery;