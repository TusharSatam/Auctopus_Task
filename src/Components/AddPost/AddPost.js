import React, { useEffect, useState } from "react";
import "./AddPost.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost, fetchPosts, formOpenClose } from "../../redux/Post/PostAction";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const { posts,isFormOpen } = useSelector((state) => state?.post);
  return (
    <> 
    {isFormOpen && (
      <div className="addPost_Container flexrowCenter">
        <div className="bgLayer"></div>
        <div className="addPost_InnerContainer flexcolCenter">
          <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} maxLength={45} />
          <textarea placeholder="Body" onChange={(e) => setBody(e.target.value)} rows={5} maxLength={150} />
          <button
            type="submit"
            disabled={!title.length && !body.length}
            className={`AddButton ${(!title.length && !body.length) && 'disabled'}`}
            onClick={() => addNewPost(title, body, posts, dispatch)}
          >
            Add Post
          </button>
          <button className="cancelButton" onClick={()=>formOpenClose(false,dispatch)}>Cancel</button>
        </div>
      </div>
    )}
    </>
    
  );
};

export default AddPost;
