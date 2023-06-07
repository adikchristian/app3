var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getuserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.post('/', UserController.createuser);

module.exports = router;
