const mongoose = require("mongoose");

// User Schema and Model
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

// schema for creating a job/internship

const CreateJobPosting = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  overview: {
    type: [String],
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const CreateJob = mongoose.model("CreateJobPosting", CreateJobPosting);

module.exports = CreateJob;
