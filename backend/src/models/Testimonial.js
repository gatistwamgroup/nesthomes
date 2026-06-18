import mongoose from "mongoose";

const testimonialSchema =
new mongoose.Schema({

 name:{
  type:String,
  required:true
 },

 review:{
  type:String,
  required:true
 },

 rating:{
  type:Number,
  default:5
 },

 status:{
  type:String,
  enum: ["Published", "Hidden"],
  default:"Published"
 },

 imageUrl:{
  type:String,
  default:""
 },

 publicId:{
  type:String,
  default:""
 }

},
{
 timestamps:true
});

testimonialSchema.index({ status: 1, createdAt: -1 });

export default mongoose.model(
 "Testimonial",
 testimonialSchema
);