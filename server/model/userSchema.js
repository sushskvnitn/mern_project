const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  work: { type: String, required: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
  //we should store the token in the database and as it generate new token when user
  // login so we will get many new tokens so to store them we are using array of tokens 
  tokens:[{
       token :{ type: String, required: true}
  }]
});




//here we are hashing the password 
//pre method for before saving the data do hash ,we also have post method that can be performed after save
userSchema.pre('save',async function(next){
  if(this.isModified('password')){
    this.password =await bcrypt.hash(this.password,12);
    this.cpassword =await bcrypt.hash(this.cpassword,12);
  }
  next();//as a midleware function
});
//as userSchemais instance we can create method and add the function in that method
userSchema.methods.generateAuthToken=async function(){
  try {
    //payload shoud be unique so we are using id from the database for the user
    let tokengenerated  = jwt.sign({_id:this._id},process.env.SECRET_KEY)
    //this.tokens refers to token in user schema 
      this.tokens = this.tokens.concat({token:tokengenerated});
     await this.save();
     //return tokengenerated as we are using it in other method for authentication 
     return tokengenerated;
  } catch (error) {
    console.log(error);
  }
}

const User = mongoose.model("USER",userSchema);

module.exports = User;