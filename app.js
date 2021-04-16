var express = require('express');
// express 를 실행해서 Application 을 생성
var app = express();


// 템플릿 엔진 EJS 설정
app.set('views', './views');
app.set('view engine', 'ejs');


// 정적 파일을 제공할 폴더를 지정
app.use('/public', express.static('public'));

// 라우팅 설정
app.use('/', require('./routes/index.js'));

// 서버 포트 설정
app.listen(3000);

// 애플리케이션 실행 로그
console.log('Server running at http://localhost:3000');
