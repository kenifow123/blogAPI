const express = require("express");
const loginRouter = express.Router();
const loginController = require("../controllers/loginController.js");
const passport = require("passport");

loginRouter.post('/', loginController.loginPost);
module.exports = loginRouter;