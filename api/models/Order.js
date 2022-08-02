const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref:"User", required: true },
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

      },
    ],
    amount: { type: Number, required: false },
    address: [
      {
        city: {
          type: String,
        },
        town: {
          type: String,
        },
        address_line: {
          type: String,
        },
        postal_code: {
          type: Number,
        },
      },
    ],
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
