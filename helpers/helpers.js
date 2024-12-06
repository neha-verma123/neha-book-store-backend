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
      var error = new Error(
        "Only " + ext_list.join(", ") + " files are allowed."
      );
      error.status = 422;
      error.type = "fileValidation";
      return cb(error, false);
    }

    return cb(null, true);
  },
};

module.exports = helper;
