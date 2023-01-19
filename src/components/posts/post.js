import "./post.css";
import { useSelector, useDispatch } from "react-redux";
import { getSinglePostData } from "../../features/postSlice";

function Post({ post }) {
  const { singlePost } = useSelector((store) => {
    return store.post;
  });
  const dispatch = useDispatch();
  const { id, title } = post;
  const { id: postId, body } = singlePost;
  return (
    <div className="post-main-container">
      <p className="post-title">
        {id} {title}
      </p>
      <p className="post-details">{id === postId && body}</p>
      <div className="post-footer">
        {id !== postId && (
          <button
            className="show-detail-btn"
            onClick={() => dispatch(getSinglePostData(id))}
          >
            Show detail
          </button>
        )}
      </div>
    </div>
  );
}

export { Post };
