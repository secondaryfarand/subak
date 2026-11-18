import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ACTIONS, CATEGORIES, ROLES, BADGES } from '../data/actionsData';
import { getIssue } from '../../Issues/data/issuesData';
import styles from './GreenAction.module.css';
import RiceFieldGrowth from '../RiceFieldGrowth';
import PledgePoster from '../PledgePoster';

const KEY = 'subak-green-actions';
const load = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
};

const GreenActionPage = () => {
  const [params, setParams] = useSearchParams();
  const focus = params.get('isu');
  const focusIssue = focus ? getIssue(focus) : null;
  const [role, setRole] = useState('all');
  const [done, setDone] = useState(load);
  const [name, setName] = useState('');
  const [pledged, setPledged] = useState(false);

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(done)); } catch { /* abaikan */ }
  }, [done]);

  const visible = ACTIONS.filter((a) => role === 'all' || !a.roles || a.roles.includes(role));
  const count = visible.filter((a) => done[a.id]).length;
  const ratio = count / visible.length;
  const toggle = (id) => setDone((d) => ({ ...d, [id]: !d[id] }));
  const categoryProgress = Object.fromEntries(CATEGORIES.map((category) => {
    const categoryItems = visible.filter((action) => action.cat === category.id);
    const completed = categoryItems.filter((action) => done[action.id]).length;
    return [category.id, categoryItems.length ? completed / categoryItems.length : 0];
  }));

  return (
    <main className={styles.page}>
      <header className={`container ${styles.hero}`}>
        <Link to="/green-action" className={styles.back}>← Kembali ke Kampanye</Link>
        <h1>Dari tahu menjadi bertindak</h1>
        <p>
          Subak tidak terselamatkan oleh satu orang besar, tetapi oleh banyak kebiasaan kecil.
          Pilih perananmu, lalu centang aksi yang sudah kamu lakukan.
        </p>
        <div className={styles.chips} role="group" aria-label="Pilih peran">
          {ROLES.map((r) => (
            <button
              key={r.id}
              type="button"
              aria-pressed={role === r.id}
              className={`${styles.chip} ${role === r.id ? styles.chipOn : ''}`}
              onClick={() => setRole(r.id)}
            >
              {r.label}
            </button>
          ))}
        </div>
        {focusIssue && (
          <p className={styles.focus}>
            Kamu datang dari isu &ldquo;{focusIssue.title}&rdquo;. Aksi yang terkait diberi tanda.{' '}
            <button type="button" onClick={() => setParams({})}>Hapus tanda</button>
          </p>
        )}
      </header>

      <section className={`container ${styles.actionWorkspace}`} aria-label="Dampak aksi dan daftar checklist">
        <div className={styles.growthPanel}>
          <RiceFieldGrowth progress={categoryProgress} />
        </div>

        <div className={styles.checklistPanel} aria-label="Daftar aksi yang dapat dicentang">
          <div className={styles.progress}>
            <div className={styles.progressInner}>
              <div
                className={styles.bar}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={visible.length}
                aria-valuenow={count}
                aria-label="Progres aksi"
              >
                <div className={styles.barFill} style={{ width: `${ratio * 100}%` }} />
              </div>
              <p className={styles.count}><strong>{count}</strong> dari {visible.length} aksi</p>
              <ul className={styles.badges}>
                {BADGES.map((b) => (
                  <li key={b.name} className={ratio >= b.min && count > 0 ? styles.badgeOn : ''}>{b.name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.lists}>
            {CATEGORIES.map((c) => {
              const items = visible.filter((a) => a.cat === c.id);
              if (!items.length) return null;
              return (
                <section key={c.id}>
                  <h2>{c.title}</h2>
                  <ul className={styles.items}>
                    {items.map((a) => (
                      <li key={a.id} className={`${styles.item} ${focus === c.issue ? styles.mark : ''}`}>
                        <label>
                          <input type="checkbox" checked={!!done[a.id]} onChange={() => toggle(a.id)} />
                          <span>{a.text}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/isu/${c.issue}`} className={styles.why}>
                    Kenapa ini penting: {getIssue(c.issue)?.title}
                  </Link>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`container ${styles.pledge}`}>
        <h2>Ikrar sahabat Subak</h2>
        <label htmlFor="nama">Namamu (boleh dikosongkan)</label>
        <input id="nama" type="text" value={name} maxLength={40} placeholder="Tulis namamu di sini" onChange={(e) => setName(e.target.value)} />
        <button type="button" className="btn-primary" onClick={() => setPledged(true)}>Aku berjanji</button>
        {pledged && <PledgePoster name={name} count={count} total={visible.length} />}
      </section>

      <section className={`container ${styles.more}`}>
        <p>
          Mau melangkah lebih jauh? <Link to="/peta-subak">Kunjungi Subak dengan etika</Link> atau{' '}
          <Link to="/galeri">baca kisah para petani</Link>.
        </p>
      </section>
    </main>
  );
};

export default GreenActionPage;
