const jwt = require("jsonwebtoken");
const User  = require("../model/userSchema");
const authenticate=async(req,res,next)=>{
try {
    const token = req.cookies.jwtoken;
    const verifytoken = jwt.verify(token,process.env.SECRET_KEY);//verify the token and store the user in verifytoken variable
      const rootuser = await User.findOne({_id:verifytoken._id,"tokens.token":token});//if condition passed, we get genuine user
     if(!rootuser){
       throw new Error('user not found');
     }
     //here we are setting the user in the req object
      req.rootuser=rootuser;
      req.token=token;
      req.userID=rootuser._id;
      next();
      
} catch (error) {
      res.status(401).send("unauthorized: no token provided");
     console.log(error); 
}

}
module.exports=authenticate;