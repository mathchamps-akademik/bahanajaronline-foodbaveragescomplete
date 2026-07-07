# Hotfix Submit Pre/Post Test F&B Online

Folder ini berisi file kecil untuk memperbaiki error submit di:
`https://mathchamps-akademik.github.io/bahanajaronline-foodbaveragescomplete/`

## File yang diubah

- `pre-test-day1.html` sampai `pre-test-day5.html`
- `post-test-day1.html` sampai `post-test-day5.html`
- `test-config.js`
- `results-dashboard.html`
- `spreadsheet-setup.html`
- `google-apps-script-submit-results.gs`

## Cara pakai

1. Upload semua file di folder ini ke root repo GitHub Pages yang sama.
2. Replace file lama jika GitHub bertanya.
3. Deploy `google-apps-script-submit-results.gs` sebagai Google Apps Script Web App.
4. Paste Web App URL ke bagian `scriptUrl` di `test-config.js`.
5. Upload ulang `test-config.js`.

Catatan: Supabase lama tetap dipertahankan agar dashboard masih bisa membaca data lama. Submit baru akan memakai Apps Script jika `scriptUrl` sudah diisi.
