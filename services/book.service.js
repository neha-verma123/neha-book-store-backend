const BookStore = require("../models/book.model");
const { responseData } = require("../helpers/responseData");

module.exports = {
  addBook: async (req, res) => {
    try {
      const { title, category, subDescription, description } = req.body;

      let imagePath = null;
      if (req.file) {
        imagePath = req.file.path;
      }

      const newBook = new BookStore({
        title,
        category,
        subDescription,
        description,
        image: imagePath,
      });
      const newBookRecord = await BookStore.create(newBook);
      console.log("newMaritalRecord", newMaritalRecord);
      return res.json(
        responseData("Book added successfully.", newBookRecord, req, true)
      );
    } catch (error) {
      console.log("error", error);
      return res
        .status(422)
        .json(responseData("ERROR OCCUR", error.message, req, false));
    }
  },

  listBook: async (req, res) => {
    try {
      const bookRecords = await BookStore.find({});

      console.log("bookRecords", bookRecords);
      return res.json(
        responseData("Books fetched successfully.", bookRecords, req, true)
      );
    } catch (error) {
      console.log("error", error);
      return res
        .status(422)
        .json(responseData("ERROR OCCUR", error.message, req, false));
    }
  },
  viewBook: async (req, res) => {
    try {
      const { id } = req.params;

      const bookRecord = await BookStore.findById(id);

      if (!bookRecord) {
        return res
          .status(404)
          .json(responseData("Book not found.", null, req, false));
      }

      console.log("bookRecord", bookRecord);
      return res
        .status(200)
        .json(
          responseData("Book fetched successfully.", bookRecord, req, true)
        );
    } catch (error) {
      console.log("error", error);
      return res
        .status(422)
        .json(responseData("ERROR OCCUR", error.message, req, false));
    }
  },
  editBook: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, category, subDescription, description } = req.body;

      const book = await BookStore.findById(id);
      if (!book) {
        return res
          .status(404)
          .json(responseData("Book not found.", null, req, false));
      }

      let updatedData = { title, category, subDescription, description };
      if (req.file) {
        updatedData.image = req.file.path;
      }

      const updatedBook = await BookStore.findByIdAndUpdate(
        { _id: id },
        updatedData,
        {
          new: true,
          runValidators: true,
        }
      );
      console.log("updatedBook", updatedBook);

      return res
        .status(200)
        .json(
          responseData("Book updated successfully.", updatedBook, req, true)
        );
    } catch (error) {
      console.log("error", error);
      return res
        .status(422)
        .json(responseData("ERROR OCCUR", error.message, req, false));
    }
  },

  deleteBook: async (req, res) => {
    try {
      const { id } = req.params;

      const book = await BookStore.findById(id);

      if (!book) {
        return res
          .status(404)
          .json(responseData("Book not found.", null, req, false));
      }

      const deleteResp = await BookStore.deleteOne({
        _id: id,
      });

      if (deleteResp.deletedCount > 0) {
        return res
          .status(200)
          .json(responseData("Book deleted successfully.", null, req, true));
      } else {
        return res
          .status(500)
          .json(responseData("Failed to delete the book.", null, req, false));
      }
    } catch (error) {
      console.log("error", error);
      return res
        .status(422)
        .json(responseData("ERROR OCCUR", error.message, req, false));
    }
  },
};
