const express = require('express');
const router = express.Router();
//connecting to database server
require('../db/connection');
const User  = require("../model/userSchema");
router.get('/', (req, res) => {
    res.send(`Hello world from the server router js`);
});

router.post('/register', (req, res) => {
    //object desructuring 
    const {name,email,phone,work,password,cpassword} = req.body;
    //here we are checking for the all data is filled or not 
    if(!name || !email || !phone || !work || !password|| !cpassword){
            return res.status(422).json({error: 'make sure all fields are filled up '})
    }
    //doing this we can get to unique user 
    User.findOne({email:email})
    .then((userExist) => {
        if(userExist){
            return res.status(422).json({error: 'user already exists'})
        }
        //user save 
        const user = new User({name, email, phone, work, password, cpassword});
        user.save().then(()=>{
            res.status(201).json({success:"user successfully registered"})
        }).catch(()=>{
            res.status(500).json({error:"failed to register"})
        })
    }).catch(err=>{console.log(err)})
});

module.exports = router;