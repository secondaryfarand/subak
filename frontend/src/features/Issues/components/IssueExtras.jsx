import { useState } from 'react';
import { OPENING_FACT, DOMINO, TIMELINE } from '../data/extrasData';
import s from './Extras.module.css';

const Src = ({ source }) => (
  <a href={source.url} target="_blank" rel="noreferrer noopener" className={s.src}>
    {source.label}
  </a>
);

export const FactBanner = () => (
  <section className={`container ${s.fact}`}>
    <p className={s.factBig}>{OPENING_FACT.big}</p>
    <p className={s.factText}>
      {OPENING_FACT.text} <Src source={OPENING_FACT.source} />
    </p>
  </section>
);

export const DominoChain = () => {
  const [step, setStep] = useState(0);
  const done = step >= DOMINO.length;
  return (
    <section className={`container ${s.block}`}>
      <h2>Satu kelereng jatuh, yang lain ikut jatuh</h2>
      <p className={s.lead}>
        Isu-isu ini saling bersambung. Jatuhkan kelerengnya satu per satu. Tiap kotak punya
        sumbernya sendiri, dan urutan ini adalah cara menjelaskan, bukan satu sebab tunggal.
      </p>
      <ol className={s.chain}>
        {DOMINO.map((d, i) => (
          <li key={d.title} className={`${s.node} ${i < step ? s.lit : ''}`}>
            <button type="button" className={s.nodeBtn} onClick={() => setStep(i + 1)} aria-expanded={i < step}>
              {d.title}
            </button>
            {i < step && (
              <div className={s.nodeBody}>
                <p>{d.text}</p>
                <Src source={d.source} />
              </div>
            )}
          </li>
        ))}
      </ol>
      <button
        type="button"
        className="btn-primary"
        onClick={() => setStep(done ? 0 : step + 1)}
      >
        {done ? 'Ulangi dari awal' : step === 0 ? 'Jatuhkan kelerengnya' : 'Lanjut'}
      </button>
    </section>
  );
};

export const Timeline = () => (
  <section className={`container ${s.block}`}>
    <h2>Yang sudah dilakukan</h2>
    <p className={s.lead}>Masalahnya nyata, tetapi upaya juga berjalan.</p>
    <ol className={s.timeline}>
      {TIMELINE.map((t) => (
        <li key={t.year + t.text}>
          <span className={s.year}>{t.year}</span>
          <div>
            <p>{t.text}</p>
            <Src source={t.source} />
          </div>
        </li>
      ))}
    </ol>
  </section>
);
