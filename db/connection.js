const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.set("strictQuery", true);

dotenv.config({ path: "./config.env" });
const DB = process.env.MONGO_URI;

mongoose
  .connect(DB)
  .then(() => {
    console.log("mongodb connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });
