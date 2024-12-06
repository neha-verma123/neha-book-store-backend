const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
const { dirname, join } = require("path");
const db = require("./models/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads", express.static(join(__dirname, "uploads")));
app.disable("x-powered-by");
db();

const bookRoute = require("./routes/book.route");

app.use("/api/books", bookRoute);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Application is run on ${PORT} port number.`);
});
