import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ISSUES, HERO_FIGURE } from '../data/issuesData';
import { FactBanner, DominoChain, Timeline } from '../components/IssueExtras';
import styles from './Issues.module.css';

const ROWS = [380, 430, 350, 440, 400, 360];
const RATIO = HERO_FIGURE.to / HERO_FIGURE.from;

// Satu teras = satu pita. Garis putus = luas 2015, pita hijau = luas 2024.
const TerraceChart = () => (
  <figure className={styles.chart}>
    <svg
      viewBox="0 0 480 330"
      role="img"
      aria-label="Enam teras sawah. Garis putus menunjukkan luas sawah Bali tahun 2015, pita hijau menunjukkan luas tahun 2024, sekitar 19 persen lebih kecil."
    >
      {ROWS.map((w, i) => {
        const x = 16 + (i % 2) * 18;
        const y = 8 + i * 53;
        return (
          <g key={w + i}>
            <rect x={x} y={y} width={w} height="40" rx="20" className={styles.then} />
            <rect
              x={x}
              y={y}
              width={w * RATIO}
              height="40"
              rx="20"
              className={styles.now}
              style={{ animationDelay: `${0.35 + i * 0.09}s` }}
            />
          </g>
        );
      })}
    </svg>
    <figcaption>
      <strong>80.063 ha → 64.474 ha</strong> luas sawah Bali, 2015–2024.
      <br />
      Sumber: {HERO_FIGURE.source}
    </figcaption>
  </figure>
);

const IssuesPage = () => {
  const categories = ['Semua', ...new Set(ISSUES.map((i) => i.category))];
  const [filter, setFilter] = useState('Semua');
  const list = filter === 'Semua' ? ISSUES : ISSUES.filter((i) => i.category === filter);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className={styles.kicker}>Isu lingkungan Subak</p>
            <h1 className={styles.heroTitle}>Sawah menyusut, air ikut pergi.</h1>
            <p className={styles.heroLead}>
              Subak mengatur air Bali selama ratusan tahun dan diakui UNESCO sebagai warisan
              dunia. Kini ia ditekan dari beberapa sisi sekaligus. Setiap isu di bawah memuat
              data, sudut pandang berbagai pihak, dan sumber yang bisa kamu periksa sendiri.
            </p>
          </div>
          <TerraceChart />
        </div>
      </section>

      <FactBanner />

      <section id="daftar-isu" className={`container ${styles.listSection}`}>
        <div className={styles.listHead}>
          <h2>Tiga isu yang perlu kamu tahu</h2>
          <div className={styles.filters} role="group" aria-label="Filter kategori isu">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                className={`${styles.chip} ${filter === c ? styles.chipOn : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {list.map((issue) => (
            <Link
              key={issue.id}
              to={`/isu/${issue.id}`}
              className={styles.card}
            >
              <img src={issue.image} alt={issue.imageAlt} loading="lazy" className={styles.cardImg} />
              <div className={styles.cardBody}>
                <span className={styles.tag}>{issue.category}</span>
                <h3>{issue.title}</h3>
                <p>{issue.summary}</p>
                <p className={styles.stat}>
                  <strong>{issue.keyStat.value}</strong> {issue.keyStat.label}
                </p>
                <p className={styles.meta}>
                  {issue.evidenceLevel}, {issue.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <DominoChain />
      <Timeline />

      <section className={`container ${styles.note}`}>
        <h2>Dari mana angkanya?</h2>
        <p>
          Setiap angka disertai sumber dan tahunnya. Jika sumber berbeda memberi angka berbeda,
          kami menampilkannya sebagai rentang dan menyebut siapa yang mengatakannya. Proyeksi
          diberi label proyeksi.
        </p>
      </section>
    </main>
  );
};

export default IssuesPage;
