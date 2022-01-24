const router = require('express').Router();

const { Post, Image, User, Comment } = require('../models');

// POST /post
router.post('/', async (req, res, next) => {
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

router.get('/', (req, res) => {
  res.send('this is post router');
});

module.exports = router;
