const SPREADSHEET_ID = ""; // Opsional. Jika script dibuat dari Google Sheet, boleh dikosongkan.
const SHEET_NAME = "Hasil Test";
const HEADERS = [
  "Tanggal Submit",
  "Waktu Submit",
  "Timestamp Client",
  "Batch ID",
  "Test ID",
  "Pertemuan",
  "Jenis Test",
  "Email Siswa",
  "Nama Lengkap Siswa",
  "Cabang",
  "Nama Teacher",
  "Nilai",
  "Benar",
  "answer_labels",
  "Jawaban Q1",
  "Jawaban Q2",
  "Jawaban Q3",
  "Jawaban Q4",
  "Jawaban Q5",
  "Raw JSON"
];

function getWorkbook_() {
  if (SPREADSHEET_ID) return SpreadsheetApp.openById(SPREADSHEET_ID);
  return SpreadsheetApp.getActiveSpreadsheet();
}

function getSheet_() {
  const ss = getWorkbook_();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  return sheet;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || "{}");
    const now = new Date();
    const tz = Session.getScriptTimeZone();
    const dateText = Utilities.formatDate(now, tz, "yyyy-MM-dd");
    const timeText = Utilities.formatDate(now, tz, "HH:mm:ss");
    const answers = data.answers || {};
    const answerLabels = data.answer_labels || data.answerLabels || [answers.q1 || "", answers.q2 || "", answers.q3 || "", answers.q4 || "", answers.q5 || ""].filter(String);
    const sheet = getSheet_();
    const values = sheet.getDataRange().getValues();
    const batchId = String(data.batchId || "default-batch").trim();
    const email = String(data.email || "").trim().toLowerCase();
    const testId = String(data.testId || data.test_id || "").trim();
    for (let i = 1; i < values.length; i++) {
      const oldBatch = String(values[i][3] || "default-batch").trim();
      const oldTestId = String(values[i][4] || "").trim();
      const oldEmail = String(values[i][7] || "").trim().toLowerCase();
      if (oldBatch === batchId && oldTestId === testId && oldEmail === email) {
        return ContentService.createTextOutput(JSON.stringify({ ok: false, duplicate: true })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    sheet.appendRow([
      dateText,
      timeText,
      data.submittedAt || data.submitted_at || "",
      batchId,
      testId,
      data.day || data.meeting || "",
      data.kind || data.kind_label || "",
      data.email || "",
      data.studentName || data.name || "",
      data.branchName || data.branch || data.className || "",
      data.teacherName || data.teacher || "",
      data.score || 0,
      data.correct || "",
      Array.isArray(answerLabels) ? answerLabels.join(", ") : String(answerLabels || ""),
      answers.q1 || "",
      answers.q2 || "",
      answers.q3 || "",
      answers.q4 || "",
      answers.q5 || "",
      JSON.stringify(data)
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  const sheet = getSheet_();
  const values = sheet.getDataRange().getValues();
  const headers = values[0] || [];
  const rows = values.slice(1).map(row => {
    const item = {};
    headers.forEach((header, index) => item[header] = row[index]);
    return item;
  });
  const payload = JSON.stringify({ ok: true, rows });
  if (e && e.parameter && e.parameter.callback) {
    return ContentService.createTextOutput(e.parameter.callback + "(" + payload + ");").setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(payload).setMimeType(ContentService.MimeType.JSON);
}
