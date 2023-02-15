import mongoose from "mongoose";

const startDB = async () => {
  await mongoose
    .connect(process.env.DATABASE_NAME || "")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(() => console.log("Could not connect to MongoDB..."));
};

export default startDB;
