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

// Upload for images and videos
var uploadImageAndVideo = multer({
  storage: storage,
  fileFilter: helper.imageFilterForImageAndVideo,
  limits: { fileSize: constant.maxFileSizeLimit },
});

// Upload for images only
var uploadOnlyImage = multer({
  storage: storage,
  fileFilter: helper.imageFilterForImageOnly,
  limits: { fileSize: constant.maxFileSizeLimit },
});

module.exports = {
  uploadProfile: uploadProfile,
  uploadImageAndVideo: uploadImageAndVideo,
  uploadOnlyImage: uploadOnlyImage,
};
