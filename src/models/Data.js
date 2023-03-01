import { Schema, model } from "mongoose";

const data = new Schema({
  email: {
    type: String,
    required: false,
    unique: false,
    trim: false,
  },
});

export default model("Data", data);
