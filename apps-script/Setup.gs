function setup() {
  createSpreadsheetHeaders();
  DriveApp.getFolderById(KTP_FOLDER_ID);
  DriveApp.getFolderById(SURAT_KUASA_FOLDER_ID);
  console.log('Setup berhasil: header spreadsheet dan folder Drive valid.');
}
