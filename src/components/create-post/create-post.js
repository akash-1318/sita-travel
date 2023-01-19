import "./create-post.css";
import { Post } from "../posts/post";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostsData } from "../../features/postSlice";
import { useState } from "react";
import { createPostHandler } from "../../features/createPostSlice";

function CreatePost() {
  const { allPosts } = useSelector((store) => {
    return store.post;
  });
  const { createdPost } = useSelector((store) => {
    return store.createPost;
  });
  const dispatch = useDispatch();

  const [initialCreatedPost, setInitialCreatedPost] = useState({
    body: "",
    title: "",
  });

  const handleAddPost = () => {
    dispatch(createPostHandler(initialCreatedPost));
  };

  return (
    <div className="primary-container">
      <input
        type="text"
        placeholder="Title"
        className="title-input"
        onChange={(e) =>
          setInitialCreatedPost({
            ...initialCreatedPost,
            title: e.target.value,
          })
        }
      ></input>
      <textarea
        placeholder="Details"
        className="detail-input text-area"
        onChange={(e) =>
          setInitialCreatedPost({
            ...initialCreatedPost,
            body: e.target.value,
          })
        }
      ></textarea>
      <button className="post-btn" onClick={() => handleAddPost()}>
        Add new post
      </button>
      <p className="sub-text">Or</p>
      <button className="fetch-btn" onClick={() => dispatch(getAllPostsData())}>
        Show existing posts
      </button>
      {[...(createdPost || []), ...(allPosts || [])]?.length > 0 ? (
        <>
          {[...createdPost, ...allPosts]?.map((post) => {
            return (
              <Post key={post?.id} post={post} createdPost={createdPost} />
            );
          })}
        </>
      ) : (
        <p className="no-post-text">No post available!!</p>
      )}
    </div>
  );
}

export { CreatePost };
