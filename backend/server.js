const express = require("express"); //import express
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const colors = require("colors")
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");

const {errorHandler,notfound} =require("./middlewares/errorMiddleware")

const app = express() //instance of express

dotenv.config();
connectDB();
app.use(express.json()); // to accept json data


app.use("/api/user", userRoutes);
app.use("/api/chat",chatRoutes);

app.use(notfound); //error handeling
// app.use(errorHandler);//error handeling

const PORT = process.env.PORT || 5000;


app.listen(PORT,console.log(`server started on PORT ${PORT}`.yellow.bold));
