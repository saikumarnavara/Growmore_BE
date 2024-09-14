const express = require("express");
const CreateJob = require("../schemas/Schema");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const items = await CreateJob.find({});
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
