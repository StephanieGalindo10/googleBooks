const path = require("path");
const router = require("express").Router();
const apiBookRoutes = require("./api/books");
const apiGoogleRoutes = require("./api/google");

// API Routes
router.use("/api/books", apiBookRoutes);
router.use("/api/google", apiGoogleRoutes)

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
