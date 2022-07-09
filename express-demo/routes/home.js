const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send("Salom");
  res.render("index", {
    title: "my express app",
    greating: "Assalomu alaykum",
  });
});

module.exports = router;
