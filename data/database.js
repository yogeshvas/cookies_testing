import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("mongodb+srv://khair:khair123@cluster0.mu3sawn.mongodb.net/library")
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
