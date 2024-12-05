import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb://0.0.0.0")
    .then(() => console.log("connected! Hello MongoDB"));
};

