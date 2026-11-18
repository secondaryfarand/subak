export const ROLES = [
  { id: 'all', label: 'Semua' },
  { id: 'wisatawan', label: 'Wisatawan' },
  { id: 'warga', label: 'Warga Bali' },
  { id: 'pelajar', label: 'Pelajar & komunitas' },
];

// issue = id isu di halaman /isu yang menjelaskan alasan aksi ini
export const CATEGORIES = [
  { id: 'air', title: 'Hemat air', issue: 'pariwisata-dan-air' },
  { id: 'irigasi', title: 'Jaga saluran irigasi', issue: 'pencemaran-air' },
  { id: 'sampah', title: 'Kurangi sampah', issue: 'pencemaran-air' },
  { id: 'petani', title: 'Dukung petani lokal', issue: 'alih-fungsi-lahan' },
];

// roles dikosongkan = berlaku untuk semua peran
export const ACTIONS = [
  { id: 'a1', cat: 'air', text: 'Matikan keran saat menyabun atau menyikat gigi.' },
  { id: 'a2', cat: 'air', text: 'Pilih penginapan yang punya program hemat air.', roles: ['wisatawan'] },
  { id: 'a3', cat: 'air', text: 'Pakai ulang handuk selama menginap.', roles: ['wisatawan'] },
  { id: 'a4', cat: 'air', text: 'Perbaiki keran atau pipa yang bocor di rumah.', roles: ['warga', 'pelajar'] },
  { id: 'i1', cat: 'irigasi', text: 'Jangan membuang sampah atau puntung rokok ke saluran dan sungai.' },
  { id: 'i2', cat: 'irigasi', text: 'Jangan mencuci dengan sabun atau deterjen di saluran irigasi.', roles: ['warga'] },
  { id: 'i3', cat: 'irigasi', text: 'Ikut gotong royong membersihkan saluran atau sungai di desamu.', roles: ['warga', 'pelajar'] },
  { id: 'i4', cat: 'irigasi', text: 'Jangan menginjak pematang sawah saat berfoto.', roles: ['wisatawan'] },
  { id: 's1', cat: 'sampah', text: 'Bawa botol minum isi ulang.' },
  { id: 's2', cat: 'sampah', text: 'Tolak kantong plastik dan sedotan sekali pakai.' },
  { id: 's3', cat: 'sampah', text: 'Pilah sampah di rumah, kos, atau kampus.', roles: ['warga', 'pelajar'] },
  { id: 'p1', cat: 'petani', text: 'Beli beras dan hasil tani langsung dari petani atau pasar lokal.' },
  { id: 'p2', cat: 'petani', text: 'Makan di warung yang memakai bahan lokal.', roles: ['wisatawan'] },
  { id: 'p3', cat: 'petani', text: 'Jika keluargamu punya sawah, cari tahu status perlindungannya (LP2B) di dinas pertanian setempat.', roles: ['warga'] },
  { id: 'p4', cat: 'petani', text: 'Bagikan satu fakta dari halaman Isu kepada temanmu.' },
];

export const BADGES = [
  { min: 0.25, name: 'Penjaga Telabah' },
  { min: 0.6, name: 'Sahabat Petani' },
  { min: 1, name: 'Pelindung Subak' },
];
