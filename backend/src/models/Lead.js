import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
{
  fullName:{
    type:String,
    required:true
  },

  phone:{
    type:String,
    required:true
  },

  email:{
    type:String,
    default:""
  },

  message:{
    type:String,
    default:""
  },

  status:{
    type:String,
    enum: ["New", "Contacted", "Follow Up", "Closed"],
    default:"New"
  },

  source:{
    type:String,
    default:"Website Form"
  },

  notes:{
    type:String,
    default:""
  },

  followUpDate:{
    type:Date
  },

  lastContacted:{
    type:Date
  },

  activity:[
    {
      action:String,

      date:{
        type:Date,
        default:Date.now
      }
    }
  ]

 },
 {
  timestamps:true
 }
);

leadSchema.index({ status: 1, createdAt: -1 });

export default mongoose.model(
  "Lead",
  leadSchema
);