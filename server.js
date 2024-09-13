const express = require("express");
const cors = require("cors");
const app = express();
const port = 4001;
app.use(cors({ origin: "*" }));
app.use(express.json());
const mongoose = require("mongoose");
const url =
  "mongodb+srv://sai1342:04121998%40Dob@cluster0.woilnkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(url)
  .then(() => console.log("DB connected.."))
  .catch((err) => console.log(err));

const Loginroute = require("./login/Login");
const auth = require("./login/authMiddleware");

app.use("/login", Loginroute);

app.get("/protected", auth, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

app.get("/", (req, res) => {
  res.send("welcome to server");
});
app.listen(port, () => {
  console.log("Server is running on port :", port);
});
