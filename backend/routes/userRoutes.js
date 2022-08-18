const express = require("express");
const {reqisterUser,authUser} = require("../controller/userController")
const Router = express.Router();

Router.post("/",reqisterUser);
Router.post("/login",authUser)

module.exports=Router;