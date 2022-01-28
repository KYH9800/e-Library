const router = require('express').Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const { Post, Image, User, Comment } = require('../models');
const { isLoggedIn } = require('./middleware');

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

// POST /post
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    console.log('서버로 넘어오는 data: ', req.body);
    const post = await Post.create({
      title: req.body.title,
      category: req.body.category,
      content: req.body.content,
      UserId: req.user.id,
    });
    const fullPost = await Post.findOne({
      where: { id: post.id },
    });
    res.status(201).json(fullPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, 'uploads/');
    },
    // 이미지.png
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname); // 확장자 추출(.png)
      const basename = path.basename(file.originalname, ext); // 이미지
      done(null, basename + new Data().getTime() + ext); // 이미지20210124.png
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 파일크기: 20MB
}); // 지금은 하드디스크에 저장하지만 AWS 배포 시 storage 옵션만 S3 서비스로 갈아끼울 예정

// POST /post/images
router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => {
  console.log(req.files); // 업로드가 어떻게 됬는지 정보들이 담겨있음
  res.json(req.files.map((v) => v.filename)); // 어디로 업로드 됬는지에 대한 파일명들을 프론트로 전송
}); // 먼저 파일명만 return 해준다. -> v.filename, 추후 배포 시 이미지는 지우지 않는다.(자산이다)

// GET /post/1
router.get('/:postId', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(404).send('존재하지 않는 게시글 입니다.');
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: User,
          attributes: ['id', 'nickname'],
        },
      ],
    });
    res.status(200).json(fullPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// DELETE /post/1
router.delete('/:postId', isLoggedIn, async (req, res, next) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.postId,
        UserId: req.user.id,
      },
    });
    res.status(200).json(parseInt(req.params.postId, 10));
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
