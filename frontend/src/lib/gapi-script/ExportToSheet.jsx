import { useEffect } from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { gapi } from 'gapi-script';
import CONFIG from '../../config/config';
import { ToastError, ToastSuccess } from '../toastify/Toast';

const CLIENT_ID = CONFIG.CLIENT_ID;
const API_KEY = CONFIG.API_KEY;
const SCOPES = CONFIG.SCOPES;

const ExportToSheetCore = ({ data }) => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [
          'https://sheets.googleapis.com/$discovery/rest?version=v4',
        ],
      });
    };
    gapi.load('client', initClient);
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      try {
        // create new sheet
        const createResponse = await gapi.client.request({
          path: 'https://sheets.googleapis.com/v4/spreadsheets',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: {
            properties: {
              title: 'Arsip Stok Darah :' + new Date().toLocaleString(),
            },
          },
        });

        const spreadsheetId = createResponse.result.spreadsheetId;

        // data to eksport
        const sheetData = [
          Object.keys(data[0]),
          ...data.map((item) => Object.values(item)),
        ];

        await gapi.client.request({
          path: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A1?valueInputOption=RAW`,
          method: 'PUT',
          body: {
            values: sheetData,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        ToastSuccess('Data berhasil di-export ke Google Sheets!');
      } catch (err) {
        console.error('Gagal export:', err);
        ToastError('Gagal export data');
      }
    },
    onError: (err) => {
      console.error('Login gagal:', err);
      ToastError('Gagal login ke Google');
    },
    scope: SCOPES,
    flow: 'implicit', // atau 'auth-code' jika backend terlibat
  });

  return (
    <button
      onClick={() => login()}
      className="bg-green-500 font-semibold text-white text-sm py-2 px-4 cursor-pointer"
    >
      Export ke Google Sheets
    </button>
  );
};

const ExportToSheet = ({ data }) => {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <ExportToSheetCore data={data} />
    </GoogleOAuthProvider>
  );
};

export default ExportToSheet;
