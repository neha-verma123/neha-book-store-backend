var _ = require("lodash"); // Assuming lodash is being used for _.isEmpty

var helper = {
  imageFilter: function (req, file, cb) {
    if (!file || !file.originalname) {
      var error = new Error("Please upload a valid file.");
      error.status = 422;
      return cb(error, false);
    }

    // Convert the file name to lowercase for case-insensitive comparison
    var fileName = file.originalname.toLowerCase();
    var ext_list = ["jpg", "jpeg", "png", "gif"]; // Removed 'svg' and 'txt'

    // Extract the extension and validate it
    var ext = fileName.split(".").pop();
    if (ext_list.indexOf(ext) === -1) {
      var error = new Error("Only " + ext_list.join(", ") + " files are allowed.");
      error.status = 422;
      error.type = "fileValidation";
      return cb(error, false);
    }

    return cb(null, true);
  },

  imageFilterForImageAndVideo: function (req, file, cb) {
    var fileName = file && file.originalname ? file.originalname.toLowerCase() : null;
    var imageExtensions = ["jpg", "jpeg", "png"];
    var videoExtensions = ["mp4", "mpeg"];

    var ext_list = [];
    if (req.body.fileType === "image") {
      ext_list = imageExtensions;
    } else if (req.body.fileType === "video") {
      ext_list = videoExtensions;
    } else {
      var error = new Error(
        'Invalid fileType. Please specify either "image" or "video".'
      );
      error.status = 422;
      return cb(error, false);
    }

    var ext = fileName ? fileName.split(".").pop() : null;
    if (!fileName || _.isEmpty(fileName)) {
      var error = new Error("Please upload a valid file.");
      error.status = 422;
      return cb(error, false);
    }
    if (ext_list.indexOf(ext) === -1) {
      var error = new Error("Only " + ext_list.join(", ") + " files are allowed.");
      error.status = 422;
      error.type = "fileValidation";
      return cb(error, false);
    }
    return cb(null, true);
  },

  imageFilterForImageOnly: function (req, file, cb) {
    var fileName = file && file.originalname ? file.originalname.toLowerCase() : null;
    var ext_list = ["jpg", "jpeg", "png"];

    var ext = fileName ? fileName.split(".").pop() : null;
    if (!fileName || _.isEmpty(fileName)) {
      var error = new Error("Please upload a valid file.");
      error.status = 422;
      return cb(error, false);
    }
    if (ext_list.indexOf(ext) === -1) {
      var error = new Error("Only " + ext_list.join(", ") + " files are allowed.");
      error.status = 422;
      error.type = "fileValidation";
      return cb(error, false);
    }
    return cb(null, true);
  },
};

module.exports = helper;
