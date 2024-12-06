const mongoose = require("mongoose");

function imageURL(image) {
  const baseURL = `${process.env.SERVER_URL}/`;
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
      required: true, 
      trim: true,
    },
    category: {
      type: String,
      required: true, 
      trim: true,
    },
    subDescription: {
      type: String,
      default: null,
      trim: true,
    },
    description: {
      type: String, 
      required: true,
      trim: true,
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
