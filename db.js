import mongoose from "mongoose";
import dotenv from "dotenv";

//dot env config
dotenv.config();

const mongoURL = process.env.MONGO_URL;

export function dbConnect() {
  try {
    mongoose.connect(mongoURL);
    console.log("Data base connected");
  } catch (err) {
    console.log(err);
  }
}
