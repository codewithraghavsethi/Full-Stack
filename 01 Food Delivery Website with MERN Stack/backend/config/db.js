import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://raghav:raghav123@cluster0.p8ncv.mongodb.net/food-del-sethitech")
    .then(() => console.log("connected! Hello MongoDB"));
};

