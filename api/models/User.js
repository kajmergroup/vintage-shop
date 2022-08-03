const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: false, unique: true },
    email: { type: String, required: false, unique: true },
    password: { type: String, required: false },
    phone: { type: Number, required: false },
    first_name: { type: String, required: false },
    last_name: { type: String, required: false },
    address: [
      {
        address_title: {
          type: String,
        },
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

    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
