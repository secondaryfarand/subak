import { Link, useParams } from 'react-router-dom';
import { getIssue } from '../data/issuesData';
import styles from './Issues.module.css';

const IssueDetail = () => {
  const { slug } = useParams();
  const issue = getIssue(slug);

  if (!issue) {
    return (
      <main className={styles.page}>
        <div className={`container ${styles.article}`}>
          <h1>Isu tidak ditemukan</h1>
          <p>Alamat ini tidak cocok dengan isu mana pun.</p>
          <Link to="/isu" className="btn-primary">Lihat semua isu</Link>
        </div>
      </main>
    );
  }

  const num = (id) => issue.sources.findIndex((s) => s.id === id) + 1;

  return (
    <main className={styles.page}>
      <article className={`container ${styles.article}`}>
        <h1 className={styles.detailTitle}>{issue.title}</h1>
        <p className={styles.meta}>
          {issue.evidenceLevel}, {issue.readTime}, diperbarui {issue.updatedAt}
        </p>
        <img src={issue.image} alt={issue.imageAlt} className={styles.detailImg} />

        <div className={styles.layout}>
          <aside className={styles.side} aria-label="Ringkasan">
            <div className={styles.summaryBox}>
              <h2>Ringkasan singkat</h2>
              <ul>
                {issue.keyPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div className={styles.statBox}>
              <p className={styles.statValue}>{issue.keyStat.value}</p>
              <p className={styles.statLabel}>{issue.keyStat.label}</p>
            </div>
          </aside>

          <div className={styles.main}>
            <h2>Apa yang terjadi</h2>
            {issue.whatHappened.map((p) => <p key={p}>{p}</p>)}

            <h2>Kenapa ini mengancam Subak</h2>
            {issue.whyItMatters.map((p) => <p key={p}>{p}</p>)}

            <h2>Data dan bukti</h2>
            <ul className={styles.evidence}>
              {issue.evidence.map((e) => (
                <li key={e.text}>
                  {e.text}
                  {e.src.map((id) => (
                    <a key={id} href={`#src-${id}`} className={styles.cite} aria-label={`Sumber ${num(id)}`}>
                      [{num(id)}]
                    </a>
                  ))}
                </li>
              ))}
            </ul>

            <h2>Sudut pandang</h2>
            <dl className={styles.views}>
              {issue.perspectives.map((p) => (
                <div key={p.who + p.view}>
                  <dt>{p.who}</dt>
                  <dd>{p.view}</dd>
                </div>
              ))}
            </dl>

            <h2>Yang sedang dilakukan</h2>
            <ul>
              {issue.responses.map((r) => <li key={r}>{r}</li>)}
            </ul>

            <div className={styles.cta}>
              <h2>Dari tahu menjadi bertindak</h2>
              <p>Ada langkah kecil yang bisa kamu lakukan untuk isu ini.</p>
              <Link to="/green-action" className="btn-primary">Buka daftar aksi</Link>
            </div>

            <h2>Sumber</h2>
            <ol className={styles.sources}>
              {issue.sources.map((s) => (
                <li key={s.id} id={`src-${s.id}`}>
                  <a href={s.url} target="_blank" rel="noreferrer noopener">{s.title}</a>
                  <span>
                    {s.publisher}
                    {s.date ? `, ${s.date}` : ''}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </main>
  );
};

export default IssueDetail;
