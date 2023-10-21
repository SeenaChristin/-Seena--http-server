const express = require("express");
const router = express.Router();

// Get Single Member
router.get("/:id", (req, res) => {
  const delay = parseInt(req.params.id);
  if (delay) {
    setTimeout(() => {
      res.json({ ResponseTime: delay + " seconds" });
    }, delay * 1000);
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
