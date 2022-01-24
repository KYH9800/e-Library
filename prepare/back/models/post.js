module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      title: {
        type: DataTypes.TEXT, // 문자열 30글자 이내, STRING 외: TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
        allowNull: false, // 필수
      },
      category: {
        type: DataTypes.TEXT,
        allowNull: false, // 필수
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false, // 필수
      },
    },
    {
      charset: 'utf8mb4', // mb4: 이모티콘 사용 가능
      collate: 'utf8mb4_general_ci', // 한글 && 이모티콘 저장
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
  };
  return Post;
};
