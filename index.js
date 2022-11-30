const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/Category";
const bodyParser = require("body-parser");
const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const cons = mongoose.connection;

cons.on("open", () => {
  console.log("connected...");
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const category = require("./routes/category.route");
app.use("/categories", category);

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});