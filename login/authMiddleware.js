const jwt = require("jsonwebtoken");

const SECRET_KEY = "xnD4zjK8"; // Same secret key used for signing the JWT

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user; // You can access the user information in subsequent handlers
    next();
  });
};

module.exports = authenticateToken;
