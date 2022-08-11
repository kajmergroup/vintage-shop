const express = require("express");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const lastviewsRoute = require("./routes/lastview");
const logger = require("./logger");



app.use(express.json());
dotenv.config();
app.use(
  cors({
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/lastviews", lastviewsRoute);

// logger.info('text info')
// logger.warn('text warn')
// logger.debug('text debug ')
// logger.error(new Error('something went wrong'))
//Whenever someone connects this gets executed

http.listen(process.env.PORT || 5000, () => {
  logger.info("Server is running");
  console.log("Server is running!");
});
