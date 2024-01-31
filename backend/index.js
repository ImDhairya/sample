import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json);

app.get("/", (req, res) => {
  res.send("Hello world ");
});

app.listen(4000, () => {
  console.log("Listening");
});
