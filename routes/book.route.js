const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");
const { uploadProfile } = require("../middleware/multerUpload");

router.post("/", uploadProfile.single("image"), bookController.addBook);
router.get("/", bookController.listBook);
router.get("/:id", bookController.viewBook);
router.put("/:id", uploadProfile.single("image"), bookController.editBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
