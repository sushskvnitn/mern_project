const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares : 
// like jab tak user login nahi hua ,tab tak koi dusra page open nahi hoga type ka
// interface banana hai toh middleware use karte hai,we have to mention middleware before the (req,res) method

const middleware =(req,res,next)=>{
    console.log("hello from middleware ");
    //after the work is complete like authentication ,call next function 
    next();
}


app.get("/", (req, res) => {
  res.send("hello world from server");
});
app.get("/about",middleware, (req, res) => {
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
