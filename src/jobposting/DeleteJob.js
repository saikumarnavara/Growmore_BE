const express = require("express");
const CreateJob = require("../schemas/CreateJobSchema");
const router = express.Router();

// Define the route to include an id parameter
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract the id from the route parameters
    const deletedItem = await CreateJob.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully", deletedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
