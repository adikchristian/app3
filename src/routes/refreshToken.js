var express = require('express');
var router = express.Router();
var RefreshTokenController = require('../controllers/RefreshTokenController');

router.post('/', RefreshTokenController.getNewRefreshToken);

module.exports = router;
