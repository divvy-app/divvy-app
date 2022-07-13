const db = require("../models/divvyModels");

const billController = {};

billController.getBillHistory = async (req, res, next) => {
  const text = `SELECT 
  bill.title, 
  bill.numSplit, 
  bill.totalCost, 
  bill.userCost,
  FROM bill 
  LEFT JOIN user ON bill.user_id = ${res.locals.userID};`;

  await db
    .query(text)
    .then((response) => {
      // console.log('res', response.rows);
      res.locals.billhistory = response.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

billController.addBill = async (req, res, next) => {
  console.log("req.body", req.body);
  const body = req.body;
  const text = `INSERT INTO bill(title, totalCost, numSplit, userCost, user_id) VALUES ('${body.title}', '${body.totalCost}', ${body.numSplit}, '${body.userCost}', ${res.locals.userID});`;

  console.log(text);

  await db
    .query(text)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

billController.deleteBill = async (req, res, next) => {
  const body = req.body;
  const text = `DELETE FROM bill WHERE bill.title = ${body.title};`;

  await db
    .query(text)
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = billController;
