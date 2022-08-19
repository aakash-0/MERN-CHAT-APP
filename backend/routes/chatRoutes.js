const express = require("express");
const { accesChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromGroup } = require("../controller/chatController");
const { protect } = require("../middlewares/authMiddleware");

const Router = express.Router();

Router.post("/",protect,accesChat);
Router.get("/",protect,fetchChats);
Router.post("/group",protect,createGroupChat);
Router.put("/rename",protect,renameGroup);
Router.put("/groupremove",protect,removeFromGroup);
Router.put("/groupadd",protect,addToGroup);


module.exports = Router;






