# 🌿 GreenTrackz

**GreenTrackz** adalah aplikasi pencatat keuangan pribadi berbasis web yang ringan, cepat, dan tidak memerlukan login. Dirancang untuk membantu kamu mencatat pengeluaran harian, mengatur budget bulanan, dan memantau kesehatan keuanganmu — semuanya tersimpan langsung di browser tanpa server.

---

## ✨ Fitur Utama

- **📊 Dashboard** — Lihat ringkasan total budget, pengeluaran bulan ini, dan sisa saldo secara real-time
- **🗂️ Kategori** — Buat dan kelola kategori pengeluaran dengan warna custom
- **💰 Budget** — Tetapkan total budget bulanan (pendapatan) dan alokasikan per kategori
- **📝 Transaksi** — Catat pengeluaran dengan detail nama, jumlah, tanggal, dan kategori
- **🔍 Filter & Pencarian** — Cari dan saring transaksi berdasarkan kategori atau kata kunci
- **📱 Responsif** — Tampilan adaptif untuk desktop, tablet, dan smartphone
- **🔒 Tanpa Login** — Data tersimpan lokal di browser (localStorage), tidak dikirim ke server
- **📤 Ekspor CSV** — Ekspor seluruh riwayat transaksi ke file `.csv` dengan satu klik
- **100% Gratis** — Tidak ada biaya, tidak ada iklan

---

## 🖥️ Tampilan Halaman

| Halaman | Deskripsi |
|---|---|
| `index.html` | Landing page dengan fitur unggulan dan preview aplikasi |
| `dashboard.html` | Ringkasan keuangan bulan ini dan transaksi terbaru |
| `category.html` | Manajemen kategori pengeluaran |
| `budgeting.html` | Pengaturan total budget bulanan dan budget per kategori |
| `transactions.html` | Pencatatan dan riwayat seluruh transaksi (+ ekspor CSV) |

---

## 🚀 Cara Penggunaan

Karena GreenTrackz adalah aplikasi berbasis file statis, tidak perlu instalasi atau server khusus.

### Jalankan Langsung

1. **Clone atau download** repositori ini:
   ```bash
   git clone https://github.com/ValerieP31/GreenTrackz.git
   cd GreenTrackz
   ```

2. **Buka `index.html`** di browser favorit kamu (Chrome, Firefox, Edge, Safari).

3. Langsung mulai gunakan — tidak perlu setup apapun!

### Jalankan via Live Server (Rekomendasi untuk Development)

Jika menggunakan VS Code, install ekstensi **Live Server** lalu klik kanan `index.html` → *Open with Live Server*.

---

## 📁 Struktur File

```
GreenTrackz/
├── index.html          # Landing page / Beranda
├── dashboard.html      # Halaman dashboard keuangan
├── category.html       # Halaman manajemen kategori
├── budgeting.html      # Halaman pengaturan budget
├── transactions.html   # Halaman riwayat transaksi
├── style.css           # Stylesheet global (Design System)
├── app.js              # Data layer & shared utilities (GT object)
└── README.md           # Dokumentasi proyek
```

---

## ⚙️ Arsitektur & Data Layer

Seluruh logika data dikelola oleh objek global `GT` di `app.js`. Data disimpan di `localStorage` browser dengan key berikut:

| Key | Tipe | Deskripsi |
|---|---|---|
| `gt_transactions` | `Array` | Semua transaksi yang dicatat |
| `gt_categories` | `Array` | Daftar kategori (default + custom) |
| `gt_budgets` | `Array` | Budget per kategori |
| `gt_total_budget` | `Number` | Total budget / pendapatan bulanan |

### Contoh Struktur Transaksi

```json
{
  "id": "txn_1718000000000",
  "name": "Makan Siang",
  "amount": 45000,
  "date": "2025-06-01",
  "category": "makanan",
  "type": "expense",
  "note": "Warteg dekat kantor"
}
```

### Contoh Struktur Kategori

```json
{
  "id": "makanan",
  "name": "Makanan",
  "color": "#16A34A",
  "bg": "#DCFCE7",
  "icon": "makanan"
}
```

---

## 🎨 Kategori Default

Aplikasi sudah menyertakan 7 kategori bawaan:

| Ikon | Nama | Warna |
|---|---|---|
| 🍽️ | Makanan | Hijau |
| 🚗 | Transportasi | Biru |
| 🛍️ | Belanja | Ungu |
| 🎮 | Hiburan | Pink |
| ❤️ | Kesehatan | Merah |
| ⚡ | Tagihan | Kuning |
| 📚 | Edukasi | Biru Muda |

Kamu bisa menambahkan kategori baru dengan nama dan warna pilihan (merah, orange, kuning, hijau, biru, pink, ungu) di halaman **Kategori**.

---

## 💡 Alur Penggunaan yang Disarankan

```
1. Buka Budget → Klik "Edit Budget" → Masukkan total pendapatan bulan ini
2. Buka Kategori → Tambah kategori sesuai kebutuhanmu (opsional)
3. Buka Budget → Tambah Budget Kategori → Alokasikan budget per kategori
4. Buka Transaksi → Catat pengeluaran setiap hari
5. Cek Dashboard → Pantau saldo dan pengeluaran bulan ini
```

---

## 🛠️ Teknologi yang Digunakan

- **HTML5** — Struktur halaman
- **CSS3** — Styling dengan custom properties (CSS Variables) dan Flexbox/Grid
- **Vanilla JavaScript** — Logika aplikasi tanpa framework
- **localStorage** — Penyimpanan data lokal di browser
- **Google Fonts (Inter)** — Tipografi
- **Blob API** — Ekspor CSV langsung dari browser tanpa server

---

## 📌 Catatan Penting

- Data tersimpan **hanya di browser** yang kamu gunakan. Membersihkan cache/data browser akan menghapus semua data.
- Maksimal **300 transaksi** dapat disimpan untuk menjaga performa.
- Ekspor CSV tersedia di halaman **Transaksi** (tombol "Ekspor CSV") — file berformat UTF-8 BOM dan kompatibel dengan Excel.
- Tidak ada fitur sinkronisasi antar perangkat — ini adalah desain yang disengaja untuk menjaga privasi.

---

## 🙌 Kontribusi

Pull request dan issue sangat disambut! Jika kamu menemukan bug atau punya ide fitur baru, silakan buka issue di [GitHub](https://github.com/ValerieP31/GreenTrackz).

---

## 📄 Lisensi

Proyek ini open source dan bebas digunakan untuk keperluan pribadi maupun edukasi.

---

<div align="center">
  <strong>🌿 GreenTrackz</strong> — Catat. Pantau. Kendalikan.<br>
  Dibuat dengan ❤️ oleh <a href="https://github.com/ValerieP31">ValerieP31</a>
</div>
