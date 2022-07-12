const clientSecret = "5f8a5b8c20ba50acd83ad6d467220c15939d8d47";
const clientID = "4d828c754c60a2276cbe";
const axios = require("axios");
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

module.exports = userController;
