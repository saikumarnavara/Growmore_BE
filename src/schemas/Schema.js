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

// schema for applying to a job/internship

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

// schema for contact us form
const ContactSchema = new mongoose.Schema(
  {
    name: {
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
    query: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically creates `createdAt` and `updatedAt` fields
  }
);

// Create the Contact model
const ContactUs = mongoose.model("ContactUs", ContactSchema);
module.exports = ContactUs;

