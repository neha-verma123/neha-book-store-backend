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

    let folderName = path.join(__dirname, "../uploads/default/");
    const extension = path.extname(file.originalname).toLowerCase().slice(1);

    if (imageExtList.includes(extension)) {
      folderName = path.join(__dirname, "../uploads/");
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
