const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger-output.json");
const app = express();
const port = process.env.PORT || 8080;
app.use(cors({ origin: "*" }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css";

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, { customCssUrl: CSS_URL })
);

const mongoose = require("mongoose");
const url = process.env.MONGO_URL;
mongoose
  .connect(url)
  .then(() => console.log("DB connected.."))
  .catch((err) => console.log(err));

if (fs.existsSync("./swagger-output.json")) {
  console.log("Swagger output JSON exists!");
} else {
  console.error("Swagger output JSON does not exist!");
}

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const Loginroute = require("./src/login/Login");
const auth = require("./src/login/authMiddleware");
const CreateJob = require("./src/jobposting/CreateJob");
const GetJobList = require("./src/jobposting/GetJobList");
const DeleteJob = require("./src/jobposting/DeleteJob");
const EditJob = require("./src/jobposting/EditJob");
const ApplyJob = require("./src/job-apply/ApplyJob");
const GetAppliedJobList = require("./src/job-apply/GetAppliedJobList");
const DeleteAppliedJob = require("./src/job-apply/DeleteAppliedJob");
const ContactUs = require("./src/contact/Contact");
const GetContactedUsersList = require("./src/contact/GetContactedUsersList");

app.get("/protected", auth, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});
app.use("/login", Loginroute);
app.use("/createjob", CreateJob);
app.use("/getjoblist", GetJobList);
app.use("/deletejob", DeleteJob);
app.use("/editjob", EditJob);
app.use("/applyjob", ApplyJob);
app.use("/getappliedjoblist", GetAppliedJobList);
app.use("/deleteappliedjob", DeleteAppliedJob);
app.use("/contact", ContactUs);
app.use("/getcontacteduserslist", GetContactedUsersList);

app.get("/", (req, res) => {
  res.send("welcome to growmore");
});

app.listen(port, () => {
  console.log("Server is running on port :", port);
  console.log(`Swagger Docs available at http://localhost:${port}/docs`);
});
