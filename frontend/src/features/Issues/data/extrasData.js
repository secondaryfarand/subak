const M26 = { label: 'Mongabay, Agustus 2026', url: 'https://mongabay.co.id/2026/08/07/tradisi-subak-terdesak-alih-fungsi-lahan-banjir-sampai-serangan-hama/' };

export const OPENING_FACT = {
  big: '90%',
  text: 'dari lebih 100 turis asing yang diwawancarai pada 2010 mengira air di Bali masih melimpah. Separuhnya kaget saat tahu ada ancaman krisis air.',
  source: { label: 'Mongabay, April 2015 (survei 2010)', url: 'https://www.mongabay.co.id/2015/04/15/bali-terancam-krisis-air-mengapa/' },
};

// Setiap kotak punya sumbernya sendiri. Ini urutan penjelasan, bukan satu sebab tunggal.
export const DOMINO = [
  { title: 'Sawah berubah menjadi bangunan', text: 'Luas sawah Bali turun dari sekitar 80.063 hektar (2015) menjadi 64.473,63 hektar (2024).', source: M26 },
  { title: 'Resapan air berkurang', text: 'Sawah dan subak berfungsi sebagai wadah yang meresapkan air hujan. Saat sawah beralih fungsi, fungsi itu ikut hilang.', source: M26 },
  { title: 'Air tanah makin ditarik', text: 'Banyak hotel dan vila memakai air tanah dari sumur bor yang dalam, sementara sumur warga yang dangkal sudah kering.', source: { label: 'Mongabay, April 2015', url: 'https://www.mongabay.co.id/2015/04/15/bali-terancam-krisis-air-mengapa/' } },
  { title: 'Air asin mulai menyusup', text: 'Klor tinggi, tanda intrusi air laut, ditemukan pada 73% dari 44 sampel air tanah di Badung.', source: { label: 'Mongabay, Agustus 2024', url: 'https://mongabay.co.id/2024/08/28/krisis-air-di-sumber-air-bali-perempuan-jadi-korban-terparah/' } },
  { title: 'Petani dan sawah makin terhimpit', text: 'Sawah yang terhimpit bangunan lebih mudah diserbu tikus, dan jumlah petani serta aktivitas bertani ikut berkurang.', source: M26 },
];

export const TIMELINE = [
  { year: '2012', text: 'UNESCO menetapkan lanskap budaya subak sebagai Warisan Budaya Dunia.', source: M26 },
  // TODO(verifikasi): sumber ini situs berita kampus; cari teks resmi Instruksi Gubernur No. 5/2025.
  { year: '2025', text: 'Instruksi Gubernur Bali No. 5 Tahun 2025 melarang alih fungsi lahan pertanian.', source: { label: 'Liputan audiensi BEM Pertanian Unud', url: 'https://achmadnurhidayat.id/bem-pertanian-unud-audiensi-gubernur-bali' } },
  { year: 'Des 2025', text: 'Pansus TRAP DPRD Bali menemukan 13 bangunan diduga melanggar aturan lahan pertanian di Jatiluwih.', source: { label: 'detikBali', url: 'https://www.detik.com/bali/berita/d-8247827/dpr-ri-soroti-polemik-penutupan-tempat-usaha-di-subak-jatiluwih' } },
  { year: '2026', text: 'Perda Bali No. 4 Tahun 2026 mulai mengendalikan alih fungsi lahan produktif.', source: { label: 'RRI, Juli 2026', url: 'https://rri.co.id/denpasar/regional/2597464/koster-paparkan-strategi-amankan-pertanian-dan-alih-fungsi-lahan' } },
  { year: 'Sep 2026', text: 'Secara nasional, usulan lahan sawah berstatus LP2B mencapai 87,52% dari lahan baku sawah (per 6 September).', source: { label: 'Katadata, 7 September 2026', url: 'https://katadata.co.id/berita/industri/6a9e9dd80bca5/pemerintah-amankan-87-lahan-sawah-dari-alih-fungsi-dukung-ketahanan-pangan' } },
];
