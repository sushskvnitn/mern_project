const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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


const User = mongoose.model("USER",userSchema);

module.exports = User;