import { config } from "dotenv";

config();

export const MDB_URI = process.env.MDB_URI || "mongodb://127.0.0.1/portf";
