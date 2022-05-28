const mongoose = require("mongoose");
const ObjectId  = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
      require: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      require: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      require: true,
    },
    stoke: {
      type: number,
    },
    sold: {
      type: number,
      default: 0,
    },
    photo: {
      data: buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
