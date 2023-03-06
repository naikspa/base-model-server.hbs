import { config } from "dotenv";

config();

export const MDB_URI =
  process.env.MDB_URI ||
  "mongodb+srv://alenca:<password>@cluster0.rbjmmvp.mongodb.net/?retryWrites=true&w=majority";
