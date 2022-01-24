const router = require('express').Router();

const { Post, Image, User, Comment } = require('../models');
const { isLoggedIn } = require('./middleware');

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

module.exports = router;
