const SPREADSHEET_ID = ""; // Opsional. Jika script dibuat dari Google Sheet, boleh dikosongkan.

function getWorkbook_() {
  if (SPREADSHEET_ID) return SpreadsheetApp.openById(SPREADSHEET_ID);
  return SpreadsheetApp.getActiveSpreadsheet();
}

function getSheet_() {
  const ss = getWorkbook_();
  const sheet = ss.getSheetByName("Hasil Test") || ss.insertSheet("Hasil Test");
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Tanggal Submit",
      "Waktu Submit",
      "Timestamp Client",
      "Test ID",
      "Pertemuan",
      "Jenis Test",
      "Email Siswa",
      "Nama Lengkap Siswa",
      "Nama Guru",
      "Kelas Online/Offline",
      "Nilai",
      "Jawaban Q1",
      "Jawaban Q2",
      "Jawaban Q3",
      "Jawaban Q4",
      "Jawaban Q5",
      "Raw JSON"
    ]);
  }
  return sheet;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    const now = new Date();
    const tz = Session.getScriptTimeZone();
    const dateText = Utilities.formatDate(now, tz, "yyyy-MM-dd");
    const timeText = Utilities.formatDate(now, tz, "HH:mm:ss");
    const answers = data.answers || {};
    const sheet = getSheet_();
    const values = sheet.getDataRange().getValues();
    const email = String(data.email || "").trim().toLowerCase();
    const testId = String(data.testId || "").trim();
    for (let i = 1; i < values.length; i++) {
      if (String(values[i][3]).trim() === testId && String(values[i][6]).trim().toLowerCase() === email) {
        return ContentService
          .createTextOutput(JSON.stringify({ ok: false, duplicate: true }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    sheet.appendRow([
      dateText,
      timeText,
      data.submittedAt || "",
      data.testId || "",
      data.day || "",
      data.kind || "",
      data.email || "",
      data.studentName || "",
      data.teacherName || "",
      data.classMode || "",
      data.score || 0,
      answers.q1 || "",
      answers.q2 || "",
      answers.q3 || "",
      answers.q4 || "",
      answers.q5 || "",
      JSON.stringify(data)
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService
    .createTextOutput("Math Champs test endpoint aktif.")
    .setMimeType(ContentService.MimeType.TEXT);
}
