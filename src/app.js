import express from "express";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(indexRoutes);

// Static Files
app.use(express.static(path.join(__dirname, "public")));

export default app;
