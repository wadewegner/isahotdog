const express = require("express");
const path = require("path");
const app = express();

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Set view engine to EJS
app.set("view engine", "ejs");

// Route to render index.ejs
app.get("/", (req, res) => {
  res.render("index");
});

// Set port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
