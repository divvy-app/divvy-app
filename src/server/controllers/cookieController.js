const db = require("../models/divvyModels");
const cookieController = {};

cookieController.startSessionCookie = async (req, res, next) => {
  try {
    const id = res.locals.id;
    const createSession = `INSERT INTO "session" (ssid) VALUES (${id});`;
    const data = await db.query(createSession);
    // res.cookie("ssid", res.locals.id, {
    //   httpOnly: true,
    //   expire: new Date(Date.now() + 100000),
    // });
    res.cookie("Coding", "Hard");
    console.log("Cookie created!");
    return next();
  } catch (err) {
    return next({
      status: 402,
      log: `cookieController.startSessionCookie error!! Error follows: ${err}`,
      message: {
        err: "You made an error in the cookieController.startSessionCookie",
      },
    });
  }
};

cookieController.updateSessions = async (req, res, next) => {
  const text = `DELETE FROM "session" WHERE now() - 'created_at' > '00:30:00'::interval;`;
  try {
    const data = await db.query(text);
    return next();
  } catch (err) {
    return next({
      status: 402,
      log: `cookieController.updateSessions error!! Error follows: ${err}`,
      message: {
        err: "You made an error in the cookieController.updateSessions",
      },
    });
  }
};

cookieController.verifySessionCookie = async (req, res, next) => {
  try {
    const findSession = `SELECT _id FROM "session" WHERE "ssid" = '${req.cookies.ssid}';`;
    const currentSession = await db.query(findSession);
    return next();
  } catch (err) {
    return next({
      status: 402,
      log: `cookieController.verifySessionCookie error!! Error follows: ${err}`,
      message: {
        err: "You made an error in the cookieController.verifySessionCookie",
      },
    });
  }
};

module.exports = cookieController;
