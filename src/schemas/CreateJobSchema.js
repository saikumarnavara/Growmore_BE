const mongoose = require("mongoose");

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
