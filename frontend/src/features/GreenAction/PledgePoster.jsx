import { useRef, useState } from 'react';
import styles from './PledgePoster.module.css';

const PledgePoster = ({ name, count, total }) => {
  const posterRef = useRef(null);
  const [status, setStatus] = useState('');
  const displayName = name.trim() || 'Sahabat Subak';
  const pledge = 'Aku berjanji ikut menjaga air, sawah, dan kehidupan yang tumbuh bersama Subak.';

  const createPng = async () => {
    const svg = posterRef.current;
    if (!svg) throw new Error('Poster belum siap.');
    const source = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    try {
      const image = new Image();
      image.decoding = 'async';
      image.src = url;
      await image.decode();
      const canvas = document.createElement('canvas');
      canvas.width = 2160;
      canvas.height = 2700;
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Browser tidak mendukung pembuatan gambar.');
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      const png = await new Promise((resolve, reject) => {
        canvas.toBlob((result) => result ? resolve(result) : reject(new Error('Gagal membuat PNG.')), 'image/png');
      });
      return png;
    } finally {
      URL.revokeObjectURL(url);
    }
  };

  const download = async () => {
    setStatus('Menyiapkan poster...');
    try {
      const png = await createPng();
      const url = URL.createObjectURL(png);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ikrar-sahabat-subak.png';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setStatus('Poster berhasil diunduh.');
    } catch (error) {
      setStatus(error.message || 'Poster belum bisa dibuat. Coba gunakan browser lain.');
    }
  };

  const share = async () => {
    setStatus('Menyiapkan poster...');
    try {
      const png = await createPng();
      const file = new File([png], 'ikrar-sahabat-subak.png', { type: 'image/png' });
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ title: 'Ikrar Sahabat Subak', text: pledge, files: [file] });
        setStatus('Poster siap dibagikan.');
      } else {
        const url = URL.createObjectURL(png);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'ikrar-sahabat-subak.png';
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        setStatus('Berbagi langsung tidak didukung browser ini. Poster diunduh agar bisa kamu bagikan.');
      }
    } catch (error) {
      if (error.name !== 'AbortError') setStatus(error.message || 'Poster belum bisa dibagikan.');
      else setStatus('Berbagi dibatalkan.');
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.preview}>
        <svg ref={posterRef} className={styles.poster} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" role="img" aria-label={`Poster ikrar Sahabat Subak atas nama ${displayName}`}>
          <defs>
            <linearGradient id="poster-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#e8edda"/><stop offset="1" stopColor="#f6e9cf"/></linearGradient>
            <linearGradient id="poster-water" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b9d9c9"/><stop offset="1" stopColor="#6dabb0"/></linearGradient>
            <clipPath id="poster-clip"><rect x="58" y="470" width="964" height="530" rx="34"/></clipPath>
          </defs>
          <rect width="1080" height="1350" fill="#f6f1e5"/>
          <path d="M0 0H1080V360Q790 420 540 350T0 370Z" fill="#214c3b"/>
          <text x="76" y="100" fill="#d8c18a" fontFamily="Arial,sans-serif" fontSize="27" fontWeight="700" letterSpacing="8">SUBAK</text>
          <text x="1004" y="100" textAnchor="end" fill="#d8c18a" fontFamily="Arial,sans-serif" fontSize="20" letterSpacing="3">SAHABAT BUMI BALI</text>
          <text x="76" y="205" fill="#fff9e9" fontFamily="Georgia,serif" fontSize="66" fontWeight="700">Aku Sahabat</text>
          <text x="76" y="282" fill="#e5d29f" fontFamily="Georgia,serif" fontSize="76" fontWeight="700">Subak.</text>

          <g clipPath="url(#poster-clip)">
            <rect x="58" y="470" width="964" height="530" fill="url(#poster-sky)"/>
            <circle cx="840" cy="560" r="55" fill="#e5bf76" opacity=".9"/>
            <path d="M58 710Q210 535 370 680T690 660T1022 650V1000H58Z" fill="#a6b99a"/>
            <path d="M58 760Q230 625 410 755T760 725T1022 735V1000H58Z" fill="#6f916d"/>
            <path d="M58 820Q240 735 420 820T760 800T1022 810V1000H58Z" fill="#b49b70"/>
            <path d="M95 755Q270 720 440 755L440 810Q270 780 95 810Z" fill="#806747"/>
            <path d="M95 755Q270 720 440 755L440 810Q270 780 95 810Z" fill="url(#poster-water)"/>
            <path d="M300 830Q490 790 690 830L690 885Q490 855 300 885Z" fill="#806747"/>
            <path d="M300 830Q490 790 690 830L690 885Q490 855 300 885Z" fill="url(#poster-water)"/>
            <path d="M515 905Q700 870 940 905L940 965H515Z" fill="#806747"/>
            <path d="M515 905Q700 870 940 905L940 965H515Z" fill="url(#poster-water)"/>
            <path d="M58 720C180 720 185 790 300 790S430 850 515 850S690 930 850 930" fill="none" stroke="#e8f3df" strokeWidth="13" strokeLinecap="round"/>
            <path d="M58 720C180 720 185 790 300 790S430 850 515 850S690 930 850 930" fill="none" stroke="#5e9e9e" strokeWidth="7" strokeLinecap="round"/>
            {Array.from({ length: 15 }, (_, i) => {
              const x = 145 + (i % 5) * 48 + Math.floor(i / 5) * 95;
              const y = 735 + Math.floor(i / 5) * 83;
              return <g key={i} transform={`translate(${x} ${y})`}><path d="M0 0Q-4 -35 0 -62M0 -28Q-22 -49 -29 -52M0 -40Q21 -62 29 -65" fill="none" stroke="#3f7049" strokeWidth="7" strokeLinecap="round"/><path d="M0 -45q-20 -18 -27 -9q8 18 27 19M2 -51q18 -21 29 -10q-8 18 -29 20" fill="#91a95f"/></g>;
            })}
            <path d="M865 850Q875 810 910 850L925 950H850Z" fill="#52745b"/>
            <circle cx="890" cy="815" r="27" fill="#946447"/>
            <path d="M855 814Q890 765 925 814Z" fill="#c59c58"/>
            <path d="M875 948L870 986M905 948L910 986" stroke="#594b3c" strokeWidth="13" strokeLinecap="round"/>
          </g>
          <rect x="58" y="470" width="964" height="530" rx="34" fill="none" stroke="#d5c7a7" strokeWidth="3"/>

          <text x="76" y="1070" fill="#8c7956" fontFamily="Arial,sans-serif" fontSize="22" fontWeight="700" letterSpacing="4">IKRAR DARI</text>
          <text x="76" y="1130" fill="#214c3b" fontFamily="Georgia,serif" fontSize="52" fontWeight="700">{displayName.length > 22 ? `${displayName.slice(0, 21)}…` : displayName}</text>
          <text x="76" y="1170" fill="#4e5b4c" fontFamily="Arial,sans-serif" fontSize="23">Aku berjanji ikut menjaga air, sawah,</text>
          <text x="76" y="1202" fill="#4e5b4c" fontFamily="Arial,sans-serif" fontSize="23">dan kehidupan yang tumbuh bersama Subak.</text>
          <rect x="76" y="1230" width="928" height="2" fill="#d9cfb9"/>
          <text x="76" y="1280" fill="#214c3b" fontFamily="Arial,sans-serif" fontSize="34" fontWeight="700">{count} / {total}</text>
          <text x="250" y="1278" fill="#657260" fontFamily="Arial,sans-serif" fontSize="22">AKSI TELAH DILAKUKAN</text>
          <text x="1004" y="1320" textAnchor="end" fill="#8b8068" fontFamily="Arial,sans-serif" fontSize="17" letterSpacing="2">JAGA AIR • RAWAT SAWAH • LESTARIKAN SUBAK</text>
        </svg>
      </div>
      <div className={styles.actions}>
        <button type="button" className="btn-primary" onClick={download}>Unduh poster PNG</button>
        <button type="button" className="btn-secondary" onClick={share}>Bagikan poster</button>
      </div>
      <p className={styles.status} role="status" aria-live="polite">{status || 'Simpan poster atau bagikan langsung melalui aplikasi yang tersedia di perangkatmu.'}</p>
    </div>
  );
};

export default PledgePoster;
