const SCRIPT_PROPERTIES = PropertiesService.getScriptProperties();
const DEFAULT_SPREADSHEET_ID = '1RfCck0Y3abUbTUFmFzvmJgOB7hFxRmCn8bp5GfXgn5o';
const DEFAULT_KTP_FOLDER_ID = '1BJnMYEp9QnnMuyMQDaTA0BpzdQEt7Uex';
const DEFAULT_SURAT_KUASA_FOLDER_ID = '1nhAAkf0gUBxGag3McWxn91YG_e9ktAAC';
const DEFAULT_KARTU_KELUARGA_FOLDER_ID = '1KTRvR6vUvI6UNxl6xflWASHCnXs0P06q';
const SPREADSHEET_ID = SCRIPT_PROPERTIES.getProperty('SPREADSHEET_ID') || DEFAULT_SPREADSHEET_ID;
const KTP_FOLDER_ID = SCRIPT_PROPERTIES.getProperty('KTP_FOLDER_ID') || DEFAULT_KTP_FOLDER_ID;
const SURAT_KUASA_FOLDER_ID = SCRIPT_PROPERTIES.getProperty('SURAT_KUASA_FOLDER_ID') || DEFAULT_SURAT_KUASA_FOLDER_ID;
const KARTU_KELUARGA_FOLDER_ID = SCRIPT_PROPERTIES.getProperty('KARTU_KELUARGA_FOLDER_ID') || DEFAULT_KARTU_KELUARGA_FOLDER_ID;
const QR_FOLDER_ID = SCRIPT_PROPERTIES.getProperty('QR_FOLDER_ID') || '';
const DEFAULT_ALLOWED_ORIGINS = 'http://localhost:5173,https://egs-esagemilangsakti.github.io,https://form.ptesagemilangsakti.com';
const ALLOWED_ORIGINS = (SCRIPT_PROPERTIES.getProperty('ALLOWED_ORIGINS') || DEFAULT_ALLOWED_ORIGINS).split(',').map(function (origin) {
  return origin.trim();
}).filter(String);
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPES = {
  ktp: ['application/pdf', 'image/jpeg', 'image/png'],
  suratKuasa: ['application/pdf', 'image/jpeg', 'image/png'],
  kartuKeluarga: ['application/pdf', 'image/jpeg', 'image/png']
};
