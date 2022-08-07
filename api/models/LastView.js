const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LastViewSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        name: {
          type: String,
        },
        price: {
          type: Number,
        },
        size: {
          type: String,
        },
        img: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);


module.exports = mongoose.model("LastView", LastViewSchema);
