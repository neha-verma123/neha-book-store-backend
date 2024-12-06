import multer from "multer";
import constant from "../helpers/constant.js";
import storage from "../config/multer_config.js";
import helper from "../helpers/helpers.js";

// Upload for profile pictures
const uploadProfile = multer({
  storage,
  fileFilter: helper.imageFilter,
  limits: { fileSize: constant.maxFileSizeLimit },
});

// Upload for images and videos
const uploadImageAndVideo = multer({
  storage,
  fileFilter: helper.imageFilterForImageAndVideo,
  limits: { fileSize: constant.maxFileSizeLimit },
});

// Upload for images only
const uploadOnlyImage = multer({
  storage,
  fileFilter: helper.imageFilterForImageOnly,
  limits: { fileSize: constant.maxFileSizeLimit },
});

export { uploadProfile, uploadImageAndVideo, uploadOnlyImage };
