const mongoose = require("mongoose");

function imageURL(image) {
  const baseURL = `https://neha-book-store-backend.onrender.com/}/`;
  if (image) {
    const normalizedImagePath = image.replace(/\\/g, "/");
    return `${baseURL}${normalizedImagePath}`;
  }
  return `${baseURL}no_image.png`;
}

const BookStoreSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
      trim: true,
    },
    category: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      default: null,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      get: imageURL,
      default: null,
    },
  },
  {
    timestamps: true,
    toObject: { getters: true, setters: true, virtuals: false },
    toJSON: { getters: true, setters: true, virtuals: false },
  }
);

const BookStore = mongoose.model("BookStore", BookStoreSchema);

module.exports = BookStore;
