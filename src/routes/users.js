var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');
const verifyToken = require('../middleware/verifyToken');

/* GET users listing. */
router.get('/', verifyToken, UserController.getAllUsers);
router.get('/:id', verifyToken, UserController.getuserById);
router.put('/:id', verifyToken, UserController.updateUser);
router.delete('/:id', verifyToken, UserController.deleteUser);
router.post('/', verifyToken, UserController.createuser);
router.post('/login', UserController.login);

module.exports = router;
