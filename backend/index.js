import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world ");
});

app.listen(4000, () => {
  console.log("Listening");
});
