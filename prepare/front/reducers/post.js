// dummyPost
const dummyPost = (data) => [
  {
    id: data.id,
    title: data.title,
    kategory: data.kategory,
    content: data.content,
    count: 1,
    User: {
      id: 1,
      nickname: '혁이',
    },
    Images: [],
    Comments: [],
  },
];

export const initialState = {
  mainPosts: [], // 메인 게시글들
  imagePaths: [], // 이미지 url
  hasMorePosts: true, // 가져오려는 시도
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
};

// action을 정의
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // LOAD_POSTS
    case LOAD_POSTS_REQUEST:
      return {
        ...state,
        loadPostsLoading: true,
        loadPostsDone: false,
        loadPostsError: null,
      };
    case LOAD_POSTS_SUCCESS:
      console.log('reducer mainPost: ', state.mainPosts);
      return {
        ...state,
        loadPostsLoading: false,
        loadPostsDone: true,
        mainPosts: [...state.mainPosts, action.data],
        hasMorePosts: state.mainPosts.length < 50 ? true : false,
      };
    case LOAD_POSTS_FAILURE:
      return {
        ...state,
        loadPostsLoading: false,
        loadPostsError: action.error,
      };
    // ADD_POST
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      console.log('test: ', state.mainPosts);
      return {
        ...state,
        addPostLoading: false,
        addPostDone: true,
        mainPosts: dummyPost(action.data).concat(state.mainPosts),
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
