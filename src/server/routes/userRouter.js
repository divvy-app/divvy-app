const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const cookieController = require("../controllers/cookieController");

router.get(
  "/github/oAuth",
  userController.getToken,
  userController.getUser,
  (req, res) => {
    return res.redirect("/");
  }
);

router.post(
  "/signUp",
  userController.createUser,
  cookieController.startSessionCookie,
  (req, res) => {
    return res.status(200).send("Signed Up");
  }
);

router.post(
  "/login",
  userController.verifyUser,
  cookieController.test,
  (req, res) => {
    return res.status(200).send(res.locals.verified);
  }
);

module.exports = router;
