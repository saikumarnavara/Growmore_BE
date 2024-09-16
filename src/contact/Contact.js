const express = require("express");
const ContactUs = require(".././schemas/contactSchema");
const router = express.Router();

// POST route to handle contact form submissions
router.post("/", async (req, res) => {
  try {
    // Extracting data from the request body
    const { name, email, query } = req.body;

    // Validate input (you can add more detailed validation here if needed)
    if (!name || !email || !query) {
      return res.status(400).json({
        message: "Name, email, and query are required fields.",
      });
    }

    // Create a new contact instance with the provided data
    const newContact = new ContactUs({
      name,
      email,
      query,
    });

    // Save the new contact instance to the database
    await newContact.save();

    // Send a success response
    res.status(201).json({
      message: "Your query has been submitted successfully.",
      data: newContact,
    });
  } catch (error) {
    // Handle any errors
    console.error("Error submitting contact form:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
