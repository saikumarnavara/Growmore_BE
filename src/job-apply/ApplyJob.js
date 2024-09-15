const express = require("express");
const ApplyJob = require("../schemas/Schema");
const router = express.Router();

// POST route to create a new job application
router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      highestEducation,
      percentage,
      resume,
      totalExp,
      coverLetter,
    } = req.body;

    // Create a new user instance with the provided data
    const newUser = new ApplyJob({
      fullName,
      email,
      phone,
      highestEducation,
      percentage,
      resume,
      totalExp,
      coverLetter,
    });

    // Save the new user instance to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({
      message: "Job application created successfully",
      data: newUser,
    });
  } catch (error) {
    // Handle any errors
    console.error("Error creating job application:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
