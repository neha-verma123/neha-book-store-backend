const constant = Object.freeze({
  status: {
    active: "active",
    inactive: "inactive",
    pending: "pending",
    reject: "reject",
    sent: "sent",
  },

  maxFileSizeLimit: 20 * 1024 * 1024, // max file size 20 MB
  multerErrorMessage: {
    fileTooLarge: {
      error: "File too large",
      errorMessage: "Please Upload File Under 5 MB Only",
    },
    fileExtensionValidation: {
      error: "File Extension Validation Failed",
      errorMessage: "Please Upload Only JPG, JPEG, PNG, GIF, SVG File Type Only",
    },
  },

  staticResponseForEmptyResult: {
    docs: [],
    totalDocsCount: 0,
    limit: 0,
    page: 1,
    totalPages: 1,
    pagingCounter: 1,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  },
});

// Remove undefined exports if they are not used in your application
module.exports = {
  constant,
};
