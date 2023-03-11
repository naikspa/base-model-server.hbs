const { Schema, model } = require("mongoose");

const data = new Schema({
  email: {
    type: String,
    required: false,
    unique: false,
    trim: false,
  },
});

const dataModel = model("Data", data);

module.exports = dataModel;
