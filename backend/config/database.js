import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "../env",
});
const databaseConnection = () => {
  mongoose
    .connect(process.env.URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default databaseConnection;
