const express = require("express");
const indexRoutes = require("./routes/index.routes");
const path = require("path");
const morgan = require("morgan");

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

module.exports = app;
