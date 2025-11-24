// -------------------------
// IMPORTS
// -------------------------
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";
import flash from "connect-flash";
import helmet from "helmet";
import cors from "cors";

import indexRouter from "./routes/index.js";

// -------------------------
// APP INITIALIZATION
// -------------------------
const app = express();

// -------------------------
// VIEW ENGINE SETUP
// -------------------------
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// -------------------------
// MIDDLEWARE
// -------------------------
app.use(logger("dev"));          // FIXED morgan import
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());                 // FIXED cors import
app.use(helmet());

app.use(
  session({
    secret: "sessionsecretkey",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

// -------------------------
// ROUTES
// -------------------------
app.use("/", indexRouter);

// -------------------------
// ERROR HANDLING
// -------------------------

// catch 404
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// general error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});

export default app;
