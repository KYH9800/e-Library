const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

//
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  }); // Strategy 성공 시 호출됨

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user); // req.user
    } catch (err) {
      console.error(err);
      done(err);
    }
  });

  local();
};
