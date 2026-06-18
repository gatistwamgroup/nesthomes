import mongoose from "mongoose";

const gallerySchema =
new mongoose.Schema({

 title:{
  type:String,
  default:""
 },

 category:{
  type:String,
  enum: ["Bedrooms", "Living Areas", "Community Spaces", "Outdoor Areas"],
  required:true
 },

 imageUrl:{
  type:String,
  required:true
 },

 publicId:{
  type:String,
  required:true
 }

},
{
 timestamps:true
});

gallerySchema.index({ category: 1, createdAt: -1 });

export default mongoose.model(
 "Gallery",
 gallerySchema
);