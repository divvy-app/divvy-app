const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get(
  "/github/oAuth",
  userController.getToken,
  userController.getUser,
  (req, res) => {
    return res.redirect("/split");
  }
);

router.post("/signUp", userController.createUser, (req, res) => {
  return res.sendStatus(200);
});

router.post("/login", userController.verifyUser, (req, res) => {
  return res.status(200).send(res.locals.verified);
});

router.post("/getID", userController.getUserID, (req, res) => {
  res.status(200).json(res.locals.userID);
});

router.post("/addBill", userController.getUserID, userController.addBill, (req, res) => {
  res.sendStatus(200);
})

router.get("/getBills", userController.getBills, (req, res) => {
  res.status(200).json(res.locals.billhistory);
})
module.exports = router;
