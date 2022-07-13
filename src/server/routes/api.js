const express = require('express');

const divvyController = require('../controllers/divvyController');

const router = express.Router();

router.get('/',
  divvyController.getUserID, divvyController.getBillHistory,
  (req, res) => res.status(200).json(res.locals.billhistory)
);

router.post('/bill',
  divvyController.getUserID, divvyController.addBill,
  (req, res) => res.sendStatus(200)
);

router.get('/allUsers', divvyController.getAllUsers, (req, res) => {
  res.status(200).json(res.locals.users)
})

router.get('/getUser', divvyController.getUser, (req, res) => {
  res.status(200).json(res.locals.user)
})

router.get('/addUser', divvyController.addUser, (req, res) => {
  res.sendStatus(200);
})

module.exports = router;