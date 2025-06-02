// 📦 Import Modules
import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';
  // import multer from 'multer';


// 🧠 Setup for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const upload = multer({ storage: multer.memoryStorage() });


// 🔐 Load .env file
dotenv.config();

// 🚀 Create Express App
const app = express();
const port = process.env.PORT || 5000;  // ✅ Use correct port
const upload = multer({ storage: multer.memoryStorage() });  // Multer setup (memory-based)

// 🔧 Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// 🔑 Setup Google Auth using Service Account
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, 'service-account.json'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'], // ✅ fix URL
});



const streamUpload = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream((error, result) => {
      if (result) {
        resolve(result);
      } else {
        reject(error);
      }
    });

    const readable = new Readable();
    readable._read = () => {};
    readable.push(buffer);
    readable.push(null);
    readable.pipe(stream);
  });
};





// 📬 POST endpoint to receive form data
app.post('/submit-form', async (req, res) => {
  try {

    const client = await auth.getClient(); // ✅ fix: getClient(), not getClients()
    const sheets = google.sheets({ version: 'v4', auth: client });

    const spreadsheetId = process.env.SPREADSHEET_ID;
    const formData = req.body;
    
    const values = [Object.values(formData)];
    
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Leads(LKO)!A3', // ✅ missing earlier
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });
    
  
    res.status(200).json({ success: true, message: 'Data saved to Google Sheet'  });
  } catch (error) {
    console.error('❌ Error writing to sheet:', error); // ✅ correct variable name
    res.status(500).json({ success: false, error: 'Failed to save data' });
  }
});






  
app.post('/submit-Application-branches', upload.single('resume'), async (req, res) => {
  try {
    const { fullName, location, phone, email } = req.body;
    const fileBuffer = req.file.buffer;

    // 1. Upload to Cloudinary
    const result = await streamUpload(fileBuffer);
    const cvURL = result.secure_url;

    // 2. Save to Google Sheet
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    const spreadsheetId = process.env.SPREADSHEET_ID;
    const values = [[fullName, location, phone, email, cvURL]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Submitjobbranch!A3',
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    res.status(200).json({ success: true, message: 'CV uploaded and URL saved!', cvURL });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ success: false, message: 'Failed to process CV' });
  }
});







app.post('/submit-Application', upload.single('resume'), async (req, res) => {
  try {
    const { name, jobTitle, contact } = req.body;
    const fileBuffer = req.file.buffer;

    // 1. Upload to Cloudinary
    const result = await streamUpload(fileBuffer);
    const cvURL = result.secure_url;

    // 2. Save to Google Sheet
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    const spreadsheetId = process.env.SPREADSHEET_ID;
    const values = [[name, jobTitle, contact, cvURL]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'SubmitApplication!A3',
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    res.status(200).json({ success: true, message: 'CV uploaded and URL saved!', cvURL });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ success: false, message: 'Failed to process CV' });
  }
});





// 🔊 Start Server
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
