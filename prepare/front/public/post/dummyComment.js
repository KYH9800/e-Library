import shortId from 'shortid';

export const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '혁이',
  },
});
