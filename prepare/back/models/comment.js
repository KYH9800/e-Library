module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4', // mb4: 이모티콘 사용 가능
      collate: 'utf8mb4_general_ci', // 한글 && 이모티콘 저장
    }
  );
  Comment.associate = (db) => {
    // 댓글들은 ~에 속해있다
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
};
