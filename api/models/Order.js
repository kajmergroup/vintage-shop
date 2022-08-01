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
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
