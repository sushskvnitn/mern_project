const express = require("express");
const router = express.Router();
//connecting to database server
require("../db/connection");
const User = require("../model/userSchema");
router.get("/", (req, res) => {
  res.send(`Hello world from the server router js`);
});

// //here we are doing this using promices now lets do it using async await
// router.post('/register', (req, res) => {
//     //object desructuring
//     const {name,email,phone,work,password,cpassword} = req.body;
//     //here we are checking for the all data is filled or not
//     if(!name || !email || !phone || !work || !password|| !cpassword){
//             return res.status(422).json({error: 'make sure all fields are filled up '})
//     }
//     //doing this we can get to unique user
//     User.findOne({email:email})
//     .then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error: 'user already exists'})
//         }
//         //user save
//         const user = new User({name, email, phone, work, password, cpassword});
//         user.save().then(()=>{
//             res.status(201).json({success:"user successfully registered"})
//         }).catch(()=>{
//             res.status(500).json({error:"failed to register"})
//         })
//     }).catch(err=>{console.log(err)})
// });

//using async await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res
      .status(422)
      .json({ error: "make sure all fields are filled up " });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    }else if(password !=cpassword){
        return res.status(422).json({ error: "password not matching " });
    }else{
    const user = new User({ name, email, phone, work, password, cpassword });
    //here we got the data but we are yet to save it ,before saving we can hash the data (hashing is done in userschema )
    await user.save();
    res.status(201).json({ success: "user successfully registered" });
    }

  } catch (error) {
    console.log(error);
  }
});

//LOGIN ROUTE 
router.post('/signin',async (req, res) => {
    const{email,password}= req.body;
    if ( !email  || !password) {
        return res
          .status(422)
          .json({ error: "make sure all fields are filled up " });
      }
      try {
          //here User is from user schema 
        const userlogin= await User.findOne({ email: email });
        console.log(req.body);
        if(!userlogin) {
            res.status(404).json({ error: "user with email doesnt exist" });
        }else{
             res.status(201).json({ success: "user signin  successfully " });
        }
       
      } catch (error) {
        console.log(err);
      }

})

module.exports = router;
