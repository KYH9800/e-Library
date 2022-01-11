// import faker from 'faker';
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
      kategory: kategories[Math.floor(Math.random())],
      User: {
        id: shortId.generate(),
        nickname: '김우주',
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

export const initialState = {
  mainPosts: [], // 메인 게시글들
  imagePaths: [], // 이미지 url
  hasMorePosts: true, // 가져오려는 시도
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
};

// action을 정의
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
// action 객체

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS_REQUEST:
      return {
        ...state,
        loadPostsLoading: true,
        loadPostsDone: false,
        loadPostsError: null,
      };
    case LOAD_POSTS_SUCCESS:
      console.log('action.data: ', action.data);
      const data = action.data;
      console.log('data: ', data);
      const arr = [];
      arr.push(data);
      console.log('arr: ', arr);
      //! 메인 포스트만 불러오면 에러남 (원인 파악 못하는중...)
      // console.log('mainPosts: ', mainPosts);
      return {
        ...state,
        loadPostsLoading: false,
        loadPostsDone: true,
        // mainPosts,
        // hasMorePosts: state.mainPosts.length > 50 ? false : true,
      };
    case LOAD_POSTS_FAILURE:
      return {
        ...state,
        loadPostsLoading: false,
        loadPostsError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
