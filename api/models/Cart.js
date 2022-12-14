const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    cartTotal: {type:Number},
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          default: 1,
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
        color: {
          type: String,
        },
        img: {
          type: String,
        },
        productTotal: {
          type:Number,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
