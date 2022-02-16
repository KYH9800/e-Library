const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

const { isLoggedIn, isNotLoggedIn } = require('./middleware');

const { User, Post, Comment, Image } = require('../models');

// GET /user
router.get('/', async (req, res, next) => {
  // console.log('req.headers: ', req.headers);
  // console.log('req.user: ', req.user);
  try {
    if (req.user) {
      const user = await User.findOne({
        where: {
          id: req.user.id,
        },
      });
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'], // 원하는 정보만 가져오거나 가져오지 않겠다 / 현재: pw 빼고 다 가져오겠다
        },
        include: [
          {
            model: Post,
            attributes: ['id'],
          },
        ], // 가져올 정보중 뺄 것들
      });
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// GET /user/1/posts
router.get('/:userId/posts', async (req, res, next) => {
  try {
    const where = { UserId: req.params.userId };
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['id', 'nickname'],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['id', 'nickname'],
              order: [['createdAt', 'DESC']],
            },
          ],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POST /user/login, 로그인
router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, clientError) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (clientError) {
      return res.status(401).send(clientError.reason); // 401: 허가되지 않은
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      // 로그인 시 가져올 정보들을 선별하자
      const fullUserInfoWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ['password'], // attributes -> exclude: pw 빼고 다 가져오겠다
        },
        include: [
          {
            model: Post, // hasMany라서 model: Post가 복수형이 되어 me.Posts가 된다
            attributes: ['id'], // id만 가져오겠다
          },
        ],
      });
      return res.status(200).json(fullUserInfoWithoutPassword);
    });
  })(req, res, next);
});

// POST /user/logout
router.post('/logout', isLoggedIn, (req, res) => {
  // console.log('req.headers.cookie: ', req.headers.cookie);
  req.logout();
  req.session.destroy();
  res.send('logout ok');
});

// POST /user/, 회원가입
router.post('/', isNotLoggedIn, async (req, res, next) => {
  try {
    // 중복확인
    const alreadyUserId = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (alreadyUserId) {
      return res.status(403).send('이미 사용중인 계정입니다.');
    }
    // User table에 가입 정보 생성
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword, // 비밀번호를 그대로 받아오면 보안에 위협, 라이브러리를 통한 보안 장치 장착
    });
    res.status(201).send('signup OK');
  } catch (err) {
    console.error(err);
    next(err); // status 500, next를 통해 error를 보낼 수 있다
  }
});

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        nickname: req.body.nickname,
      },
      {
        where: {
          id: req.user.id,
        },
      }
    );
    res.status(200).json({ nickname: req.body.nickname });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
