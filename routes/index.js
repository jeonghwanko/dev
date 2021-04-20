var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {
      user: req.user,
      message: 'Hello there!'
    });
});

module.exports = router;
