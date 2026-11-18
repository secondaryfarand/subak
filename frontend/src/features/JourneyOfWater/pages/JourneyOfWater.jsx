
import React, { useState } from "react";
import styles from "./JourneyOfWater.module.css";
import { waterJourneyData } from "../data/waterJourneyData";
import ScrollReveal from "../../../components/ScrollReveal";

export default function JourneyOfWater() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = waterJourneyData[activeStep];

  return (
    <main className={styles.page}>
      {/* HERO */}
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
      {/* JOURNEY */}
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

        <div className={styles.timeline}>
            <div
            className={styles.timelineProgress}
            style={{
                width: `${(activeStep / (waterJourneyData.length - 1)) * 84}%`
            }}
            />
          {waterJourneyData.map((step, index) => (
            <button
              key={step.id}
              className={`${styles.timelineItem} ${
                activeStep === index ? styles.active : ""
              }`}
              onClick={() => setActiveStep(index)}
            >
              <span className={styles.stepNumber}>
                0{index + 1}
              </span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        <div
            key={currentStep.id}
            className={styles.detailCard}
            >
          <div className={styles.detailImage}>
            <img
              src={currentStep.image}
              alt={currentStep.title}
            />
          </div>

          <div className={styles.detailContent}>
            <span className={styles.stepLabel}>
              TAHAP 0{activeStep + 1}
            </span>

            <h3>{currentStep.title}</h3>

            <p>{currentStep.description}</p>

            <div className={styles.factBox}>
              <strong>TAHUKAH KAMU?</strong>
              <p>{currentStep.fact}</p>
            </div>

            <div className={styles.navigation}>
              <button
                onClick={() =>
                  setActiveStep((prev) => Math.max(0, prev - 1))
                }
                disabled={activeStep === 0}
              >
                ← Sebelumnya
              </button>

              <button
                onClick={() =>
                  setActiveStep((prev) =>
                    Math.min(waterJourneyData.length - 1, prev + 1)
                  )
                }
                disabled={
                  activeStep === waterJourneyData.length - 1
                }
              >
                Selanjutnya →
              </button>
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
      Dari Air Menjadi
      <span> Kehidupan.</span>
    </h2>

    <p>
      Perjalanan air dalam Subak bukan hanya tentang
      mengalirkan air ke sawah. Di dalamnya terdapat
      nilai kebersamaan, keseimbangan alam, dan
      hubungan harmonis yang diwariskan dari generasi
      ke generasi.
    </p>
  </div>

  <div className={styles.valuesGrid}>
    <div className={styles.valueCard}>
      <span>01</span>
      <h3>Parahyangan</h3>
      <p>
        Menjaga hubungan harmonis antara manusia
        dan Tuhan.
      </p>
    </div>

    <div className={styles.valueCard}>
      <span>02</span>
      <h3>Pawongan</h3>
      <p>
        Memperkuat hubungan antarmanusia melalui
        kebersamaan dan gotong royong.
      </p>
    </div>

    <div className={styles.valueCard}>
      <span>03</span>
      <h3>Palemahan</h3>
      <p>
        Menjaga hubungan harmonis antara manusia
        dan lingkungan alam.
      </p>
    </div>
  </div>

  <div className={styles.closingFooter}>
    <p>
      SUBAK BALI — WARISAN UNTUK MASA DEPAN
    </p>
  </div>
</section>
</ScrollReveal>
    </main>
  );
}
