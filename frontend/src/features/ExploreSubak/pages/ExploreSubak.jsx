
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ExploreSubak.module.css";
import ScrollReveal from "../../../components/ScrollReveal";

const explorationSteps = [
  { id: "tentang", number: "01", label: "Tentang Subak" },
  { id: "sejarah", number: "02", label: "Sejarah" },
  { id: "filosofi", number: "03", label: "Filosofi" },
  { id: "sistem-air", number: "04", label: "Sistem Air" },
];

const ExploreSubak = () => {
  const [activeSection, setActiveSection] = useState("tentang");

  // Mengikuti section yang sedang dibaca pengunjung
  useEffect(() => {
    const sections = explorationSteps
      .map((step) => document.getElementById(step.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
              <a href="#tentang" className={styles.primaryButton}>
                Mulai Eksplorasi
                <span aria-hidden="true"> ↓</span>
              </a>

              <a href="#filosofi" className={styles.secondaryButton}>
                Langsung ke Filosofi
              </a>
            </div>

            <div className={styles.heroImage}>
              <img
                src="/images/explore/subak-hero.jpg"
                alt="Persawahan terasering Bali"
              />

              <span>
                SUBAK — HARMONI AIR DAN KEHIDUPAN
              </span>
            </div>

          </div>
        </section>
      </ScrollReveal>


      {/* EXPLORATION NAVIGATION */}
      <section className={styles.explorationNav}>
        <div className={styles.container}>

          <div className={styles.navHeading}>
            <span className={styles.navEyebrow}>
              PETA EKSPLORASI
            </span>

            <p>
              Ikuti perjalanan mengenal Subak dari awal hingga akhir.
            </p>
          </div>

          <nav
            className={styles.stepNavigation}
            aria-label="Tahapan eksplorasi Subak"
          >
            {explorationSteps.map((step, index) => (
              <a
                key={step.id}
                href={`#${step.id}`}
                className={`${styles.navStep} ${
                  activeSection === step.id
                    ? styles.navStepActive
                    : ""
                }`}
                aria-current={
                  activeSection === step.id ? "location" : undefined
                }
              >
                <span className={styles.navNumber}>
                  {step.number}
                </span>

                <span className={styles.navLabel}>
                  {step.label}
                </span>

                {index !== explorationSteps.length - 1 && (
                  <span className={styles.navConnector} />
                )}
              </a>
            ))}
          </nav>

        </div>
      </section>


      {/* INTRODUCTION */}
      <ScrollReveal>
        <section
          id="tentang"
          className={styles.introduction}
        >
          <div className={styles.container}>

            <span className={styles.eyebrow}>
              01 — TENTANG SUBAK
            </span>

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

            <div className={styles.introHighlights}>

              <article className={styles.highlightCard}>
                <span>01</span>
                <h3>Pengelolaan Air</h3>
                <p>
                  Mengatur pemanfaatan air untuk memenuhi
                  kebutuhan pertanian secara bersama.
                </p>
              </article>

              <article className={styles.highlightCard}>
                <span>02</span>
                <h3>Kebersamaan</h3>
                <p>
                  Membangun kerja sama dan kesepakatan
                  antarpetani dalam kehidupan pertanian.
                </p>
              </article>

              <article className={styles.highlightCard}>
                <span>03</span>
                <h3>Keseimbangan</h3>
                <p>
                  Menjaga hubungan harmonis antara manusia,
                  alam, dan kehidupan spiritual.
                </p>
              </article>

            </div>

            <a href="#sejarah" className={styles.nextStep}>
              <span>
                <small>SELANJUTNYA</small>
                <strong>Menelusuri Sejarah Subak</strong>
              </span>

              <span className={styles.nextArrow}>↓</span>
            </a>

          </div>
        </section>
      </ScrollReveal>


      {/* HISTORY */}
      <ScrollReveal>
        <section
          id="sejarah"
          className={styles.section}
        >
          <div className={styles.container}>

            <span className={styles.eyebrow}>
              02 — JEJAK SEJARAH
            </span>

            <h2>
              Warisan yang tumbuh
              <em> selama berabad-abad.</em>
            </h2>

            <div className={styles.historyGrid}>

              <div className={styles.historyImage}>
                <img
                  src="/images/explore/petani-subak.jpg"
                  alt="Petani mengelola sawah dalam sistem Subak Bali"
                  loading="lazy"
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

                <div className={styles.historyMilestone}>
                  <span>2012</span>

                  <div>
                    <strong>Pengakuan Warisan Dunia</strong>
                    <p>
                      Lanskap budaya Provinsi Bali dengan sistem
                      Subaknya masuk dalam daftar Warisan Dunia UNESCO.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <a href="#filosofi" className={styles.nextStep}>
              <span>
                <small>SELANJUTNYA</small>
                <strong>Memahami Filosofi Subak</strong>
              </span>

              <span className={styles.nextArrow}>↓</span>
            </a>

          </div>
        </section>
      </ScrollReveal>


      {/* TRI HITA KARANA */}
      <ScrollReveal>
        <section
          id="filosofi"
          className={styles.philosophy}
        >
          <div className={styles.container}>

            <span className={styles.eyebrow}>
              03 — FILOSOFI KEHIDUPAN
            </span>

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
                loading="lazy"
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

                <div className={styles.philosophyExample}>
                  <strong>Dalam kehidupan Subak</strong>
                  <p>
                    Terwujud melalui rasa syukur dan kegiatan
                    spiritual yang berkaitan dengan pertanian.
                  </p>
                </div>
              </article>

              <article className={styles.philosophyCard}>
                <span>02</span>
                <h3>Pawongan</h3>

                <p>
                  Hubungan harmonis antarmanusia melalui gotong
                  royong, musyawarah, dan kebersamaan.
                </p>

                <div className={styles.philosophyExample}>
                  <strong>Dalam kehidupan Subak</strong>
                  <p>
                    Terlihat melalui kerja sama petani dan
                    kesepakatan dalam pembagian air.
                  </p>
                </div>
              </article>

              <article className={styles.philosophyCard}>
                <span>03</span>
                <h3>Palemahan</h3>

                <p>
                  Hubungan harmonis manusia dengan alam melalui
                  pemeliharaan lingkungan dan sumber daya air.
                </p>

                <div className={styles.philosophyExample}>
                  <strong>Dalam kehidupan Subak</strong>
                  <p>
                    Diterapkan melalui pengelolaan air dan
                    pemeliharaan lingkungan pertanian.
                  </p>
                </div>
              </article>

            </div>

            <a href="#sistem-air" className={styles.nextStep}>
              <span>
                <small>SELANJUTNYA</small>
                <strong>Melihat Cara Kerja Sistem Subak</strong>
              </span>

              <span className={styles.nextArrow}>↓</span>
            </a>

          </div>
        </section>
      </ScrollReveal>


      {/* WATER MANAGEMENT */}
      <ScrollReveal>
        <section
          id="sistem-air"
          className={styles.section}
        >
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

                <p>
                  Setiap bagian dari jaringan ini memiliki peran
                  dalam memastikan air dapat dimanfaatkan
                  oleh lahan pertanian.
                </p>

              </div>

              <div className={styles.historyImage}>
                <img
                  src="/images/explore/irigasi-subak.png"
                  alt="Saluran irigasi tradisional Subak"
                  loading="lazy"
                />
              </div>

            </div>


            {/* WATER FLOW VISUALIZATION */}
            <div className={styles.waterFlow}>

              <div className={styles.flowHeading}>
                <span>GAMBARAN SINGKAT</span>
                <h3>Bagaimana air mengalir?</h3>
                <p>
                  Kenali tahapan perjalanan air dalam sistem
                  pengairan Subak.
                </p>
              </div>

              <div className={styles.flowSteps}>
              <div className={styles.flowStep}>
                <span className={styles.flowNumber}>01</span>
                <h3>Sumber Air</h3>
                <p>Air berasal dari mata air, sungai, dan sumber alami lainnya.</p>
              </div>

              <div className={styles.flowStep}>
                <span className={styles.flowNumber}>02</span>
                <h3>Pengambilan Air</h3>
                <p>Air dialirkan melalui bangunan pengambilan menuju jaringan irigasi.</p>
              </div>

              <div className={styles.flowStep}>
                <span className={styles.flowNumber}>03</span>
                <h3>Pengaturan Air</h3>
                <p>Air dibagi secara adil melalui sistem pengelolaan Subak.</p>
              </div>

              <div className={styles.flowStep}>
                <span className={styles.flowNumber}>04</span>
                <h3>Sawah</h3>
                <p>Air sampai ke sawah untuk mendukung kehidupan dan pertanian.</p>
              </div>
            </div>

            </div>

            <div className={styles.journeyInvitation}>
              <span>INGIN MELIHAT LEBIH DEKAT?</span>
              <h3>
                Perjalanan air belum berakhir di sini.
              </h3>
              <p>
                Ikuti setiap tahap perjalanan air, mulai dari
                sumbernya hingga menghidupi hamparan sawah Bali.
              </p>

              <Link
                to="/irigasi"
                className={styles.primaryButton}
              >
                Jelajahi Journey of Water →
              </Link>
            </div>

          </div>
        </section>
      </ScrollReveal>

    </main>
  );
};

export default ExploreSubak;
