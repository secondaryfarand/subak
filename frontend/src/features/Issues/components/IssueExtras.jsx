import { useEffect, useMemo, useRef, useState } from 'react';
import { OPENING_FACT, DOMINO, TIMELINE, GUESS } from '../data/extrasData';
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
  <section id="upaya" className={`container ${s.block}`}>
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

export const GuessGame = () => {
  const real = Math.round(GUESS.from - GUESS.to);
  const MAX = 30000;
  const [guess, setGuess] = useState(10000);
  const [shown, setShown] = useState(false);
  const fmt = (n) => n.toLocaleString('id-ID');
  const ratio = guess / real;
  const verdict =
    ratio >= 0.85 && ratio <= 1.15
      ? 'Tebakanmu hampir tepat.'
      : guess < real
      ? `Kenyataannya ${fmt(real - guess)} hektar lebih banyak dari tebakanmu.`
      : `Kenyataannya ${fmt(guess - real)} hektar lebih sedikit dari tebakanmu.`;
  const pitches = Math.round(real / 0.714 / 100) * 100; // 1 lapangan sepak bola ≈ 0,714 ha

  return (
    <section className={`container ${s.block}`}>
      <h2>Tebak dulu</h2>
      <p className={s.lead}>
        Menurutmu, berapa hektar sawah Bali hilang antara 2015 dan 2024? Geser, lalu lihat
        jawabannya.
      </p>
      <label htmlFor="tebakan" className={s.guessLabel}>
        Tebakanmu: <strong>{fmt(guess)} hektar</strong>
      </label>
      <input
        id="tebakan"
        type="range"
        min="0"
        max={MAX}
        step="500"
        value={guess}
        disabled={shown}
        onChange={(e) => setGuess(Number(e.target.value))}
        className={s.slider}
      />
      <div className={s.bars} aria-hidden="true">
        <div className={s.barRow}>
          <span>Tebakanmu</span>
          <div className={s.track}><div className={s.barGuess} style={{ width: shown ? `${(guess / MAX) * 100}%` : 0 }} /></div>
        </div>
        <div className={s.barRow}>
          <span>Kenyataan</span>
          <div className={s.track}><div className={s.barReal} style={{ width: shown ? `${(real / MAX) * 100}%` : 0 }} /></div>
        </div>
      </div>
      <div aria-live="polite" className={s.result}>
        {shown && (
          <>
            <p className={s.resultBig}>{fmt(real)} hektar</p>
            <p>
              {verdict} Luasnya setara sekitar {fmt(pitches)} lapangan sepak bola (perkiraan
              kasar). Angka dari sumber lain, misalnya BPS, bisa berbeda; di sini kami memakai
              satu rangkaian data dinas: {fmt(GUESS.from)} hektar (2015) menjadi{' '}
              {GUESS.to.toLocaleString('id-ID')} hektar (2024). <Src source={GUESS.source} />
            </p>
          </>
        )}
      </div>
      <button type="button" className="btn-primary" onClick={() => setShown(!shown)}>
        {shown ? 'Tebak lagi' : 'Tunjukkan jawabannya'}
      </button>
    </section>
  );
};

// Garis air di tepi halaman: tergambar saat di-scroll, keruh di bagian isu, jernih lagi di bagian upaya.
export const WaterThread = () => {
  const svgRef = useRef(null);
  const lineRef = useRef(null);
  const dropRef = useRef(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    const parent = svgRef.current && svgRef.current.parentElement;
    if (!parent) return undefined;
    const ro = new ResizeObserver(() => setH(parent.offsetHeight));
    ro.observe(parent);
    return () => ro.disconnect();
  }, []);

  const d = useMemo(() => {
    let out = 'M 14 0';
    let x = 14;
    for (let y = 0; y < h; y += 220) {
      const nx = (y / 220) % 2 ? 7 : 21;
      out += ` C ${x} ${y + 110} ${nx} ${y + 110} ${nx} ${y + 220}`;
      x = nx;
    }
    return out;
  }, [h]);

  useEffect(() => {
    const svg = svgRef.current;
    const line = lineRef.current;
    const drop = dropRef.current;
    if (!svg || !line || !drop || !h) return undefined;
    const len = line.getTotalLength();
    line.style.strokeDasharray = len;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const absTop = (sel) => {
      const n = document.querySelector(sel);
      return n ? n.getBoundingClientRect().top + window.scrollY : null;
    };
    let raf = 0;
    const update = () => {
      raf = 0;
      const top = svg.parentElement.getBoundingClientRect().top + window.scrollY;
      const head = window.scrollY + window.innerHeight * 0.6;
      const prog = reduce ? 1 : Math.min(1, Math.max(0, (head - top) / h));
      line.style.strokeDashoffset = len * (1 - prog);
      const pt = line.getPointAtLength(len * prog);
      drop.setAttribute('cx', pt.x);
      drop.setAttribute('cy', pt.y);
      const a = absTop('#daftar-isu');
      const b = absTop('#upaya');
      const murky = !reduce && a !== null && b !== null && head > a && head < b;
      svg.dataset.water = murky ? 'keruh' : 'jernih';
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [d, h]);

  return (
    <svg ref={svgRef} className={s.thread} width="28" height={h} viewBox={`0 0 28 ${h}`} aria-hidden="true" data-water="jernih">
      <path d={d} className={s.ghost} />
      <path ref={lineRef} d={d} className={s.line} />
      <circle ref={dropRef} r="6" className={s.dropCircle} />
    </svg>
  );
};
