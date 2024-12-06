const multer = require("multer");
const uuidv4 = require("uuid").v4;
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const imageExtList = ["png", "jpeg", "jpg", "gif"];

    let folderName = path.join(__dirname, "../uploads/default/");
    const extension = path.extname(file.originalname).toLowerCase().slice(1);

    if (imageExtList.includes(extension)) {
      folderName = path.join(__dirname, "../uploads/");
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
