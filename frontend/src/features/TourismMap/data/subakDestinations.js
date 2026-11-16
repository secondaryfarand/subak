export const SUBAK_DESTINATIONS = [
  {
    id: 'jatiluwih',
    name: 'Subak Jatiluwih',
    regency: 'Tabanan',
    category: 'UNESCO',
    coordinates: [-8.3688, 115.1319],
    elevation: '700 mdpl',
    area: '600+ Hektar',
    crowdStatus: 'Kondusif (Kapasitas Optimal)',
    image:
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=900&q=80',
    description:
      'Kawasan lanskap budaya terbesar di Bali yang diakui UNESCO. Mengandalkan sistem pembagian air dari lereng Gunung Batukaru melalui jaringan terowongan tradisional.',
    waterSource: 'Mata Air Gunung Batukaru',
    ecoEthics: [
      'Gunakan jalur trekking resmi dan hindari berjalan di atas pematang sempit yang sedang ditanami padi.',
      'Dilarang menerbangkan drone tanpa izin Pekaseh (ketua Subak) dan pengelola kawasan.',
      'Bawa kembali botol minum pribadi; tersedia stasiun isi ulang air di pos informasi.',
    ],
    dosAndDonts: {
      dos: ['Menyapa petani lokal dengan ramah', 'Berbelanja hasil panen beras merah lokal'],
      donts: ['Memetik bulir padi untuk foto', 'Membuang puntung rokok ke saluran telabah'],
    },
  },
  {
    id: 'pakerisan',
    name: 'Subak DAS Pakerisan',
    regency: 'Gianyar',
    category: 'UNESCO',
    coordinates: [-8.4231, 115.3156],
    elevation: '450 mdpl',
    area: '529 Hektar',
    crowdStatus: 'Tenang & Sakral',
    image:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=80',
    description:
      'Sistem Subak tertua di Bali yang terintegrasi dengan situs purbakala Gunung Kawi dan Tirta Empul. Air irigasi mengalir langsung dari sumber mata air suci.',
    waterSource: 'Mata Air Tirta Empul & Sungai Pakerisan',
    ecoEthics: [
      'Wajib mengenakan kain kamen dan selendang saat melintasi area yang berbatasan dengan pura.',
      'Dilarang mencuci tangan, kaki, atau peralatan di saluran irigasi utama yang dianggap suci.',
      'Jaga ketenangan suara saat melintasi area upacara pertanian (aci).',
    ],
    dosAndDonts: {
      dos: ['Mengikuti tur edukasi bersama pemandu desa', 'Menghormati batas area suci pura'],
      donts: ['Menggunakan sabun/bahan kimia di dekat sungai', 'Masuk saat sedang berhalangan (cuntaka) ke area pura'],
    },
  },
  {
    id: 'sembung',
    name: 'Ekowisata Subak Sembung',
    regency: 'Denpasar',
    category: 'Ekowisata',
    coordinates: [-8.6139, 115.2219],
    elevation: '45 mdpl',
    area: '115 Hektar',
    crowdStatus: 'Ramah Keluarga & Sepeda',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80',
    description:
      'Oase hijau di utara Kota Denpasar yang mempertahankan pertanian organik di tengah kawasan urban dengan jalur jogging dan sepeda yang tertata rapi.',
    waterSource: 'Bendungan (Empelan) Sungai Ayung',
    ecoEthics: [
      'Prioritaskan pejalan kaki dan petani yang membawa hasil panen di jalur setapak.',
      'Dukung program pertanian organik dengan tidak meninggalkan sampah kemasan sekecil apa pun.',
      'Gunakan kendaraan rendah emisi atau parkir di kantong parkir yang telah disediakan.',
    ],
    dosAndDonts: {
      dos: ['Bersepeda santai di jalur paving yang tersedia', 'Mengikuti kelas menanam padi bersama warga'],
      donts: ['Mengendarai motor ke dalam jalur sawah', 'Mengganggu hewan ternak/bebek penjaga hama alami'],
    },
  },
  {
    id: 'ulun-danu',
    name: 'Hulu Subak Pura Ulun Danu Batur',
    regency: 'Bangli',
    category: 'Hulu & Pura Air',
    coordinates: [-8.2547, 115.3358],
    elevation: '1.350 mdpl',
    area: 'Kawasan Kaldera Batur',
    crowdStatus: 'Ramai di Pagi Hari',
    image:
      'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=900&q=80',
    description:
      'Pusat spiritual tertinggi jaringan Subak di Bali. Danau Batur berfungsi sebagai penampung air hujan alami yang mengairi ratusan Subak di Bali bagian tengah dan selatan.',
    waterSource: 'Danau Kaldera Batur (Hulu Utama)',
    ecoEthics: [
      'Jaga kebersihan kawasan kaldera; pencemaran di hulu akan berdampak ke ribuan hektar sawah di hilir.',
      'Gunakan pakaian sopan dan ikuti arahan pecalang atau petugas pura saat berkunjung.',
      'Hindari memberi makan satwa liar atau membuang sisa sesajen sembarangan di tepi danau.',
    ],
    dosAndDonts: {
      dos: ['Mempelajari sejarah hubungan Danau Batur & Subak', 'Membawa jaket hangat dan tumbler pribadi'],
      donts: ['Membuang sampah plastik ke area danau', 'Memanjat bangunan pelinggih untuk berfoto'],
    },
  },
];

// Simulasi jalur aliran air dari hulu (Danau Batur) menuju hilir (Pakerisan & Sembung)
export const WATERSHED_FLOW_PATH = [
  [-8.2547, 115.3358], // Hulu: Danau Batur
  [-8.3412, 115.3245], // Titik distribusi tengah
  [-8.4231, 115.3156], // Subak DAS Pakerisan
  [-8.5210, 115.2680], // Aliran Sungai Ayung/Pakerisan
  [-8.6139, 115.2219], // Hilir: Subak Sembung Denpasar
];

export const MAP_TILE_LAYERS = [
  {
    id: 'topo',
    label: 'Kontur Alam',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    attribution:
      'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
  },
  {
    id: 'satellite',
    label: 'Satelit Terasering',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution:
      'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  },
  {
    id: 'osm',
    label: 'Peta Jalan',
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
//   {
//     id: 'terrain',
//     label: 'Relief Bumi',
//     url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
//     attribution:
//       'Tiles &copy; Esri &mdash; Source: US National Park Service',
//   },
];