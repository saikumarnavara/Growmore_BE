const express = require("express");
const CreateJob = require("../schemas/CreateJobSchema");
const router = express.Router();

// PUT API to update a software development entry by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedItem = await CreateJob.findByIdAndUpdate(id, updateData, {
      new: true, // This option returns the updated document
      runValidators: true, // This option ensures that validation is applied
    });

    if (!updatedItem) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job updated successfully", updatedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
