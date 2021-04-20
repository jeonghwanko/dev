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
