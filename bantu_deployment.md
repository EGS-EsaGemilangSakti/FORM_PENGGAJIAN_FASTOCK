# link spreadsheet              : https://docs.google.com/spreadsheets/d/1RfCck0Y3abUbTUFmFzvmJgOB7hFxRmCn8bp5GfXgn5o/edit?gid=0#gid=0
# link folder PAYROLL_UPLOADS   : https://drive.google.com/drive/folders/1J9zv9Aj-a2VQeafQlz-NGhSGBHa1mlnG?hl=ID
## link folder KTP              : https://drive.google.com/drive/folders/1BJnMYEp9QnnMuyMQDaTA0BpzdQEt7Uex?hl=ID
## link folder SURAT_KUASA      : https://drive.google.com/drive/folders/1nhAAkf0gUBxGag3McWxn91YG_e9ktAAC?hl=ID
## link folder KARTU_KELUARGA   : https://drive.google.com/drive/folders/1KTRvR6vUvI6UNxl6xflWASHCnXs0P06q?hl=ID

# ID yang dipakai Apps Script

SPREADSHEET_ID=1RfCck0Y3abUbTUFmFzvmJgOB7hFxRmCn8bp5GfXgn5o
PAYROLL_UPLOADS_FOLDER_ID=1J9zv9Aj-a2VQeafQlz-NGhSGBHa1mlnG
KTP_FOLDER_ID=1BJnMYEp9QnnMuyMQDaTA0BpzdQEt7Uex
SURAT_KUASA_FOLDER_ID=1nhAAkf0gUBxGag3McWxn91YG_e9ktAAC
KARTU_KELUARGA_FOLDER_ID=1KTRvR6vUvI6UNxl6xflWASHCnXs0P06q

# Script Properties yang perlu diisi di Google Apps Script

API_CO_ID_KEY=isi_api_key_api_co_id_di_sini
SPREADSHEET_ID=1RfCck0Y3abUbTUFmFzvmJgOB7hFxRmCn8bp5GfXgn5o
KTP_FOLDER_ID=1BJnMYEp9QnnMuyMQDaTA0BpzdQEt7Uex
SURAT_KUASA_FOLDER_ID=1nhAAkf0gUBxGag3McWxn91YG_e9ktAAC
KARTU_KELUARGA_FOLDER_ID=1KTRvR6vUvI6UNxl6xflWASHCnXs0P06q
ALLOWED_ORIGINS=http://localhost:5173,https://egs-esagemilangsakti.github.io,https://form.ptesagemilangsakti.com

# Tempat menaruh API key

API key API.CO.ID jangan ditaruh di React, jangan ditaruh di .env frontend, dan jangan di-hardcode di file .gs.

Taruh di:
Google Apps Script -> Project Settings -> Script Properties -> Add script property

Property:
API_CO_ID_KEY

Value:
API key dari API.CO.ID

# Urutan deployment yang disarankan

1. Push project ke GitHub.
2. Aktifkan GitHub Pages dengan Source: GitHub Actions.
3. Tunggu URL GitHub Pages aktif.
4. Ambil origin URL GitHub Pages, contoh:
   https://form.ptesagemilangsakti.com
5. Isi Script Properties Apps Script:
   API_CO_ID_KEY
   SPREADSHEET_ID
   KTP_FOLDER_ID
   SURAT_KUASA_FOLDER_ID
   KARTU_KELUARGA_FOLDER_ID
   ALLOWED_ORIGINS
6. Jalankan setup() di Apps Script.
7. Deploy Apps Script sebagai Web App.
8. Salin Web App URL.
9. Isi GitHub Actions variable:
   VITE_API_URL=https://script.google.com/macros/s/WEB_APP_DEPLOYMENT_ID/exec
10. Re-run workflow GitHub Pages agar frontend memakai URL Apps Script production.
