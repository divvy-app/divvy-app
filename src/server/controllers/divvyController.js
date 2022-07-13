const db = require("../models/divvyModels");

const divvyController = {};

divvyController.getUserID = async (req, res, next) => {
  const text = `SELECT user._id
  FROM user 
  WHERE user.username = ${req.body};`;

  await db
    .query(text)
    .then((response) => {
      // console.log('res', response.rows);
      res.locals.userID = response.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

divvyController.getAllUsers = async (req, res, next) => {
  const text = `SELECT * FROM user`;

  await db.query(text)
    .then ((response) => {
      console.log('res', response.rows); 
      res.locals.users= response.rows;
      return next();
    }).catch (err => {
      return next(err);
    });
};

divvyController.getBillHistory =  async (req, res, next) => {
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

divvyController.addBill = async (req, res, next) => {
  console.log("req.body", req.body);
  const body = req.body;
  const text = `INSERT INTO bill(title, totalCost, numSplit, userCost, user_id) VALUES ('${bill.title}', '${bill.totalCost}', ${bill.numSplit}, '${bill.userCost}', ${res.locals.userID});`;

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

divvyController.addUser = async (req, res, next) => {
  console.log('req.body', req.body);
  const body = req.body
  //const text = `INSERT INTO user (user, email, password) VALUES ('${body.user}', '${body.email}', '${body.password}');`;
  const text = `INSERT INTO user (username) VALUES ('${body.user}');`;
  console.log(text);

  await db.query(text)
    .then (() => {
      return next();
    }).catch (err => {
      return next(err);
    });
};

divvyController.getUser = async (req, res, next) => {
  const text = `SELECT * FROM user WHERE user.username = ${req.body.user};`;

  await db.query(text)
    .then ((response) => {
      console.log('res', response.rows); 
      res.locals.user = response.rows;
      return next();
    }).catch (err => {
      return next(err);
    });
}

module.exports = divvyController;
