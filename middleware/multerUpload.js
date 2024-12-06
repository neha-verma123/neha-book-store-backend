var multer = require("multer");
var constant = require("../helpers/constant.js");
var storage = require("../config/multer_config.js");
var helper = require("../helpers/helpers.js");

// Upload for profile pictures
var uploadProfile = multer({
  storage: storage,
  fileFilter: helper.imageFilter,
  limits: { fileSize: constant.maxFileSizeLimit },
});

module.exports = {
  uploadProfile: uploadProfile,
};
