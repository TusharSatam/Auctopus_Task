import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/Post/PostAction";
import "./Post.css";
const Post = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error, img,postNum } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);



  if (posts.length==0&& error) {
    return <div className="post_ERROR">Not Found</div>;
  }

  return (
    <div className="post_Container">
          <img src={img[postNum]?.url} />
          <h4>{posts[postNum]?.title}</h4>
          <p>{posts[postNum]?.body}</p>
    </div>
  );
};

export default Post;
