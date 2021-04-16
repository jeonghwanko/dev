var express = require('express');
var app = express();
var passport = require('passport')
var session = require('express-session')

// 템플릿 엔진 EJS 설정
app.set('views', './views');
app.set('view engine', 'ejs');

// Passport setting
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes/index'));
app.use('/public', express.static('public'));
app.use('/auth',require('./routes/auth'));

// 서버 포트 설정
var port = 3000;
app.listen(port, function(){
  console.log('Server running at http://localhost:3000');
});
