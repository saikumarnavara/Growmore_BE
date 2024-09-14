const express = require("express");
const CreateJob = require("../schemas/Schema");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, overview, active } = req.body;

    const newEntry = new CreateJob({
      title,
      overview,
      active: active !== undefined ? active : true,
    });

    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
