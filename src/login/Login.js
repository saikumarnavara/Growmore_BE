const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Fixed username and password
const USERNAME = "admin";
const PASSWORD = "password123";

// Secret key for signing the JWT
const SECRET_KEY = "xnD4zjK8";

router.post("/", (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "30m" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

module.exports = router;
