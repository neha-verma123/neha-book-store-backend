const express = require("express")
const router= express.Router()
const bookController= require("../controllers/book.controller")


router.post("/", bookController.addBook)
router.get("/", bookController.listBook)   
router.get("/:id", bookController.viewBook)
router.put("/:id", bookController.editBook)
router.delete("/:id", bookController.deleteBook)


module.exports= router;