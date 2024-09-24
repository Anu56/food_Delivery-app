import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://anuradhadubey6392:pw6gVfVzuew7r08U@cluster0.dey5v.mongodb.net/?"
    )
    .then(() => console.log("Connected To Database"));
};
