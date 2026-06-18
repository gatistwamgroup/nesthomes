import mongoose from "mongoose";

const adminSchema =
new mongoose.Schema({

 name:{
  type:String,
  required:true
 },

 email:{
  type:String,
  required:true,
  unique:true
 },

 phone:{
  type:String,
  default:""
 },

 password:{
  type:String,
  required:true
 },
profileImage: {
  type: String,
  default: ""
},

profileImageId: {
  type: String,
  default: ""
},

resetPasswordToken:String,
resetPasswordExpire:Date,
},
{
 timestamps:true
});

export default mongoose.model(
 "Admin",
 adminSchema
);