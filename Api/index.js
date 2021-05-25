require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./src/Routes/indexRouter");

const app = express();

app.use(express.json());

mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(foodRouter);

app.listen(3001, () => {
  console.log("Server is running...");
});