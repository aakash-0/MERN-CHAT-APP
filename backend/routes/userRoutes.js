const express = require("express");
const {reqisterUser,authUser,allUsers} = require("../controller/userController")
const {protect} = require("../middlewares/authMiddleware")

const Router = express.Router();

Router.post("/",reqisterUser);
Router.post("/login",authUser)
Router.get("/",protect,allUsers);

module.exports=Router;