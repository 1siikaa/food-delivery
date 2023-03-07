require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const route = require("./src/route/route");
const app = express();

global.foodData = require('./db')(function call(err, data, CatData) {
  // console.log(data)
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.STRING)
  .then(() => console.log("mongodb is connected successfully."))
  .catch((err) => console.log(err.message));

app.use("/", route);

app.listen(process.env.PORT, function () {
  console.log(`Express app is running on port ${process.env.PORT}`);
});

