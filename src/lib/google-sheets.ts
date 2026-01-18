import { google } from 'googleapis';

const sheets = google.sheets('v4');

async function getAuthClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: 'service_account',
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_x509_cert_url: process.env.GOOGLE_CERT_URL,
    } as any,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return auth;
}

export async function appendToGoogleSheet(
  spreadsheetId: string,
  range: string,
  values: any[][]
) {
  try {
    const auth = await getAuthClient();

    const response = await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
    throw error;
  }
}

export async function createHeader(spreadsheetId: string, range: string) {
  const headers = [
    [
      'Registration ID',
      'First Name',
      'Last Name',
      'Email',
      'Phone',
      'College',
      'Course',
      'Year of Study',
      'Skills',
      'Motivation',
      'Experience',
      'Registered At',
    ],
  ];

  try {
    await appendToGoogleSheet(spreadsheetId, range, headers);
  } catch (error) {
    console.error('Error creating header:', error);
  }
}
