const express = require("express"); //import express
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const colors = require("colors")
const userRoutes = require("./routes/userRoutes");
const app = express() //instance of express

dotenv.config();
connectDB();

app.get("/",(req,res)=>{
    res.send("API is running");
})

const PORT = process.env.PORT || 5000;


app.listen(PORT,console.log(`server started on PORT ${PORT}`.yellow.bold));
