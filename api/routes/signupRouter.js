const express = require("express");
const signupRouter = express.Router();
const signupController = require("../controllers/signupController.js");

signupRouter.post('/', signupController.signupPost);

module.exports = signupRouter;