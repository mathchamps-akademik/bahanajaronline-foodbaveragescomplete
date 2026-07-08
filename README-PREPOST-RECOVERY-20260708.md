# Raw Fix Pre/Post F&B Online - 8 Juli 2026

Upload semua file di folder ini ke root repo GitHub Pages `bahanajaronline-foodbaveragescomplete`.

Yang diperbaiki:
- Kunci submit lokal di-reset memakai `resultBatchId: "batch-20260708-new-students"`, jadi batch siswa baru tidak terkunci oleh submit lama di browser.
- Dashboard membaca data dari beberapa sumber: Google Apps Script jika diisi, Supabase prefix baru, Supabase prefix lama Day 1, seed data audit Supabase, CSV Google Sheet opsional, data import, dan backup lokal browser.
- Ditambahkan `seed-results.js` berisi data pusat Supabase yang berhasil diaudit sampai 8 Juli 2026: 251 submit.
- Ditambahkan tombol `Import Backup JSON/CSV` di dashboard.
- Ditambahkan halaman `backup-recovery.html` untuk export backup lokal dari browser siswa jika ada submit yang tidak masuk ke pusat.

Catatan penting:
- `scriptUrl` di `test-config.js` masih kosong karena belum ada Web App URL Google Apps Script yang tersedia di file lokal. Untuk hasil realtime ke spreadsheet, deploy `google-apps-script-submit-results.gs`, lalu paste Web App URL ke `scriptUrl`.
- Data submit 8 Juli 2026 pukul 08.00-10.00 WIB tidak ditemukan di Supabase pusat saat audit. Jika data tersebut hanya tersimpan lokal di perangkat siswa, perlu recovery lewat `backup-recovery.html` dari perangkat/browser yang dipakai siswa submit.
