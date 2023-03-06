import { Schema, model } from "mongoose";

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

export default model("Contact", contact);
