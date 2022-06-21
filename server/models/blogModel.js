const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique:true,
  },
  description: {
    type: String,
    required: true,
    unique:true,
  },
  content: {
    type: String,
    required: true,
  },
  image:{
    type:String,
    required:false,

  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports=mongoose.model("Blog",blogSchema)