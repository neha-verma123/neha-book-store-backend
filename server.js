const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
const { dirname, join } = require("path");
const db = require("./models/index");
const http = require("http");

var corsOption = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  // credentials: true,
  exposedHeaders: ["x-access-token"],
};

app.use(cors(corsOption));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads", express.static(join(__dirname, "uploads")));
app.disable("x-powered-by");
db();

const bookRoute = require("./routes/book.route");

app.use("/api/books", bookRoute);

app.get("/", (req, res) => {
  res.send("Server start");
});

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Application is run on ${PORT} port number.`);
});
