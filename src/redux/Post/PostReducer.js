import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
} from "./PostType";

// reducer.js
const initialState = {
  posts: [],
  img: [],
  postNum: 0,
  isLoading: false,
  error: null,
  isFormOpen: false,
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        img: action.img,
        isLoading: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case "SORT_AZ":
      return {
        ...state,
        posts: action.payload,
      };

    case "ADD_NEWPOST":
      return {
        ...state,
        posts: action.payload,
        img: action.img,
      };
    case "FILTER_BY_SEARCHVALUE":
      return {
        ...state,
        posts: action.payload,
        error: action.error,
      };
    case "SET_POSTNUM":
      return {
        ...state,
        posts: action.payload,
        postNum: action.num,
      };
      case "DELETE_POST":
        const postId = action.payload;
        let temp=state.posts.filter((post) =>post.id!=postId)
       console.log(temp);
        return {
          ...state,
          posts:temp,
        };
    case "FORM_OPEN_CLOSE":
      return {
        ...state,
        isFormOpen: action.booleanValue,
      };

    default:
      return state;
  }
};

export default PostReducer;
