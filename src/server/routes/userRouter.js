const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get(
  "/github/oAuth",
  userController.getToken,
  userController.getUser,
  (req, res) => {
    return res.redirect("/");
  }
);

module.exports = router;
