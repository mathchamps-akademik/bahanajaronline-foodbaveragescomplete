# Patch Dropdown Cache Buster

Upload/replace file-file ini ke root repo GitHub Pages.

Isi patch:
- `test-config.js` berisi daftar cabang dan teacher.
- 10 file pre/post test yang memanggil `test-config.js?v=dropdown-20260621-v2` supaya browser tidak memakai cache lama.

Setelah upload, cek:
- https://mathchamps-akademik.github.io/bahanajaronline-foodbaveragescomplete/pre-test-day1.html?v=dropdown-20260621-v2

Di fresh browser sekarang live sudah terbaca 71 opsi cabang dan 98 opsi teacher. Patch ini dibuat agar cache lama ikut dipaksa refresh.
