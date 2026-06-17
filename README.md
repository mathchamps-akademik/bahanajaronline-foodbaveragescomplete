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
- `spreadsheet-setup.html` - panduan menghubungkan test online ke Google Spreadsheet.
- `results-dashboard.html` - dashboard ringkasan hasil pre/post test.
- `test-config.js` - tempat mengisi URL Apps Script dan dropdown nama guru.
- `google-apps-script-submit-results.gs` - kode Apps Script untuk menerima hasil submit.
- `worksheet-online.html` dan `worksheet-online.pdf` - worksheet siswa.
- `spin-wheel-day1.html` - spin wheel bahan utama Day 1.
- `final-presentation-template.html/pdf` - template presentasi akhir.
- `rubrik-final-presentasi.html/pdf` - rubrik feedback guru.
- `question-bank.html` - rekap soal dan kunci.

## Cara Upload

Upload semua isi folder ini ke root repository GitHub Pages. Jangan upload file zip saja. Pastikan `index.html` berada di root repository.

Jika struktur repo dibuat flat/root seperti paket offline terakhir, link akan langsung cocok karena semua file utama berada di root.

## Setup Pre/Post Test Online

1. Buat Google Spreadsheet baru.
2. Buka Extensions > Apps Script.
3. Paste isi `google-apps-script-submit-results.gs`.
4. Deploy sebagai Web App dengan akses Anyone.
5. Copy Web App URL ke `scriptUrl` di `test-config.js`.
6. Isi daftar guru pada bagian `teachers` di `test-config.js`.
7. Buka `results-dashboard.html` untuk melihat ringkasan hasil.

Kolom tanggal dan waktu submit otomatis masuk ke spreadsheet.
