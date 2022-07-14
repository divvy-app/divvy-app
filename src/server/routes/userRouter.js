const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const cookieController = require("../controllers/cookieController");

router.get(
  "/github/oAuth",
  userController.getToken,
  userController.getUser,
  (req, res) => {
    return res.redirect("/split");
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

router.post("/getID", userController.getUserID, (req, res) => {
  res.status(200).json(res.locals.userID);
});

router.post("/addBill", userController.getUserID, userController.addBill, (req, res) => {
  res.sendStatus(200);
})

router.get("/getBills", userController.getBills, (req, res) => {
  res.status(200).send(res.locals.billhistory);
})

router.delete("/deleteBill", userController.deleteBill, (req, res) => {
  res.status(200).send(res.locals.deleted);
})

module.exports = router;
