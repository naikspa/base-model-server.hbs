const { Schema, model } = require("mongoose");

const contact = new Schema({
  cName: {
    type: String,
    required: true,
  },
  cSurname: {
    type: String,
    required: true,
  },
  cEmail: {
    type: String,
    required: true,
  },
  cNumber: {
    type: String,
    required: true,
  },
});

const contactModel = model("Contact", contact);

module.exports = contactModel;
