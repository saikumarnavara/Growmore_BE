const express = require("express");
const ApplyJob = require("../schemas/ApplyJobSchema");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/resumes";
    // Automatically create directory if it doesn't exist
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    // Generate a unique name for each file
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Configure multer to handle both form fields and file upload
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB file size limit
  },
  fileFilter: (req, file, cb) => {
    const fileTypes = /pdf|doc|docx/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = fileTypes.test(file.mimetype);

    if (extname && mimeType) {
      cb(null, true);
    } else {
      cb(new Error("Only .pdf, .doc, and .docx files are allowed"));
    }
  },
});

router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const {
      jobTitle,
      fullName,
      email,
      phone,
      highestEducation,
      percentage,
      totalExp,
      coverLetter,
    } = req.body;

    if (
      !jobTitle ||
      !fullName ||
      !email ||
      !phone ||
      !highestEducation ||
      !percentage ||
      !totalExp
    ) {
      console.log("Missing required fields");
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.file) {
      console.log("Resume file is missing");
      return res.status(400).json({ message: "Resume is required" });
    }

    const newUser = new ApplyJob({
      jobTitle,
      fullName,
      email,
      phone,
      highestEducation,
      percentage,
      resume: req.file.path,
      totalExp,
      coverLetter,
    });

    await newUser.save();

    res.status(201).json({
      message: "Job application created successfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Error creating job application:", error.stack);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
