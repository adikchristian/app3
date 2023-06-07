var express = require('express');
var router = express.Router();
var CategoryController = require('../controllers/CategoryController');

/* GET users listing. */
router.get('/', CategoryController.getAllCategory);
router.get('/:id', CategoryController.getCategoryById);
router.post('/', CategoryController.createCategory);
router.put('/:id', CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;