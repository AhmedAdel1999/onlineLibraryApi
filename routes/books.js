// const express = require("express");
// const router = express.Router();
// const Book = require("../models/books")


// //route localhost:5000/book/addToFavoris
// router.post("/add", (req, res) => {
//     const { image, title, raiting, description, categorie } = req.body;
//     Book.findOne({ title }).then(book => {
//       if (book) {
//         return res.json({ msg: "book already exist in your favoris" });
//       } else {
//         const newbook = new Book({ image, title, raiting, description, categorie });
//         newbook.save()
//         .then(book => res.send(book))
//         .catch(err => {
//           res.send(err);
//         });
//     }})})

//     //route localhost:5000/book/deleteFromFavoris

//     router.delete("/delete/:id",(req,res)=>{
//     const id = req.params.id
//     Book.findOneAndDelete({_id : id}, (err, data)=>{
      
//         if (err) res.send("cannot delete book")
//         else res.send('book was deleted')
//     })
// })

//   //route localhost:5000/book/getFromFavoris

//   router.get("/",(req,res)=>{
// Book.find().then(book=>
//     res.send(book).catch(err=>console.log(err))
//     )
// })
        
//        //route localhost:5000/book/get/:id getonlyoneFromFavoris


//        router.get("/:id",(req,res)=>{
//         const id = req.params.id
//         Book.findOne({_id : id}, (err, book)=>{
          
//             if (err) res.send("cannot find book")
//             else res.send(book)
//         })
//     })

//     module.exports = router;