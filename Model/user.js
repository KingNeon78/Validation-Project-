const { string } = require("joi");
const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name:{
        type: string,
        required: true,
        unique: true,
    },
    email: {
        type: string,
        required: true,
        unique: true,
    },
  }

);

module.exports = mongoose.model("User",User )