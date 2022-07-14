const clientSecret = "";
const clientID = "";
const axios = require("axios");
const bcrypt = require("bcrypt");
const db = require("../models/divvyModels");
const userController = {};

userController.getToken = async (req, res, next) => {
  const requestToken = req.query.code;
  const url = `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`;
  let token;
  try {
    token = await axios({
      method: "POST",
      url,
      headers: {
        accept: "application/json",
      },
    });
    res.locals.accessToken = token.data.access_token;
    return next();
  } catch (err) {
    return next({
      status: 401,
      log: `userController.getToken error!! Error follows: ${err}`,
      message: { err: "You made an error in the userController.getToken" },
    });
  }
};

userController.getUser = async (req, res, next) => {
  const url = "https://api.github.com/user";
  let currentUser;
  try {
    currentUser = await axios({
      method: "GET",
      url,
      headers: {
        accept: "application/json",
        Authorization: `token ${res.locals.accessToken}`,
      },
    });
    res.locals.githubUser = currentUser.data.login;
    return next();
  } catch (err) {
    return next({
      status: 402,
      log: `userController.getUser error!! Error follows: ${err}`,
      message: { err: "You made an error in the userController.getUser" },
    });
  }
};

userController.createUser = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = `INSERT INTO "user" (username, email, password) VALUES ($1, $2, $3);`;
    const newUserDetails = [username, email, hashedPassword];
    const data = await db.query(createUser, newUserDetails);
    // console.log("Data after signing up new user:", data.rows);
    const findUserId = `SELECT _id FROM "user" WHERE "email" = '${email}';`;
    const data2 = await db.query(findUserId);
    const userId = await data2.rows[0]._id;
    // console.log(userId);
    res.locals.id = userId;
    return next();
  } catch (err) {
    return next({
      status: 402,
      log: `userController.createUser error!! Error follows: ${err}`,
      message: { err: "You made an error in the userController.createUser" },
    });
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const findUserPassword = `SELECT * FROM "user" WHERE "email" = '${email}';`;
    const data = await db.query(findUserPassword);
    const userPassword = await data.rows[0].password;
    const userId = await data.rows[0]._id;
    const passwordVerification = await bcrypt.compare(password, userPassword);
    res.locals.verified = passwordVerification;
    res.locals.id = userId;
    // console.log(res.locals.verified, res.locals.id);
    return next();
  } catch (err) {
    return next({
      status: 402,
      log: `userController.verifyUser error!! Error follows: ${err}`,
      message: { err: "You made an error in the userController.verifyUser" },
    });
  }
};

userController.getUserID = async (req, res, next) => {
  try {
    const { email } = req.body;
    const findID = `SELECT _id FROM "user" WHERE "email" = '${email}';`;
    const data = await db.query(findID);
    console.log("This is the ID", data.rows[0]._id);
    res.locals.userID = data.rows[0]._id;
    return next();
  } catch (err) {
    return next({
      status: 402,
      log: `userController.verifyUser error!! Error follows: ${err}`,
      message: { err: "You made an error in the userController.verifyUser" },
    });
  }
};

userController.addBill = async (req, res, next) => {
  try {
    const { title, total, numSplit, userCost } = req.body;
    const userid = res.locals.userID;

    console.log(req.body, "User ID: ", userid);
    const createBill = `INSERT INTO "bill" ("title", "numSplit", "userCost", "totalCost", "user_id") VALUES ($1, $2, $3, $4, $5);`;
    const newBillDetails = [title, numSplit, userCost, total, userid];
    const data = await db.query(createBill, newBillDetails);
    console.log("Created a new bill");
    return next();
  } catch (err) {
    return next({
      status: 402,
      log: `userController.addBill error!! Error follows: ${err}`,
      message: { err: "You made an error in the userController.addBill" },
    });
  }
};

userController.getBills = async (req, res, next) => {
  try {
    const text = `SELECT * FROM "bill"`;
    const data = await db.query(text);
    console.log("This is the bill history", data.rows);
    res.locals.billhistory= data.rows;
    return next();
  } catch (err) {
    return next({
      status: 402,
      log: `userController.getBills error!! Error follows: ${err}`,
      message: { err: "You made an error in the userController.getBills" },
    });
  }
};

userController.deleteBill = async (req, res, next) => {
  const body = req.body;
  const text = `DELETE FROM bill WHERE bill._id = ${body._id};`;

  await db
    .query(text)
    .then((response) => {
      console.log(response.rowCount);
      if (response.rowCount === 0) res.locals.deleted = false;
      else res.locals.deleted = true;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = userController;
