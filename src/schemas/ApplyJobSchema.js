// const mongoose = require("mongoose");

// const ApplyJobSchema = new mongoose.Schema(
//   {
//     fullName: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       lowercase: true,
//       trim: true,
//       validate: {
//         validator: function (v) {
//           return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Simple email regex
//         },
//         message: (props) => `${props.value} is not a valid email address!`,
//       },
//     },
//     phone: {
//       type: String,
//       required: true,
//       trim: true,
//       validate: {
//         validator: function (v) {
//           return /^\+?[0-9]{7,15}$/.test(v); // Regex to handle international formats, minimum 7 digits, max 15
//         },
//         message: (props) => `${props.value} is not a valid phone number!`,
//       },
//     },
//     highestEducation: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     percentage: {
//       type: Number,
//       required: true,
//       min: 0, // Minimum percentage is 0
//       max: 100, // Maximum percentage is 100
//     },
//     resume: {
//       type: String,
//       required: true, // Assuming you'll store a path to the resume file or a URL
//       trim: true,
//     },
//     totalExp: {
//       type: Number,
//       required: true,
//       min: 0, // Minimum experience is 0
//     },
//     coverLetter: {
//       type: String, // Optional field
//       required: false,
//       trim: true,
//     },
//   },
//   {
//     timestamps: true, // Automatically manages createdAt and updatedAt fields
//   }
// );

// const ApplyJob = mongoose.model("ApplyJob", ApplyJobSchema);
// module.exports = ApplyJob;

const mongoose = require("mongoose");

const ApplyJobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  highestEducation: { type: String, required: true },
  percentage: { type: String, required: true },
  resume: { type: String, required: true },
  totalExp: { type: String, required: true },
  coverLetter: { type: String },
});

module.exports = mongoose.model("ApplyJob", ApplyJobSchema);
