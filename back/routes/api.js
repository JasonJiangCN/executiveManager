var express = require('express');
var router = express.Router();
var userModel = require('../models/user.js');

router.post('/user', userModel.login)

router.get('/kaptcha', function(req, res) {
    res.send({info: 'success'});
})
module.exports = router;
