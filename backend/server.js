const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(express.urlencoded({ extended: false })); //parsing url query to javascript object
app.use(bodyParser.json()); //change to js

console.log(readdirSync("./routes")); //

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));
//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log("error connecting mongodb", error));

const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => {
  if (err) {
    console.log("Server connection error");
  } else {
    console.log(`Server is running on port : ${PORT}...`);
  }
});
