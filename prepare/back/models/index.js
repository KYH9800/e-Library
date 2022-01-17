const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};
// sequelize는 내부적으로 mysql2라는 드라이버를 사용중 (node랑 mysql을 연결해주는 드라이버)
const sequelize = new Sequelize(config.database, config.username, config.password, config); // node와 mysql 연결

// 만든 table(model)들을 db에 삽입
db.Comment = require('./comment')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);

// 반복문으로 돌면서 associate에서 관계를 연결해준다
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// db안에 sequelize를 넣어둠
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// 댓글 정보 (content)
// user 정보 (email, nickname, password)
// 게시글(post)정보 (title, category, content)
// 이미지 정보 (src)
