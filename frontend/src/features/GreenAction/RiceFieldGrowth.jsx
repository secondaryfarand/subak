import styles from './RiceFieldGrowth.module.css';

const pct = (value) => Math.max(0, Math.min(1, value || 0));

/** Ilustrasi SVG orisinal; setiap bagian mengikuti progres kategori checklist. */
const RiceFieldGrowth = ({ progress }) => {
  const water = pct(progress.air);
  const clear = pct(progress.irigasi);
  const clean = pct(progress.sampah);
  const grow = pct(progress.petani);
  const plantScale = 0.25 + grow * 0.75;

  return (
    <section className={styles.scene} aria-labelledby="field-growth-title">
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>DAMPAK AKSIMU</p>
          <h2 id="field-growth-title">Sawah yang tumbuh bersamamu</h2>
          <p>Setiap centang menghidupkan satu bagian dari lanskap Subak.</p>
        </div>
        <span className={styles.live} aria-live="polite">{Math.round((water + clear + clean + grow) / 4 * 100)}% tumbuh</span>
      </div>

      <div className={styles.artFrame}>
        <svg className={styles.art} viewBox="0 0 900 430" role="img" aria-labelledby="rice-title rice-desc">
          <title id="rice-title">Ilustrasi teras sawah Subak yang pulih</title>
          <desc id="rice-desc">Empat teras sawah berubah mengikuti aksi hemat air, menjaga irigasi, mengurangi sampah, dan mendukung petani lokal.</desc>
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#dce8dc"/><stop offset="1" stopColor="#f1e9d5"/></linearGradient>
            <linearGradient id="soil" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#927653"/><stop offset="1" stopColor="#66533e"/></linearGradient>
            <linearGradient id="water-clear" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a9d9d0"/><stop offset="1" stopColor="#5ba7b5"/></linearGradient>
            <linearGradient id="water-dirty" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a88c63"/><stop offset="1" stopColor="#806d50"/></linearGradient>
            <clipPath id="terrace-one"><path d="M80 184 Q220 160 390 184 L390 220 Q220 198 80 220Z"/></clipPath>
            <clipPath id="terrace-two"><path d="M190 246 Q360 220 550 246 L550 282 Q360 260 190 282Z"/></clipPath>
            <clipPath id="terrace-three"><path d="M315 308 Q500 282 700 308 L700 344 Q500 322 315 344Z"/></clipPath>
            <clipPath id="terrace-four"><path d="M455 368 Q640 342 830 368 L830 402 L455 402Z"/></clipPath>
          </defs>

          <rect width="900" height="430" rx="22" fill="url(#sky)"/>
          <circle cx="745" cy="76" r="34" fill="#e4bd72" opacity=".8"/>
          <path d="M0 175 Q110 75 235 150 Q350 65 470 155 Q590 72 720 150 Q815 92 900 150 V245 H0Z" fill="#a5b99a" opacity=".75"/>
          <path d="M0 205 Q130 130 255 194 Q380 120 520 198 Q670 126 900 190 V270 H0Z" fill="#718d70" opacity=".8"/>
          <path d="M0 218 Q130 188 265 218 T540 218 T900 214 V430 H0Z" fill="#b8a17c"/>

          {/* Teras kering menjadi berair seiring checklist Hemat air. */}
          <g>
            <path d="M80 184 Q220 160 390 184 L390 220 Q220 198 80 220Z" fill="url(#soil)"/>
            <path d="M80 184 Q220 160 390 184 L390 220 Q220 198 80 220Z" fill="url(#water-clear)" clipPath="url(#terrace-one)" opacity={water} className={styles.waterFill}/>
            <path d="M190 246 Q360 220 550 246 L550 282 Q360 260 190 282Z" fill="url(#soil)"/>
            <path d="M190 246 Q360 220 550 246 L550 282 Q360 260 190 282Z" fill="url(#water-clear)" clipPath="url(#terrace-two)" opacity={water} className={styles.waterFill}/>
            <path d="M315 308 Q500 282 700 308 L700 344 Q500 322 315 344Z" fill="url(#soil)"/>
            <path d="M315 308 Q500 282 700 308 L700 344 Q500 322 315 344Z" fill="url(#water-clear)" clipPath="url(#terrace-three)" opacity={water} className={styles.waterFill}/>
            <path d="M455 368 Q640 342 830 368 L830 402 L455 402Z" fill="url(#soil)"/>
            <path d="M455 368 Q640 342 830 368 L830 402 L455 402Z" fill="url(#water-clear)" clipPath="url(#terrace-four)" opacity={water} className={styles.waterFill}/>
          </g>

          {/* Garis air mengalir seperti water thread pada halaman Isu. */}
          <path d="M32 160 C95 160 104 202 155 202 S225 229 265 260 S365 275 405 294 S515 315 560 335 S690 350 755 375" fill="none" stroke="#d9d0b8" strokeWidth="15" strokeLinecap="round" opacity=".9"/>
          <path d="M32 160 C95 160 104 202 155 202 S225 229 265 260 S365 275 405 294 S515 315 560 335 S690 350 755 375" fill="none" stroke="#9c7b4e" strokeWidth="8" strokeLinecap="round" />
          <path d="M32 160 C95 160 104 202 155 202 S225 229 265 260 S365 275 405 294 S515 315 560 335 S690 350 755 375" fill="none" stroke="#5ba7b5" strokeWidth="8" strokeLinecap="round" opacity={clear} className={styles.channel}/>
          <path d="M32 160 C95 160 104 202 155 202 S225 229 265 260 S365 275 405 294 S515 315 560 335 S690 350 755 375" fill="none" stroke="#e8f7ef" strokeWidth="2" strokeDasharray="5 14" strokeLinecap="round" opacity={clear}/>

          {/* Sampah di pematang berkurang satu per satu. */}
          <g className={styles.trash}>
            <g opacity={Math.max(0, 1 - clean * 3)}><path d="M128 229 l12 -3 5 15 -13 3Z" fill="#d7c8a4"/><path d="M144 226 l8 1 -1 12 -8 -1Z" fill="#b6c4b0"/></g>
            <g opacity={Math.max(0, 1 - Math.max(0, clean - .25) * 3)}><path d="M290 289 l13 -4 5 14 -14 4Z" fill="#d7c8a4"/><path d="M306 285 l8 2 -2 12 -8 -2Z" fill="#b6c4b0"/></g>
            <g opacity={Math.max(0, 1 - Math.max(0, clean - .55) * 3)}><path d="M640 351 l13 -3 4 13 -13 3Z" fill="#d7c8a4"/><path d="M656 347 l8 1 -1 12 -8 -1Z" fill="#b6c4b0"/></g>
          </g>

          {/* Padi bertumbuh dari teras terbawah. */}
          <g className={styles.rice} style={{ opacity: grow, transform: `translateY(${(1 - grow) * 12}px) scale(${plantScale})`, transformOrigin: '610px 360px' }}>
            {[555, 590, 625, 660, 695].map((x, i) => (
              <g key={x} transform={`translate(${x} 355)`}>
                <path d="M0 0 Q-4 -24 0 -48 M0 -18 Q-17 -34 -22 -40 M0 -27 Q15 -43 19 -49" fill="none" stroke="#496d43" strokeWidth="4" strokeLinecap="round"/>
                <path d="M0 -35 q-13 -12 -17 -8 q4 12 17 13 M2 -40 q12 -14 18 -10 q-5 12 -18 15" fill="#8eaa62"/>
                {i % 2 === 0 && <path d="M-2 -48 q-7 -9 -2 -13 q8 5 5 13 M2 -48 q8 -10 13 -5 q-3 9 -13 9" fill="#c4a75e"/>}
              </g>
            ))}
          </g>

          {/* Petani muncul saat dukungan pada petani lokal bertambah. */}
          <g className={styles.farmer} style={{ opacity: grow, transform: `translateY(${(1 - grow) * 16}px)` }}>
            <circle cx="770" cy="292" r="13" fill="#8b5e42"/>
            <path d="M754 289 Q770 267 786 289Z" fill="#c49a55"/>
            <path d="M757 306 Q770 299 783 306 L790 346 L750 346Z" fill="#52745b"/>
            <path d="M758 316 L740 337 M782 316 L798 332" stroke="#8b5e42" strokeWidth="7" strokeLinecap="round"/>
            <path d="M760 345 L757 366 M780 345 L784 366" stroke="#554638" strokeWidth="8" strokeLinecap="round"/>
            <path d="M747 368 H764 M777 368 H793" stroke="#554638" strokeWidth="5" strokeLinecap="round"/>
          </g>

          <path d="M0 405 Q180 390 350 407 T700 405 T900 400 V430 H0Z" fill="#637c56" opacity=".85"/>
        </svg>
      </div>

      <ul className={styles.legend} aria-label="Progres dampak per kategori">
        <li><span className={`${styles.dot} ${styles.blue}`} /><span>Hemat air</span><strong>{Math.round(water * 100)}%</strong></li>
        <li><span className={`${styles.dot} ${styles.teal}`} /><span>Jaga saluran irigasi</span><strong>{Math.round(clear * 100)}%</strong></li>
        <li><span className={`${styles.dot} ${styles.sand}`} /><span>Kurangi sampah</span><strong>{Math.round(clean * 100)}%</strong></li>
        <li><span className={`${styles.dot} ${styles.green}`} /><span>Dukung petani lokal</span><strong>{Math.round(grow * 100)}%</strong></li>
      </ul>
    </section>
  );
};

export default RiceFieldGrowth;
