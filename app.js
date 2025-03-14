//password= 267KnrH0FysJKJmS
//"mongodb+srv://admin:267KnrH0FysJKJmS@cluster0.taukt.mongodb.net/"

import express from "express"
import mongoose from "mongoose"
import userRoute from "./Route/UserRoute.js"
import bodyParser from "body-parser"
import jwt from "jsonwebtoken"

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    
    let token = req.header("Authorization");

    if (token) {
        token = token.replace("Bearer ", "");

        jwt.verify(token, "sparepartkey", (error, decoded) => {
            if (error) {
                return res.status(401).json({ error: "Invalid token" });
            }
            req.user = decoded;
            next(); 
        });

    } else {

        res.status(401).json({ error: "Authorization token required" });
        return;
    }
    
});


let mongoUrl = "mongodb+srv://admin:267KnrH0FysJKJmS@cluster0.taukt.mongodb.net/";

mongoose.connect(mongoUrl);

const conn = mongoose.connection;

conn.once("open",()=>{
    console.log("Connection established")
})

app.use("/api/employees",userRoute);

app.listen(5000,()=>{
    console.log ("Server running on port 5000");
})
