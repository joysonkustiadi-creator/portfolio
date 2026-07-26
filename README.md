# Portfolio - Joshua Joyson Kustiadi

Next.js 15 (App Router), tanpa CSS framework. Semua warna dan tipografi
didefinisikan sebagai CSS custom property di `app/globals.css`.

## Jalankan di lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur

```
app/
  layout.jsx        # font, metadata SEO, wrapper <html>
  page.jsx          # struktur halaman
  globals.css       # design token + semua style + animasi
components/
  Ridgeline.jsx     # grafik hero, timeline dari data project
  Portrait.jsx      # slot foto profil (fallback ke inisial)
  WorkGallery.jsx   # galeri screenshot project (1 atau banyak gambar)
  Nav.jsx           # navigasi sticky
  Reveal.jsx        # animasi fade-in saat discroll
  RotatingWords.jsx # teks berputar di hero
  Counter.jsx       # angka menghitung naik saat masuk viewport
  Marquee.jsx       # ticker teknologi berjalan tanpa henti
  ScrollProgress.jsx# garis progres di atas layar
  Cursor.jsx        # cincin yang mengikuti pointer
data/
  profile.js        # SATU-SATUNYA file yang perlu diedit rutin
public/
  portrait.jpg      # <- taruh foto kamu di sini
  work/             # <- taruh screenshot project di sini
```

## Cara menaruh gambar

**Foto profil.** Simpan sebagai `public/portrait.jpg`. Crop persegi,
sekitar 600x600. Kalau file belum ada, frame-nya menampilkan inisial,
jadi layout nggak pernah rusak.

**Screenshot project.** Simpan di `public/work/`, lalu daftarkan di
field `images` pada `data/profile.js`. Boleh berapa pun jumlahnya:

```js
images: [
  { src: "/work/scam-shield-1.png", caption: "Detection result" },
  { src: "/work/scam-shield-2.png", caption: "Tactic breakdown" },
],
```

Satu gambar tampil sebagai satu panel. Dua atau lebih otomatis
menambahkan deretan thumbnail yang bisa diklik. `caption` opsional.
Crop 16:9, sekitar 1200x675. Array kosong tampil sebagai placeholder.

## Cara menaruh link per project

Field `links` di tiap project, sebanyak yang kamu punya:

```js
links: [
  { label: "Live", href: "https://your-app.vercel.app" },
  { label: "Source", href: "https://github.com/you/repo" },
  { label: "Demo video", href: "https://youtu.be/..." },
],
```

`label` adalah teks yang terlihat. Kalau `links: []`, barisnya
nggak dirender sama sekali.

## Yang harus diganti sebelum publish

Di `data/profile.js`:

- `linkedin` - masih placeholder
- dua entri pertama (`semester-2-ui`, `semester-2-web`) masih berisi teks instruksi
- `stats` - angka masih perkiraan, ganti dengan yang bisa kamu pertanggungjawabkan
  (atau hapus section `#numbers` dari `app/page.jsx` kalau nggak mau ada)
- seluruh isi project `skillswap` - masih teks instruksi
- semua `links[].href` yang masih `"#"`

## Cara kerja ridgeline

Project diurutkan dari lama ke baru, jadi kiri-ke-kanan adalah garis
waktu. Field `elevation` (0-100) menentukan tinggi puncaknya. Tambah
project baru di akhir array dengan `elevation` lebih tinggi, dan
grafiknya menyesuaikan sendiri - nggak ada koordinat yang di-hardcode.

## Deploy ke Vercel

```bash
git init && git add -A && git commit -m "portfolio"
```

Push ke GitHub, lalu di vercel.com: **Add New -> Project -> Import**.
Framework kedeteksi otomatis. Tiap push ke `main` auto-deploy.
