const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: false },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    quantity: {type: Number},
    price: { type: Number, required: true },
    inStock: { type: String, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
