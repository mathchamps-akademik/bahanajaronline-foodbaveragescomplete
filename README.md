# Math Champs F&B Online Teaching Kit - GitHub Pages

Paket raw ini siap upload ke GitHub Pages. Materi dibuat untuk Holiday Program online, 5 pertemuan, masing-masing 60 menit.

## Isi Paket

- `index.html` - hub utama.
- `pertemuan-1-teacher-deck.html` sampai `pertemuan-5-teacher-deck.html` - deck guru.
- `pertemuan-1-teacher-deck.pdf` sampai `pertemuan-5-teacher-deck.pdf` - PDF cadangan deck.
- `pre-test-day1.html` sampai `pre-test-day5.html` - pre test online untuk siswa.
- `post-test-day1.html` sampai `post-test-day5.html` - post test online untuk siswa.
- `pre-test-1.pdf` sampai `pre-test-5.pdf` - pre test siswa.
- `post-test-1.pdf` sampai `post-test-5.pdf` - post test siswa.
- `kunci-jawaban-1.pdf` sampai `kunci-jawaban-5.pdf` - kunci jawaban guru.
- `spreadsheet-setup.html` - panduan memakai dashboard hasil test online.
- `results-dashboard.html` - dashboard hasil pre/post test realtime dengan filter dan export CSV.
- `test-config.js` - tempat mengisi dropdown Cabang, Nama Teacher, dan konfigurasi dashboard hasil.
- `google-apps-script-submit-results.gs` - arsip opsional untuk admin jika suatu saat dibutuhkan.
- `worksheet-online.html` dan `worksheet-online.pdf` - worksheet siswa.
- `spin-wheel-day1.html` - spin wheel bahan utama Day 1.
- `final-presentation-template.html/pdf` - template presentasi akhir.
- `rubrik-final-presentasi.html/pdf` - rubrik feedback guru.
- `question-bank.html` - rekap soal dan kunci.

## Cara Upload

Upload semua isi folder ini ke root repository GitHub Pages. Jangan upload file zip saja. Pastikan `index.html` berada di root repository.

Jika struktur repo dibuat flat/root seperti paket offline terakhir, link akan langsung cocok karena semua file utama berada di root.

## Pre/Post Test Online

1. Isi daftar cabang pada bagian `branches` dan daftar teacher pada bagian `teachers` di `test-config.js`.
2. Bagikan link pre test atau post test ke siswa sesuai pertemuan.
3. Buka `results-dashboard.html` untuk melihat hasil submit realtime.
4. Klik `Refresh Data` jika guru ingin mengecek jawaban yang baru masuk.
5. Klik `Export CSV` untuk mengunduh hasil dan membukanya di Google Sheets atau Excel.

Kolom tanggal dan waktu submit otomatis tersimpan di dashboard hasil.
