const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello express in e도서관');
});

app.listen(3065, () => {
  console.log('서버를 실행중입니다.');
});
