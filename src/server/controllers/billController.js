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

billController.getUserID = async (req, res, next) => {
  console.log("Hi?");
  try {
    const { email } = req.body;
    const findID = `SELECT _id FROM "user" WHERE "email" = '${email}';`;
    const data = await db.query(findID);
    console.log("This is the ID", data);
    return next();
  } catch (err) {
    return next({
      status: 402,
      log: `userController.verifyUser error!! Error follows: ${err}`,
      message: { err: "You made an error in the userController.verifyUser" },
    });
  }
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
