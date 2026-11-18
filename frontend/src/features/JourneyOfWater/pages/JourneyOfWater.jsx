
import React, { useState } from "react";
import styles from "./JourneyOfWater.module.css";
import { waterJourneyData } from "../data/waterJourneyData";
import ScrollReveal from "../../../components/ScrollReveal";

export default function JourneyOfWater() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = waterJourneyData[activeStep];

  const progress =
    ((activeStep + 1) / waterJourneyData.length) * 100;

  const handlePrevious = () => {
    setActiveStep((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) =>
      Math.min(waterJourneyData.length - 1, prev + 1)
    );
  };

  return (
    <main className={styles.page}>

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <ScrollReveal>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              THE JOURNEY OF WATER
            </span>

            <h1>
              Dari Hulu,
              <br />
              <span>Menuju Kehidupan.</span>
            </h1>

            <p>
              Ikuti perjalanan air dalam sistem Subak Bali,
              dari sumber mata air di pegunungan hingga
              menghidupi hamparan sawah dan masyarakat.
            </p>

            <a href="#journey" className={styles.heroButton}>
              Jelajahi Perjalanan Air ↓
            </a>
          </div>

          <div className={styles.heroImage}>
            <img
              src="/images/explore/subak-hero.jpg"
              alt="Lanskap persawahan Subak Bali"
            />
          </div>
        </section>
      </ScrollReveal>

      {/* =====================================
          WATER JOURNEY SECTION
      ===================================== */}

      <ScrollReveal>
        <section id="journey" className={styles.journey}>

          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>
              WATER JOURNEY
            </span>

            <h2>Menelusuri Jejak Air</h2>

            <p>
              Setiap tetes air melewati perjalanan yang
              menghubungkan alam, manusia, dan kehidupan.
            </p>
          </div>

          <div className={styles.journeyLayout}>

            {/* LEFT: WATER TIMELINE */}

            <div className={styles.waterTimeline}>

              <svg
                className={styles.waterPath}
                viewBox="0 0 320 580"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {/* Background water path */}

                <path
                  className={styles.waterPathTrack}
                  d="M140 45 C140 105 180 105 180 160 C180 220 140 220 140 280 C140 340 180 340 180 400 C180 460 140 460 140 535"
                />

                {/* Animated water flow */}

                <path
                  className={styles.waterPathFlow}
                  d="M140 45 C140 105 180 105 180 160 C180 220 140 220 140 280 C140 340 180 340 180 400 C180 460 140 460 140 535"
                />

                {/* Progress according to active stage */}

                <path
                  className={styles.waterPathProgress}
                  d="M140 45 C140 105 180 105 180 160 C180 220 140 220 140 280 C140 340 180 340 180 400 C180 460 140 460 140 535"
                  pathLength="100"
                  style={{
                    strokeDashoffset:
                      100 -
                      (activeStep /
                        Math.max(waterJourneyData.length - 1, 1)) *
                        100,
                  }}
                />
              </svg>

              {/* STAGE BUTTONS */}

              {waterJourneyData.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  className={`
                    ${styles.waterStepButton}
                    ${styles[`step${index + 1}`]}
                    ${activeStep === index ? styles.waterStepActive : ""}
                    ${activeStep > index ? styles.waterStepCompleted : ""}
                  `}
                  onClick={() => setActiveStep(index)}
                  aria-label={`Pilih tahap ${index + 1}: ${step.title}`}
                  aria-pressed={activeStep === index}
                >
                  <span className={styles.waterStepLabel}>
                    <small>TAHAP 0{index + 1}</small>
                    <strong>{step.title}</strong>
                  </span>

                  <span className={styles.waterStepNumber}>
                    0{index + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* RIGHT: DETAIL CARD */}

            <div
              key={currentStep.id}
              className={styles.detailCard}
            >

              {/* PROGRESS INDICATOR */}

              <div className={styles.journeyProgress}>
                <div className={styles.progressInfo}>
                  <span>PERJALANAN AIR</span>

                  <strong>
                    0{activeStep + 1} / 0{waterJourneyData.length}
                  </strong>
                </div>

                <div
                  className={styles.progressTrack}
                  role="progressbar"
                  aria-label="Kemajuan perjalanan air"
                  aria-valuemin={1}
                  aria-valuemax={waterJourneyData.length}
                  aria-valuenow={activeStep + 1}
                >
                  <div
                    className={styles.progressFill}
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p>{currentStep.title}</p>
              </div>

              {/* STAGE IMAGE */}

              <div className={styles.detailImage}>
                <img
                  src={currentStep.image}
                  alt={currentStep.imageAlt || currentStep.title}
                />
              </div>

              {/* STAGE CONTENT */}

              <div className={styles.detailContent}>
                <span className={styles.stepLabel}>
                  TAHAP 0{activeStep + 1} — WATER JOURNEY
                </span>

                <h3>{currentStep.title}</h3>

                <p>{currentStep.description}</p>

                {/* DID YOU KNOW */}

                <div className={styles.factBox}>
                  <strong>TAHUKAH KAMU?</strong>
                  <p>{currentStep.fact}</p>
                </div>

                {/* NAVIGATION */}

                <div className={styles.navigation}>
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={activeStep === 0}
                  >
                    ← Sebelumnya
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={
                      activeStep === waterJourneyData.length - 1
                    }
                  >
                    Selanjutnya →
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      
      {/* CLOSING SECTION */}
      <ScrollReveal>
        <section className={styles.closing}>
          <div className={styles.closingContent}>
            <span className={styles.eyebrow}>
              MORE THAN IRRIGATION
            </span>

            <h2>
              Air Mengalir,
              <span> Kehidupan Terjaga.</span>
            </h2>

            <p>
              Di balik setiap aliran air, terdapat kerja sama,
              kearifan lokal, dan tanggung jawab untuk menjaga
              keseimbangan alam. Inilah Subak, sebuah warisan
              yang terus menghidupi generasi.
            </p>
          </div>

          <div className={styles.closingImage}>
            <img
              src="/images/explore/journey/sawah-kehidupan.jpg"
              alt="Hamparan sawah hijau sebagai gambaran kehidupan masyarakat Subak"
              loading="lazy"
            />

            <div className={styles.closingImageOverlay}>
              <span>SUBAK BALI</span>
              <p>Warisan untuk Masa Depan</p>
            </div>
          </div>

          <div className={styles.closingFooter}>
            <p>
              A JOURNEY THAT CONNECTS NATURE, PEOPLE, AND LIFE.
            </p>
          </div>
        </section>
      </ScrollReveal>


    </main>
  );
}
