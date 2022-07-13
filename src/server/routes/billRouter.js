const express = require("express");

const billController = require("../controllers/billController");
const userController = require("../controllers/userController");

const router = express.Router();

router.get(
  "/",
  userController.getUserID,
  billController.getBillHistory,
  (req, res) => res.status(200).json(res.locals.billhistory)
);

router.post(
  "/bill",
  userController.getUserID,
  billController.addBill,
  (req, res) => res.sendStatus(200)
);

module.exports = router;
