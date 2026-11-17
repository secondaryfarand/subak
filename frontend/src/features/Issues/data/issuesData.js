// Angka di bawah dikutip dari sumber yang tercantum di tiap isu.
// Sebelum rilis, buka setiap tautan sumber dan cocokkan angkanya.

export const HERO_FIGURE = {
  from: 80063,
  to: 64473.63,
  label: 'Luas sawah Bali, 2015 dan 2024',
  source: 'Dinas Pertanian dan Ketahanan Pangan Bali',
};

export const ISSUES = [
  {
    id: 'alih-fungsi-lahan',
    category: 'Lahan',
    title: 'Kenapa sawah Bali terus berkurang?',
    summary:
      'Sawah menyusut dari tahun ke tahun, dan bersamanya hilang pula kemampuan Bali menahan air hujan.',
    keyStat: { value: '80.063 → 64.474 ha', label: 'Luas sawah Bali, 2015–2024' },
    evidenceLevel: 'Data resmi',
    readTime: '5 menit baca',
    updatedAt: 'November 2026',
    image:
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Terasering sawah hijau di Bali',
    keyPoints: [
      'Luas sawah Bali turun sekitar 15.600 hektar dalam sembilan tahun (data dinas).',
      'Sawah berfungsi seperti wadah resapan air; saat berubah jadi bangunan, fungsi itu hilang.',
      'Pemerintah sudah menerbitkan Perda No. 4 Tahun 2026 untuk mengerem alih fungsi.',
    ],
    whatHappened: [
      'Di banyak tempat, terutama Bali bagian selatan, sawah berganti menjadi vila, hotel, dan permukiman. Dinas Pertanian Bali menyebut tekanan itu datang dari alih fungsi, terpecahnya kepemilikan lahan, dan semakin sedikitnya petani yang masih menggarap sawah.',
      'Hamparan sawah yang dulu menyatu kini terpotong bangunan. Sawah yang terhimpit juga lebih mudah diserang hama seperti tikus.',
    ],
    whyItMatters: [
      'Bayangkan sawah sebagai spons besar. Saat hujan, air meresap ke sawah dan saluran subak, lalu tersimpan. Ketika spons itu diganti beton, air mengalir pergi dan cadangan air tanah ikut berkurang.',
      'Subak bukan hanya sawah, tetapi juga organisasi petani yang berbagi air. Semakin sedikit petani dan sawah, semakin lemah pula aturan bersama yang menjaga air tetap adil.',
    ],
    evidence: [
      { text: 'Luas sawah Bali turun dari sekitar 80.063 hektar (2015) menjadi 64.473,63 hektar (2024).', src: ['dpkp'] },
      { text: 'Di Kecamatan Kuta dan Kota Denpasar, lahan pertanian menyusut dari 7.600 hektare (41,6% wilayah) menjadi 3.305,91 hektare (18,2%) pada 2000–2020.', src: ['tirto'] },
      { text: 'Perkiraan laju alih fungsi berbeda tiap pihak: sekitar 700 hektare per tahun (Gubernur Bali), hingga 1.000 hektare per tahun (akademisi Unud), dan rata-rata 1.254 hektare per tahun dalam lima tahun terakhir (Menteri ATR/BPN). Karena itu kami menampilkannya sebagai rentang.', src: ['rri', 'dpkp', 'cna'] },
      { text: 'Seorang akademisi Unud memproyeksikan subak bisa habis dalam 65 tahun bila alih fungsi terus berlangsung. Ini proyeksi, bukan data.', src: ['dpkp'] },
    ],
    perspectives: [
      { who: 'Pemerintah Provinsi Bali', view: 'Menyatakan pengendalian diperketat lewat Perda No. 4 Tahun 2026, termasuk larangan mengubah sawah menjadi usaha pariwisata.' },
      { who: 'Kementerian ATR/BPN', view: 'Menyatakan alih fungsi dimoratorium dan lahan yang berstatus LP2B tidak boleh dialihfungsikan.' },
      { who: 'Akademisi', view: 'Menekankan hilangnya fungsi resapan air dan terpecahnya lanskap subak.' },
    ],
    responses: ['Perda Bali No. 4 Tahun 2026 tentang pengendalian alih fungsi lahan produktif', 'Penetapan Lahan Pertanian Pangan Berkelanjutan (LP2B) dan Lahan Sawah Dilindungi (LSD)'],
    sources: [
      { id: 'dpkp', title: 'Tradisi subak terdesak alih fungsi lahan, banjir sampai serangan hama', publisher: 'Mongabay Indonesia', date: '7 Agustus 2026', url: 'https://mongabay.co.id/2026/08/07/tradisi-subak-terdesak-alih-fungsi-lahan-banjir-sampai-serangan-hama/' },
      { id: 'tirto', title: 'Ketika sawah dan lahan hijau di Bali beralih fungsi jadi bangunan', publisher: 'Tirto.id', date: '2024', url: 'https://tirto.id/ketika-sawah-lahan-hijau-di-bali-beralih-fungsi-jadi-bangunan-g3Lb' },
      { id: 'rri', title: 'Koster paparkan strategi amankan pertanian dan alih fungsi lahan', publisher: 'RRI', date: '25 Juli 2026', url: 'https://rri.co.id/denpasar/regional/2597464/koster-paparkan-strategi-amankan-pertanian-dan-alih-fungsi-lahan' },
      { id: 'cna', title: 'Bali darurat sawah produktif, Menteri Nusron larang alih fungsi lahan', publisher: 'CNA Indonesia', date: '', url: 'https://www.cna.id/indonesia/bali-darurat-sawah-produktif-menteri-nusron-larang-alih-fungsi-lahan-41296' },
    ],
  },
  {
    id: 'pencemaran-air',
    category: 'Air',
    title: 'Apa yang hanyut bersama air irigasi?',
    summary:
      'Sungai yang mengairi subak membawa limbah rumah tangga, sampah, dan mikroplastik dari hulu ke hilir.',
    keyStat: { value: '65%', label: 'mikroplastik di sungai Bali berupa serat kain (studi 2023)' },
    evidenceLevel: 'Studi dan laporan media',
    readTime: '4 menit baca',
    updatedAt: 'November 2026',
    image:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Aliran air di tengah sawah Bali',
    keyPoints: [
      'Mikroplastik dan limbah cair terdeteksi di sungai Denpasar dan Gianyar, termasuk kawasan Tirta Empul.',
      'Di Tukad Pakerisan, kualitas air memburuk ke arah hilir.',
      'Peneliti juga mencatat sungai Bali relatif lebih bersih dari sungai lain di Indonesia, berkat gerakan komunitas.',
    ],
    whatHappened: [
      'Air subak datang dari sungai dan mata air. Di sepanjang jalannya, air itu menerima buangan dari permukiman, usaha, dan sampah yang dibuang ke sungai.',
      'Pada studi yang dilaporkan Mongabay, mikroplastik ditemukan di Dam Ongan, Tukad Badung, Sungai Ayung, dan Tirta Empul. Sebagian besar berupa serat dari pencucian kain sintetis.',
    ],
    whyItMatters: [
      'Air irigasi itu seperti darah dalam tubuh. Jika darah membawa zat yang salah, seluruh tubuh ikut terpengaruh. Air tercemar masuk ke sawah, tanah, dan akhirnya ke makanan.',
      'Di kawasan seperti Pakerisan, air juga dipakai untuk upacara dan penyucian diri, sehingga pencemaran menyentuh sisi budaya, bukan hanya pertanian.',
    ],
    evidence: [
      { text: 'Tiga jenis mikroplastik ditemukan: serat sekitar 65%, filamen 25%, dan fragmen 10%.', src: ['mp2023'] },
      { text: 'Kadar fosfat di Tukad Badung tercatat 1,1 ppm, tinggi dibanding baku mutu, dan peneliti mengaitkannya dengan limbah domestik yang tidak terkelola.', src: ['mp2023'] },
      // TODO(verifikasi): cek tahun pengambilan sampel di makalah sebelum rilis.
      { text: 'Kajian jurnal di Tukad Pakerisan menemukan kualitas air makin buruk ke hilir, dengan sumber pencemar dari industri, persawahan, dan sampah.', src: ['pakerisan'] },
    ],
    perspectives: [
      { who: 'Peneliti studi mikroplastik', view: 'Menilai sungai Bali relatif lebih bersih dibanding sungai lain di Indonesia karena sampah mengambang tidak menumpuk, berkat penjaring sampah dan kerja komunitas.' },
      { who: 'Peneliti studi mikroplastik', view: 'Menyarankan pengendalian sumber mikroplastik dari sampah plastik dan limbah industri, terutama kertas dan tekstil.' },
    ],
    responses: ['Pembersihan sungai oleh komunitas dan pemasangan penjaring sampah', 'Larangan plastik sekali pakai di Bali (efektivitasnya masih perlu dicek)'],
    sources: [
      { id: 'mp2023', title: 'Mikroplastik dan limbah cair cemari sungai-sungai di Bali', publisher: 'Mongabay Indonesia', date: 'Januari 2023', url: 'https://mongabay.co.id/2023/01/28/mikroplastik-dan-limbah-cair-cemari-sungai-sungai-di-bali/amp/' },
      { id: 'pakerisan', title: 'Kualitas air Tukad Pakerisan', publisher: 'Jurnal e-Journal Unmas', date: '', url: 'https://e-journal.unmas.ac.id/index.php/jeco/article/download/7488/5542' },
    ],
  },
  {
    id: 'pariwisata-dan-air',
    category: 'Pariwisata',
    title: 'Saat hotel dan sawah berebut air',
    summary:
      'Pariwisata membutuhkan banyak air, sementara petani subak bergantung pada air yang sama.',
    keyStat: { value: '73%', label: 'sampel air tanah Badung berklor tinggi, tanda intrusi air laut' },
    evidenceLevel: 'Studi dan laporan media',
    readTime: '4 menit baca',
    updatedAt: 'November 2026',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Sawah dan permukiman di Bali',
    keyPoints: [
      'Banyak hotel dan vila memakai air tanah dari sumur bor yang dalam.',
      'Sumur warga yang dangkal di sejumlah tempat dilaporkan kering.',
      'Konflik air antara petani dan penyedia air minum muncul hampir tiap tahun.',
    ],
    whatHappened: [
      'Peneliti Stroma Cole menyimpulkan bahwa sebagian besar akomodasi wisata memakai air tanah dari pengeboran yang dalam, sementara sumur warga yang dangkal sudah kering.',
      'Uji kualitas air tanah Politeknik Negeri Bali di 49 titik menemukan kandungan klor tinggi yang menjadi indikator intrusi air laut, misalnya 73% dari 44 sampel di Badung.',
    ],
    whyItMatters: [
      'Bayangkan satu sedotan besar di satu gelas yang dipakai ramai-ramai. Jika sedotan hotel mengambil lebih cepat daripada air terisi kembali, bagian paling akhir yang kehabisan adalah petani.',
      'Subak sudah lama membagi air secara adil lewat musyawarah. Ketika sumber air baru ikut berebut, aturan adil itu diuji.',
    ],
    evidence: [
      { text: 'Hotel dengan tarif di atas US$440 per malam tercatat memakai lebih dari 4.000 liter air per tamu, dibanding asumsi kebutuhan penduduk 183 liter per hari (data 2015).', src: ['air2015'] },
      { text: 'Uji Politeknik Negeri Bali menemukan klor tinggi pada 73% dari 44 sampel air tanah di Badung dan 68% dari 60 sampel di Buleleng.', src: ['air2024'] },
      { text: 'Kasus rebutan air nyaris terjadi tiap tahun, termasuk protes petani Gianyar kepada PDAM yang diduga mengambil jatah air irigasi (laporan 2016).', src: ['air2016'] },
    ],
    perspectives: [
      { who: 'Industri perhotelan (PHRI Bali)', view: 'Ketua PHRI Bali tidak menyimpulkan bahwa pariwisata mengeksploitasi air, dan menjelaskan kebutuhan air bergantung pada kelas hotel dan fasilitasnya, seperti kolam renang.' },
      { who: 'Peneliti', view: 'Menilai ketimpangan distribusi air, bukan hanya jumlah air, sebagai akar krisis air di Bali.' },
    ],
    responses: ['Usulan kewajiban konservasi air bagi akomodasi baru (Bali Tourism Board, 2015)'],
    sources: [
      { id: 'air2015', title: 'Bali terancam krisis air, mengapa?', publisher: 'Mongabay Indonesia', date: 'April 2015', url: 'https://www.mongabay.co.id/2015/04/15/bali-terancam-krisis-air-mengapa/' },
      { id: 'air2016', title: 'Merekam krisis air di Bali melalui film', publisher: 'Mongabay Indonesia', date: 'Februari 2016', url: 'https://mongabay.co.id/2016/02/08/merekam-krisis-air-di-bali-melalui-film-seperti-apakah/' },
      { id: 'air2024', title: 'Krisis air di sumber air Bali, perempuan jadi korban terparah', publisher: 'Mongabay Indonesia', date: 'Agustus 2024', url: 'https://mongabay.co.id/2024/08/28/krisis-air-di-sumber-air-bali-perempuan-jadi-korban-terparah/' },
    ],
  },
];

export const getIssue = (id) => ISSUES.find((i) => i.id === id);
