const express = require("express");
const uuid = require("uuid");
const router = express.Router();

// Get Single Member
router.get("/", (req, res) => {
  let uuidNumber = uuid.v4();
  if (uuidNumber) {
    res.json({ UUId: uuidNumber });
  } else {
    res.status(400).json({ msg: `Couldnot generate UUID` });
  }
});

module.exports = router;
