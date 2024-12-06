const multer = require("multer");
const uuidv4 = require("uuid").v4;
const path = require("path");

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

    let folderName = "uploads/default/"; // Fallback to default
    const extension = path.extname(file.originalname).toLowerCase().slice(1);

    if (imageExtList.includes(extension)) {
      folderName = "uploads/images/";
    } else if (audioVideoExtList.includes(extension)) {
      folderName = "uploads/audio_video/";
    } else if (documentExtList.includes(extension)) {
      folderName = "uploads/documents/";
    }

    cb(null, folderName);
  },
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname).toLowerCase();
    const uniqueFilename = `${Date.now()}-${uuidv4()}${extension}`;
    cb(null, uniqueFilename);
  },
});

module.exports = storage;
