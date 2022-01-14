import shortid from 'shortid';

const dummyPost = (data) => [
  {
    id: data.id,
    title: data.title,
    category: data.category,
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

// dummyPost
export const initialState = {
  mainPosts: [], // 메인 게시글들
  singlePost: null, // 게시글 하나만 불러올때
  imagePaths: [], // 이미지 url
  hasMorePosts: true, // 가져오려는 시도
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
};

// action을 정의
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // LOAD_POST
    case LOAD_POST_REQUEST:
      return {
        ...state,
        loadPostLoading: true,
        loadPostDone: false,
        loadPostError: null,
      };
    case LOAD_POST_SUCCESS:
      console.log('LOAD_POST_SUCCESS: ', action.data);
      return {
        ...state,
        loadPostLoading: false,
        loadPostDone: true,
        singlePost: action.data,
      };
    case LOAD_POST_FAILURE:
      return {
        ...state,
        loadPostLoading: false,
        loadPostError: action.error,
      };
    // LOAD_POSTS
    case LOAD_POSTS_REQUEST:
      return {
        ...state,
        loadPostsLoading: true,
        loadPostsDone: false,
        loadPostsError: null,
      };
    case LOAD_POSTS_SUCCESS:
      console.log('reducer mainPosts: ', state.mainPosts);
      return {
        ...state,
        loadPostsLoading: false,
        loadPostsDone: true,
        mainPosts: action.data !== undefined ? state.mainPosts.concat(action.data) : state.mainPosts,
        hasMorePosts: state.mainPosts.length < 20 ? true : false,
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
    case REMOVE_POST_REQUEST:
      return {
        ...state,
        removePostLoading: true,
        removePostDone: false,
        removePostError: null,
      };
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        removePostLoading: false,
        removePostDone: true,
        mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
      };
    case REMOVE_POST_FAILURE:
      return {
        ...state,
        removePostLoading: false,
        removePostError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
