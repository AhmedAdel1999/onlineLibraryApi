const express = require("express");
const router = express.Router();
const BookList = require("../models/booksList")
const User = require("../models/users");




//route localhost:5000/book/addToAcceuil
router.post("/add", (req, res) => {
    const { image, title, raiting, description, category, filename, size } = req.body;
    BookList.findOne({ title }).then(book => {
      if (book) {
        return res.json({ msg: "book already exist" });
      } else {
        const newbook = new BookList({ image, title, raiting, description, category, filename,size });
        newbook.save()
        .then(book => res.send(book))   //res.send(book))
        .catch(err => {
          res.send(err);
        });
    }})})


router.delete("/:id", async (req, res) => {
  try {
      try {
        await BookList.findByIdAndDelete(req.params.id);
        res.status(200).json("Book has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const book = await BookList.findById(req.params.id);
      try {
        await BookList.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json("book has been updated")
      } catch (err) {
        res.status(500).json(err);
      }
  } catch (err) {
    res.status(500).json(err);
  }
});
 //route localhost:5000/book/getAllFromAcceuil

 router.get("/",(req,res)=>{
    BookList.find().then(book=>
        res.send(book)).catch(err=>console.log(err))
    })
            
           //route localhost:5000get/:id getonlyoneFromAcceuil
    
    
           router.get("/:id",(req,res)=>{
            const id = req.params.id
            BookList.findOne({_id : id}, (err, book)=>{
              
                if (err) res.send("cannot find book")
                else res.send(book)
            })
        })
    
        module.exports = router;