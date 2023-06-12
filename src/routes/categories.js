var express = require('express');
var router = express.Router();
var CategoryController = require('../controllers/CategoryController');
var { Product } = require('../models');
// var Category= require('../models/Category');

/* GET users listing. */
router.get('/', CategoryController.getAllCategory);
router.get('/:id', CategoryController.getCategoryById);
router.post('/', CategoryController.createCategory);
router.put('/:id', CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);
// router.get('/',  async function(req, res){
//     const d = await Product.findAll({
//         include: 'category',
//     });
//     res.json(d);
// });

module.exports = router;