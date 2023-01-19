import "./post.css";
import { useSelector, useDispatch } from "react-redux";
import { getSinglePostData } from "../../features/postSlice";
import { useState } from "react";

function Post({ post, createdPost }) {
  const { singlePost } = useSelector((store) => {
    return store.post;
  });
  const [createdPostData, setCreatedPostData] = useState([]);
  const dispatch = useDispatch();
  const { id, title, body: createdPostBody } = post;
  const { id: postId, body } = singlePost;

  const handleDetailClick = () => {
    dispatch(getSinglePostData(id));
    const filteredCreatedPost = createdPost?.filter(
      (idxPost) => idxPost.id === post.id
    );
    setCreatedPostData(filteredCreatedPost);
  };

  return (
    <div className="post-main-container">
      <p className="post-title">{title}</p>
      <p className="post-details">{id === postId && body}</p>
      <p className="post-details">
        {createdPostData.length > 0 && createdPostBody}
      </p>
      <div className="post-footer">
        {id !== postId && !createdPostData.length ? (
          <button
            className="show-detail-btn"
            onClick={() => handleDetailClick()}
          >
            Show detail
          </button>
        ) : null}
      </div>
    </div>
  );
}

export { Post };
