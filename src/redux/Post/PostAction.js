import { FETCH_POSTS, FETCH_POSTS_FAILURE } from "./PostType";

import axios from "axios";

const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const imageResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    dispatch({
      type: FETCH_POSTS,
      payload: response.data,
      img: imageResponse.data.slice(0, response.data.length),
    });
  } catch (error) {
    dispatch({
      type: FETCH_POSTS_FAILURE,
      error: error.message,
    });
  }
};

const setPostNum = (num,posts,dispatch) => {
    dispatch({
      type: "SET_POSTNUM",
      payload: posts,
num
    });
};

const filterBySearchValue = async (value, posts, dispatch) => {
  if (value == "") {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: "FILTER_BY_SEARCHVALUE",
      payload: response.data,
    });
  } else {
    let filterPosts = posts?.filter((e) => {
      if (e?.title.includes(value) | e?.body.includes(value)) {
        return e;
      }
    });
    if (!filterPosts?.length) {
      dispatch({
        type: "FILTER_BY_SEARCHVALUE",
        payload: filterPosts,
        error: "Not Found",
      });
    } else {
      dispatch({
        type: "FILTER_BY_SEARCHVALUE",
        payload: filterPosts,
        error: null,
      });
    }
  }
};

const sortAZ = (posts,dispatch) => {
  let sortedValues = posts.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0));
    dispatch({
      type: "SORT_AZ",
      payload: sortedValues,
    });
};

const addNewPost = async (title, body,posts,dispatch) => {
  const imageResponse = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );

  let obj={
 id:posts.length+1,
  title,
  body,
  }
  let newPosts=[obj,...posts]
dispatch({
  type: "ADD_NEWPOST",
  payload: newPosts,
  img:imageResponse?.data.slice(0, newPosts.length),
});
}

const formOpenClose =  (booleanValue,dispatch) => {
  dispatch({
    type: "FORM_OPEN_CLOSE",
    booleanValue
  });
}

const deletePost = (postId, dispatch) => {
  dispatch({
    type: "DELETE_POST",
    payload: postId,
  });
};
export { fetchPosts, setPostNum, filterBySearchValue, sortAZ,addNewPost,formOpenClose,deletePost };
