const express = require("express");
const ApplyJob = require(".././schemas/ApplyJobSchema");
const router = express.Router();

// GET route to retrieve a list of all job applications
router.get("/", async (req, res) => {
  try {
    // Fetch all job applications from the database
    const jobApplications = await ApplyJob.find();

    // Send a success response with the list of job applications
    res.status(200).json({
      message: "List of all applied jobs retrieved successfully",
      data: jobApplications,
    });
  } catch (error) {
    // Handle any errors
    console.error("Error retrieving job applications:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
