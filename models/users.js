const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date:{ type: String, required: true },
  imageUser: { type: String },
  role:{type:Number,default:0},
  booklibrary:{
    type:Array
  }
  // ,
  // dateregister: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model("user", userSchema);