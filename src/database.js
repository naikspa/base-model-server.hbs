const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MDB_URI, { useNewUrlParser: true })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));
