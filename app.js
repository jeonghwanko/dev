var express = require('express');
var cors = require('cors');
var app = express();
var passport = require('passport')
var session = require('express-session')

// 템플릿 엔진 EJS 설정
app.set('views', './views');
app.set('view engine', 'ejs');

// session setting
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: "secret code",
  cookie: {
    httpOnly: true,
    secure: false //개발 버전
  }
}));


// Passport setting
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes/index'));
app.use('/public', express.static('public'));
app.use('/auth',require('./routes/auth'));
/*
app.use(
  cors({
    origin: "http://localhost:3000", // server의 url이 아닌, 요청하는 client의 url
    credentials: true
  })
);
*/

// 서버 포트 설정
var port = 3000;
app.listen(port, function(){
  console.log('Server running at http://localhost:3000');
});
