export const INITIAL_POSTS = [
  {
    id: 'post-1',
    author: 'I Wayan Sudira',
    role: 'Pekaseh Subak Pulagan',
    avatar:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=200&q=80',
    date: '2 jam lalu',
    category: 'Knowledge Sharing',
    title: 'Jadwal Kerta Masa & Pengaturan Debit Tektek Bulan Ini',
    content:
      'Om Swastyastu krama Subak sekalian. Mengingat curah hujan di lereng utara mulai meningkat, pembagian air di empelan utama akan kita sesuaikan mulai besok pagi pukul 06.00 WITA agar petak hilir tetap mendapatkan aliran yang merata tanpa risiko meluapnya pematang.',
    likes: 24,
    likedByMe: false,
    comments: [
      {
        id: 'c-1',
        author: 'Ni Luh Putu Ariasih',
        text: 'Suksma infonya Pak Pekaseh, tim kelompok tani hilir siap memantau saluran telabah pagi ini.',
      },
    ],
  },
  {
    id: 'post-2',
    author: 'Ni Luh Putu Ariasih',
    role: 'Penggerak Tani Organik',
    avatar:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=200&q=80',
    date: '1 hari lalu',
    category: 'Knowledge Sharing',
    title: 'Cara Membuat Pestisida Nabati dari Daun Mimba & Lengkuas',
    content:
      'Untuk menjaga ekosistem belut, capung, dan mikroorganisme air tetap sehat, berikut takaran ramuan pestisida nabati yang sudah kami uji coba di 15 hektar sawah organik Subak Sembung selama tiga musim panen terakhir.',
    likes: 41,
    likedByMe: true,
    comments: [],
  },
  {
    id: 'post-3',
    author: 'I Made Surya Dharma',
    role: 'Koordinator Relawan Lingkungan',
    avatar:
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=200&q=80',
    date: '3 hari lalu',
    category: 'Volunteer Program',
    title: 'Aksi Bersih Saluran Telabah & Penanaman Pohon Penahan Erosi',
    content:
      'Terima kasih kepada 45 relawan mahasiswa dan warga lokal yang sudah turun langsung membersihkan sampah plastik serta menanam bambu petung di sepanjang sempadan sungai hulu Pakerisan.',
    likes: 58,
    likedByMe: false,
    comments: [],
  },
];

export const UPCOMING_SUBAK_EVENTS = [
  {
    id: 'ev-1',
    day: '21',
    month: 'NOV',
    title: 'Paruman Agung & Evaluasi Debit Air',
    location: 'Bale Subak Jatiluwih',
    type: 'Komunitas',
  },
  {
    id: 'ev-2',
    day: '28',
    month: 'NOV',
    title: 'Workshop Pupuk Kompos & Mikroba Lokal',
    location: 'Subak Sembung, Denpasar',
    type: 'Edukasi',
  },
  {
    id: 'ev-3',
    day: '05',
    month: 'DES',
    title: 'Gotong Royong Bersih Saluran Hulu',
    location: 'DAS Pakerisan, Tampaksiring',
    type: 'Volunteer',
  },
  {
    id: 'ev-4',
    day: '14',
    month: 'DES',
    title: 'Upacara Mapag Toya & Tanam Serentak',
    location: 'Ulun Danu Batur',
    type: 'Tradisi',
  },
];

export const VOLUNTEER_PROGRAMS = [
  {
    id: 'vol-1',
    title: 'Patroli Bersih Saluran Irigasi',
    schedule: 'Setiap Sabtu Pagi • 07.00 WITA',
    slots: 'Tersisa 8 kuota relawan',
  },
  {
    id: 'vol-2',
    title: 'Edukasi Pemetaan Digital Lahan Subak',
    schedule: 'Minggu ke-2 & ke-4 • Hybrid',
    slots: 'Tersisa 5 kuota relawan',
  },
];