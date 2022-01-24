const router = require('express').Router();

router.post('/', (req, res, next) => {
  // todo
});

router.get('/', (req, res) => {
  res.send('this is post router');
});

module.exports = router;
