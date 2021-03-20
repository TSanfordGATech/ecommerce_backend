const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll ({
  // be sure to include its associated Products
  // To do this, you have to bring in the attributes and what you want to include from each. 
  // define attributes first
  attributes: ["id","category_name"],
  include: [
    {
      Model: Product,
      attributes: ["id","product_name","price","stock","category_id"],
    },
  ],
  })
  // add in the error logging if not located
  .then ((dbCategoryData) => res.json(dbCategoryData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
