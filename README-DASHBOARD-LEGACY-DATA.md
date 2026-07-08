# Dashboard Patch - Include Legacy Offline/F&B Data

Upload `results-dashboard.html` ke root repo:
`bahanajaronline-foodbaveragescomplete`

Patch ini membuat dashboard membaca:

- Data utama: `api/math-champs-fnb-online-complete-results-20260617/day1-5/pre-post`
- Data lama: `api/math-champs-fnb-online-day1-results-20260614/pre`
- Data lama: `api/math-champs-fnb-online-day1-results-20260614/post`
- Backup lokal browser dari hotfix sebelumnya, jika ada

Catatan: data lama yang bisa ditarik adalah data yang memang sudah ada di Supabase Storage. Data yang hanya tersimpan lokal di browser siswa tidak bisa ditarik dari dashboard pusat tanpa submit ulang/export dari browser siswa tersebut.
