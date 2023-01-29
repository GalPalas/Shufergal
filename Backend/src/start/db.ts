import mongoose from "mongoose";

const startDB = () => {
  mongoose
    .connect(
      "mongodb+srv://Gal:gal2004@shufergal.ptebunp.mongodb.net/sufergal?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected to MongoDB..."))
    .catch(() => console.log("Could not connect to MongoDB..."));
};

export default startDB;
