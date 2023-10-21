const express = require("express");
const router = express.Router();
const data = require("../data");

// Gets All Members
router.get("/", (req, res) => res.json(data));

// Get Single Member
router.get("status/:id", (req, res) => {
  const status = parseInt(req.params.id);
  switch (status) {
    case 200:
      "OK";
      break;
    case 300:
      "Multiple Choices";
      break;
    case 400:
      "Bad Request";
      break;
    case 500:
      "Internal Server Error";
      break;
  }

  if (status) {
    res.json({ Status: `Status:${req.params.id} `, message: mesg });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
