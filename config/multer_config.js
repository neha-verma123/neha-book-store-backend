const multer = require("multer");
const uuidv4 = require("uuid").v4;
const path = require("path");
const fs = require("fs");

// Middleware to ensure directories exist
const ensureDirectoryExists = (folderName) => {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName, { recursive: true });
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the folder where files should be stored
    const imageExtList = ["png", "jpeg", "jpg", "gif"];
    const audioVideoExtList = ["mp4", "m4a", "mov", "3gp", "mp3"];
    const documentExtList = [
      "pdf",
      "xls",
      "xlsx",
      "doc",
      "docx",
      "ppt",
      "pptx",
      "zip",
      "rar",
      "txt",
      "csv",
    ];

    let folderName = path.join(__dirname, "../uploads/default/");
    const extension = path.extname(file.originalname).toLowerCase().slice(1);

    if (imageExtList.includes(extension)) {
      folderName = path.join(__dirname, "../uploads/images/");
    } else if (audioVideoExtList.includes(extension)) {
      folderName = path.join(__dirname, "../uploads/audio_video/");
    } else if (documentExtList.includes(extension)) {
      folderName = path.join(__dirname, "../uploads/documents/");
    }

    // Ensure the directory exists
    ensureDirectoryExists(folderName);

    cb(null, folderName);
  },
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname).toLowerCase();
    const uniqueFilename = `${Date.now()}-${uuidv4()}${extension}`;
    cb(null, uniqueFilename);
  },
});

module.exports = storage;
