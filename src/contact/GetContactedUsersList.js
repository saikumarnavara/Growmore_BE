const express = require("express");
const ContactUs = require(".././schemas/contactSchema");
const router = express.Router();

// GET route to retrieve all contact form submissions
router.get("/", async (req, res) => {
  try {
    // Fetch all contact form submissions from the database
    const contacts = await ContactUs.find();

    // Send a success response with the list of contacts
    res.status(200).json({
      message: "List of all contacted users retrieved successfully",
      data: contacts,
    });
  } catch (error) {
    // Handle any errors
    console.error("Error retrieving contacted users:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
