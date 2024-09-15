const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 4001;
app.use(cors({ origin: "*" }));
app.use(express.json());
const mongoose = require("mongoose");
const url = process.env.MONGO_URL;
mongoose
  .connect(url)
  .then(() => console.log("DB connected.."))
  .catch((err) => console.log(err));

const Loginroute = require("./src/login/Login");
const auth = require("./src/login/authMiddleware");
const CreateJob = require("./src/jobposting/CreateJob");
const GetJobList = require("./src/jobposting/GetJobList");
const DeleteJob = require("./src/jobposting/DeleteJob");
const EditJob = require("./src/jobposting/EditJob");

app.use("/login", Loginroute);

app.get("/protected", auth, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});
app.use("/createjob", CreateJob);
app.use("/getjoblist", GetJobList);
app.use("/deletejob", DeleteJob);
app.use("/editjob", EditJob);

app.get("/", (req, res) => {
  res.send("welcome to server");
});

app.listen(port, () => {
  console.log("Server is running on port :", port);
});
