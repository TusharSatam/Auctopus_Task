import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPosts, formOpenClose, setPostNum, sortAZ } from "../../redux/Post/PostAction";
import { AiOutlinePlus,AiOutlineDelete } from "react-icons/ai";

import "./List.css";
const List = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error, img } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="list_Container flexcolCenter">
      <div className="list_Container_SortOption flexrowSB">
        <button className="sortAZ" clasrole="button" onClick={()=>sortAZ(posts,dispatch)}>
          Sort (A-Z)
        </button>
        <button className="addPost" onClick={()=>formOpenClose(true,dispatch)}>
          <AiOutlinePlus  />
        </button>
      </div>
      {posts == "Zero Result" ?<h4>Not Found</h4>:
      <div className="list_Container_AllPosts">
        {
          posts?.map((post, i) => (
            <div
              key={post.id}
              className="Post"
              onClick={() => setPostNum(i,posts,dispatch)}
            >
              <img src={img[i]?.url} />
              <a>{post.title}</a>
              {/* <button className="post_Delete" onClick={()=>deletePost(post.id,dispatch)}><AiOutlineDelete/></button> */}
            </div>
          ))}
      </div>
      }
      
       
    </div>
  );
};

export default List;
