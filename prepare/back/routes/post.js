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

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, 'uploads/');
    },
    // 이미지.png
    filename(req, file, cb) {
      const ext = path.extname(file.originalname); // 파일의 확장자
      console.log('file.originalname', file.originalname);
      // 파일명이 절대 겹치지 않도록 해줘야한다.
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext); // 파일이름 + 현재시간밀리초 + 파일확장자명
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 파일크기: 20MB
}); // 지금은 하드디스크에 저장하지만 AWS 배포 시 storage 옵션만 S3 서비스로 갈아끼울 예정

// POST /post
router.post('/', isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    console.log('서버로 넘어오는 data: ', req.body);
    const post = await Post.create({
      title: req.body.title,
      category: req.body.category,
      content: req.body.content,
      image: req.body.image,
      UserId: req.user.id,
    });
    if (req.body.image) {
      if (Array.isArray(req.body.image)) {
        // 이미지를 여러 개 올리면 image: [이미지.png, 지수.png]
        const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
        await post.addImages(images);
      } else {
        // 이미지를 하나만 올리면 image: 이미지.png
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// POST /post/images
router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => {
  console.log(req.files); // 업로드가 어떻게 됬는지 정보들이 담겨있음
  res.json(req.files.map((v) => v.filename)); // 어디로 업로드 됬는지에 대한 파일명들을 프론트로 전송
}); // 먼저 파일명만 return 해준다. -> v.filename, 추후 배포 시 이미지는 지우지 않는다.(자산이다)

// GET /post/1
router.get('/:postId', upload.none(), async (req, res, next) => {
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
          model: Image,
        },
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
