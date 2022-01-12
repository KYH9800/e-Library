import shortId from 'shortid';

// dummyPosts (with shortId, faker)
const kategories = ['자유게시글', '모임공지', '독후감', '건의게시글'];
export const generateDuumyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      content: '게시글 01',
      title: '제목입니다.',
      count: 0,
      kategory: kategories[Math.floor(Math.random() * 4)],
      User: {
        id: shortId.generate(),
        nickname: shortId.generate(),
      },
      images: [
        {
          src: '링크',
        },
      ],
      Comments: [
        {
          User: {
            id: shortId.generate(),
            nickname: '지수',
          },
          content: '게시글 02',
        },
      ],
    }));
