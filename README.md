/*
1) git branch
  - main = 개발 소스
  - service_kr = 서비스 소스 / tag달아서 버전 관리


2) 서버환경
  - 테스트환경 = ec2 + rds = main
  - 서비스환경

  TODO
    : 테섭/서비스섭 공통 환경변수 = .bigwhale_credentials
      - google/facebook api keys
    : endpoint (서버환경변수)
      - database host
3) 소스 layout
  + bigwhale
    + web
      - public  = static 이미지 등
      - routes = url 소스 코드
      - views = url html 코드
      - config = 인증
      - api = webhook 코드
    + database
      - sql
      - script
    + bin = crontab 스케쥴
*/

npm init
npm install express --save
npm install ejs --save
npm install -g bower
bower init

npm install -s passport
npm install -s passport-local
npm install passport-google-oauth20

.bowerrc
{
  "directory": "public/third_party"
}

bower install jquery#2 --save
bower install bootstrap --save
