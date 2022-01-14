const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello express in e도서관');
});

app.listen(3065, () => {
  console.log('서버를 실행중입니다.');
});

/** 순서
* * postman 사용: get(가져오다), post(생성), put(전체수정), patch(부분수정), delete
* express router 분리하기

* * workbench로 시각화된 database 확인하기
* MySQL과 squelize 연결하기 (squelize는 MySQL을 조작할 수 있게 도와주는 역할을 한다)
* sequelize 모델 만들기
* sequelize 관계 설정하기
* sequelize sync + nodemon

* 회원가입 구현하기
* CORS 문제 해결하기
* passport로 로그인하기 (passport kakao, google)
* cookie && session과 전체 로그인 흐름 파악하기
* 로그인 문제 해결하기: attributes, include && exclude
* middleware로 router 검사하기

* 게시글, 댓글 작성하기
* credentials로 쿠키 공유하기
* 내 로그인 정보 매번 불러오기
* 게시글 불러오기
* 게시글 제거, 닉네임 변경

* 이미지 업로드를 위한 multer
* express.static middleware: 정적파일을 제공하기 위함
* queryString과 lastId 방식
*/
