const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const status = parseInt(req.params.id);
  let msg = "";
  switch (status) {
    case 200:
      msg = "OK";
      break;
    case 300:
      msg = "Multiple Choices";
      break;
    case 400:
      msg = "Bad Request";
      break;
    case 500:
      msg = "Internal Server Error";
      break;
  }

  if (msg != "") {
    res.json({ Status: `Status:${req.params.id} `, message: msg });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
