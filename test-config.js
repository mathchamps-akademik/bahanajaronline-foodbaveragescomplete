window.MATHCHAMPS_TEST_CONFIG = {
  // Isi pilihan cabang secara manual di daftar ini. Cabang akan muncul sebagai dropdown di halaman test.
  branches: [
    "Cabang 1",
    "Cabang 2",
    "Cabang 3"
  ],

  // Isi nama teacher secara manual di daftar ini. Nama akan muncul sebagai dropdown di halaman test.
  teachers: [
    "Nama Teacher 1",
    "Nama Teacher 2",
    "Nama Teacher 3"
  ],

  // Hasil test otomatis tersimpan ke dashboard online. Bagian ini tidak perlu diubah.
  supabaseUrl: "https://suifgsvtcbrawzdhyuhk.supabase.co",
  storageKey: "sb_publishable_9BdHYLcpIS0B6Z92WxXf_Q_WpWBswLB",
  resultPrefix: "api/math-champs-fnb-online-complete-results-20260617",

  // Opsional: paste link Google Spreadsheet pribadi jika admin ingin menaruh arsip manual.
  spreadsheetUrl: "",

  // Opsional lama: hanya dipakai jika suatu saat ingin membaca CSV Google Sheet eksternal.
  resultsSheetCsvUrl: ""
};
