const express = require("express");
const ApplyJob = require("../schemas/Schema"); // Adjust the path to your actual schema file
const router = express.Router();

// DELETE route to delete a specific job application
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the job application by ID and delete it
    const deletedJob = await ApplyJob.findByIdAndDelete(id);

    // Check if the job application was found and deleted
    if (!deletedJob) {
      return res.status(404).json({
        message: "Job application not found",
      });
    }

    // Send a success response
    res.status(200).json({
      message: "Job application deleted successfully",
      data: deletedJob,
    });
  } catch (error) {
    // Handle any errors
    console.error("Error deleting job application:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
