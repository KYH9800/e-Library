const router = require('express').Router();
const { User } = require('../models');

// POST /user/
router.post('/', async (req, res) => {
  try {
    // 중복확인
    // todo
    // User table에 가입 정보 생성
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: req.body.password, // 비밀번호를 그대로 받아오면 보안에 위협, 라이브러리를 통한 보안 장치 장착
    });
    res.status(201).send('signup OK');
  } catch (err) {
    console.error(err);
    next(err); // status 500, next를 통해 error를 보낼 수 있다
  }
});

module.exports = router;
