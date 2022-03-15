const mongoose = require("mongoose");
const express = require("express");
const dotenv =require("dotenv");//type null > config.env to create dotenv file in terminal 
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares :
// like jab tak user login nahi hua ,tab tak koi dusra page open nahi hoga type ka
// interface banana hai toh middleware use karte hai,we have to mention middleware before the (req,res) method

//linking router to make our route easy 
app.use(require('./router/auth'));

const middleware = (req, res, next) => {
  console.log("hello from middleware ");
  //after the work is complete like authentication ,call next function
  next();
};
// CONFIGURING DONENV for better security protection of passwords
dotenv.config({path: './config.env'})

//connecting to database server
require('./db/connection');

//creating a new user 
const User  = require("./model/userSchema");



app.get("/about", middleware, (req, res) => {
  res.send("hello world from about");
});
app.get("/contact", (req, res) => {
  res.send("hello world from contact");
});

app.get("/signin", (req, res) => {
  res.send("hello world from signin");
});

app.get("/signup", (req, res) => {
  res.send("hello world from signup");
});
app.listen(PORT, (req, res) => {
  console.log("listening on port " + PORT);
});
