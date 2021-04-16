var express = require('express');
var router = express.Router();
var passport = require('../config/passport.js')

// 디폴트 라우팅, 뒤에 나오는 파라메터 title, message 는 EJS 엔진으로 넘어감.
router.get('/', function (request, response) {
    response.render('index', { title: 'More Power to Big Whale!', message: 'Hello there!' });
});

module.exports = router;
