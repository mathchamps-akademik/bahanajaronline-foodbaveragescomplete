# Hotfix Submit Pre/Post Test F&B Online V2

Folder ini memperbaiki error submit di halaman pre-test dan post-test.

## Yang diperbaiki

- Halaman test mencoba submit ke Google Apps Script jika `scriptUrl` sudah diisi.
- Jika `scriptUrl` belum diisi, halaman mencoba Supabase lama.
- Jika Supabase masih menolak upload, jawaban tetap bisa disubmit dan disimpan sebagai backup lokal di browser.
- Dashboard hasil tetap membaca data lama dari Supabase, data dari Apps Script, dan backup lokal dari browser yang sama.

## Catatan penting

Untuk hasil yang bisa dipantau realtime dari device guru/admin, isi `scriptUrl` di `test-config.js` dengan Web App URL Google Apps Script.

Jika `scriptUrl` masih kosong, submit siswa tidak akan error, tetapi data hanya tersimpan sebagai backup lokal di browser siswa.

## File yang perlu diupload

Upload semua file di folder ini ke root repo GitHub Pages:

- `pre-test-day1.html` sampai `pre-test-day5.html`
- `post-test-day1.html` sampai `post-test-day5.html`
- `test-config.js`
- `results-dashboard.html`
- `spreadsheet-setup.html`
- `google-apps-script-submit-results.gs`
