// schema for applying to a job/internship
const mongoose = require("mongoose");

const ApplyJobSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    highestEducation: {
      type: String,
      required: true,
      trim: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    resume: {
      type: String,
      required: true, // Assuming you'll store a path to the resume file or URL
    },
    totalExp: {
      type: Number,
      required: true,
    },
    coverLetter: {
      type: String, // Optional field
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const ApplyJob = mongoose.model("ApplyJob", ApplyJobSchema);
module.exports = ApplyJob;
