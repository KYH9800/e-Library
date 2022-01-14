export const dummyPost = {
  id: 1,
  title: 'redux thunk',
  category: '건의게시글',
  content:
    'dispatch를 한번에 묶어서 할 수 있게 해준다. redux-middleware: redux 기능을 향상 시켜주는 역할 Redux를 사용하면서 비동기적으로 작업을 처리하기 위해 thunk를 사용한다. redux-thunk도 좋지만 비동기처리에 있어 편리한 기능이 많은 redux-saga를 사용할 계획이기에  나는 이번 프로젝트에서는 일어나는 모든 액션들의 대해 살피고자 이 미들웨어를 추가했다. (추후 발생하는 버그나 에러를 잡기위함임)',
  count: 1,
  User: {
    id: 1,
    nickname: '지수',
  },
  Images: [
    {
      src: 'https://media.vlpt.us/images/pika/post/0395780b-633b-488b-ba05-395bf9776357/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.06.29.png',
    },
  ],
  Comments: [],
};
