const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bookListSchema = new schema({
  image: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  isCheck:{type:Boolean,default:false},
  size:{type:Number,default:null},
  description: { type: String, required: true },
  category:{ type: String, required: true },
  filename:{ type: String, required: true }

});

module.exports = BookList = mongoose.model("bookList", bookListSchema);