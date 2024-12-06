const mongoose = require("mongoose");

function imageURL(image) {
  const baseURL = `http://192.168.29.190:4200/`; // Base URL
  // https://neha-book-store-backend.onrender.com/
  if (image) {
    const normalizedImagePath = image.replace(/\\/g, "/");
    return `${baseURL}${normalizedImagePath.replace(/^uploads\//, "")}`;
  }
  return `${baseURL}no_image.png`;
}

const BookStoreSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
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
