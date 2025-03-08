//password= 267KnrH0FysJKJmS

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoute");

const app = express();

//Middleware
app.use(express.json());
app.use("/users",router);


mongoose.connect("mongodb+srv://admin:267KnrH0FysJKJmS@cluster0.taukt.mongodb.net/")
.then( ()=> console.log("Connected to MongoDB"))
.then( () => {
    app.listen(5000);
})
.catch( (err)=> console.log((err)));