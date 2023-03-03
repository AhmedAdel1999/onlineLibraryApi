const router = require("express").Router();
const Category = require("../models/Category");
const BookList = require("../models/booksList")

router.post("/", async (req, res) => {
  try {
          // if user have role = 1 ---> admin
          // only admin can create , delete and update category
          const {name} = req.body;
          const category = await Category.findOne({name})
          if(category) return res.status(400).json({msg: "This category already exists."})

          const newCategory = new Category({name})

          await newCategory.save()
          res.json({msg: "Created a category"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
});

router.get("/", async (req, res) => {
    try {
          const categories = await Category.find()
          res.json(categories)
        } catch (err) {
          return res.status(500).json({msg: err.message})
        }
  });

  router.put("/:id", async (req, res) => {
    try {
            const {name} = req.body;
            await Category.findOneAndUpdate({_id: req.params.id}, {name})

            res.json({msg: "Updated a category"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
  });

  router.delete("/:id", async (req, res) => {
    try {
            const bookList = await BookList.findOne({category: req.params.id})
            if(bookList) return res.status(400).json({
                msg: "Please delete all products with a relationship."
            })

            await Category.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Category"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
  });

module.exports = router;
