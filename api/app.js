const express = require("express");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");
const {startDB} = require('./lib/db')
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const lastviewsRoute = require("./routes/lastview");
const logger = require("./logger");
const multer = require("multer");
const path = require("path");

app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(express.json());

app.use(
  cors({
    credentials: true,
  })
);
app.use(morgan("dev"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
  console.log("file has been uploaded");
});

startDB()
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongoDB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/lastviews", lastviewsRoute);

http.listen(process.env.PORT || 5000, () => {
  logger.info("Server is running");
  console.log("Server is running!");
});
