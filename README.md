# SUBAK

Website edukasi tentang **Subak**, sistem irigasi tradisional Bali yang diakui UNESCO sebagai Warisan Budaya Dunia sejak 2012. Website ini dibuat untuk **Web Design Competition**.

Isinya tidak berhenti di "apa itu Subak". Pengunjung diajak mengenal sistemnya, menelusuri perjalanan air dari hulu ke sawah, membaca isu lingkungan yang sedang menekan Subak lengkap dengan sumbernya, lalu diarahkan ke aksi kecil yang bisa dilakukan sendiri.

## Isi website

| Halaman | Rute | Isi |
|---|---|---|
| Beranda | `/` | Hero video sinematik (versi pagi dan malam), tiga pilar Tri Hita Karana, accordion tata kelola, dan suara petani |
| Eksplorasi | `/eksplorasi` | Empat tahap: Tentang Subak, Sejarah, Filosofi (Tri Hita Karana), dan Sistem Air. Ada navigasi bagian yang ikut berubah saat di-scroll |
| Journey of Water | `/irigasi` | Lima tahap perjalanan air: Sumber Mata Air, Empelan, Saluran Irigasi, Pembagian Air, Sawah dan Kehidupan |
| Isu | `/isu`, `/isu/:slug` | Tiga isu: alih fungsi lahan, pencemaran air, pariwisata dan air. Tiap isu punya ringkasan, data, sudut pandang berbagai pihak, upaya yang sedang berjalan, dan daftar sumber |
| Kampanye | `/green-action` | Daftar aksi yang bisa dicentang menurut peran (wisatawan, warga Bali, pelajar dan komunitas), progres dengan lencana, dan ikrar yang bisa disalin |
| Galeri | `/galeri` | Artikel, kisah petani, dan galeri foto dengan filter kategori, pembaca artikel, dan lightbox |
| Peta Subak | `/peta-subak` | Peta interaktif empat kawasan Subak dengan pilihan layer peta, jalur aliran air hulu ke hilir, serta etika berkunjung dan ikrar wisatawan |
| Komunitas | `/komunitas` | Simulasi forum Subak: posting, suka, komentar, agenda, program relawan, dan formulir lapor irigasi |

Halaman **Filosofi** (`/filosofi`) masih berupa placeholder. Rute `/komunitas` sudah aktif tetapi belum ada di menu navigasi.

## Fitur utama

**Beranda dan tampilan umum**
- Video latar yang berganti otomatis mengikuti tema, dengan cross-fade saat berulang dan saat tema diganti.
- Mode terang dan gelap. Pilihan disimpan di `localStorage`.
- Pemutar suara ambient dengan pengatur volume.
- Animasi muncul saat scroll, dan responsif sampai layar ponsel (menu drawer di mobile).

**Halaman Isu**
- **Tebak dulu**: pengunjung menebak berapa hektar sawah Bali yang hilang pada 2015 sampai 2024, lalu membandingkannya dengan data (80.063 ha menjadi 64.473,63 ha).
- **Rantai domino**: lima kotak yang dibuka satu per satu untuk menjelaskan keterkaitan antarisu, masing-masing dengan sumber sendiri.
- **Garis air** di tepi halaman yang tergambar saat di-scroll dan berubah dari jernih ke keruh saat masuk bagian isu.
- **Linimasa upaya** pelestarian, dari penetapan UNESCO 2012 sampai kebijakan perlindungan lahan tahun 2026, termasuk Perda Bali No. 4 Tahun 2026.
- Angka yang berbeda antarsumber ditampilkan sebagai rentang, dan proyeksi diberi label proyeksi.

**Peta Subak** (Leaflet)
- Empat kawasan: Subak Jatiluwih (Tabanan), Subak DAS Pakerisan (Gianyar), Ekowisata Subak Sembung (Denpasar), dan Hulu Subak Pura Ulun Danu Batur (Bangli).
- Tiga layer peta: Kontur Alam, Satelit Terasering, dan Peta Jalan.
- Jalur aliran air dari Danau Batur ke Sembung bisa ditampilkan atau disembunyikan.
- Tiap kawasan punya tab Wawasan dan Etika Berwisata (panduan, *dos and don'ts*), tombol ikrar, dan tautan arah ke Google Maps.

## Tech stack

- [React](https://react.dev) 19 dan [Vite](https://vite.dev) 8
- [React Router](https://reactrouter.com) 7 untuk routing
- [Leaflet](https://leafletjs.com) dan React Leaflet 5 untuk peta
- CSS Modules dengan design token lewat CSS variables
- Font: Playfair Display, DM Serif Display, Plus Jakarta Sans, dan Inter (Google Fonts)
- Oxlint untuk lint
- Deploy ke Vercel (`vercel.json` mengarahkan semua rute ke `index.html` untuk SPA)

Proyek ini murni *frontend*. Belum ada backend atau database, dan semua konten disimpan sebagai data statis di folder `data/` tiap fitur.

## Menjalankan di lokal

Butuh Node.js dan npm.

```bash
git clone https://github.com/secondaryfarand/subak.git
cd subak/frontend
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Menjalankan server pengembangan |
| `npm run build` | Membangun versi produksi ke `dist/` |
| `npm run preview` | Melihat hasil build secara lokal |
| `npm run lint` | Mengecek kode dengan Oxlint |

## Struktur proyek

```
subak/
├── README.md
└── frontend/
    ├── public/
    │   ├── audio/          # suara ambient
    │   ├── videos/         # video hero pagi dan malam
    │   └── images/         # foto eksplorasi, Journey of Water, poster hero
    └── src/
        ├── components/     # NavigationBar, Footer, AmbientPlayer, ScrollReveal
        ├── features/
        │   ├── LandingPage/
        │   ├── ExploreSubak/
        │   ├── JourneyOfWater/
        │   ├── Issues/
        │   ├── GreenAction/
        │   ├── Gallery/
        │   ├── TourismMap/
        │   └── Community/
        ├── App.jsx         # routing dan pengaturan tema
        └── index.css       # design token (warna, font, spasi)
```

Setiap fitur memakai pola yang sama: `pages/` untuk halaman, `components/` untuk bagian khusus fitur, dan `data/` untuk konten.

## Sumber data

Konten halaman Isu dikutip dari laporan media dan studi, di antaranya Mongabay Indonesia, Tirto.id, RRI, CNA Indonesia, dan Katadata. Angka luas sawah berasal dari Dinas Pertanian dan Ketahanan Pangan Bali. Setiap angka punya tautan sumber di halamannya.

Beberapa bagian masih berupa **konten contoh** untuk keperluan desain: tokoh, kutipan, dan artikel di Galeri, seluruh isi forum di Komunitas, serta foto dari Unsplash. Fitur posting, suka, komentar, dan lapor irigasi hanya berjalan di browser dan tidak tersimpan ke server.

## Tim

- Farand
- Eka
- Arvina
