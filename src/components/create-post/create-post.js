import "./create-post.css";
import { Post } from "../posts/post";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostsData } from "../../features/postSlice";

function CreatePost() {
  const { allPosts } = useSelector((store) => {
    return store.post;
  });
  const dispatch = useDispatch();
  // console.log("allPostsallPostsallPosts", allPosts);
  return (
    <div className="primary-container">
      <input type="text" placeholder="Title" className="title-input"></input>
      <textarea
        placeholder="Details"
        className="detail-input text-area"
      ></textarea>
      <button className="post-btn">Add new post</button>
      <p className="sub-text">Or</p>
      <button className="fetch-btn" onClick={() => dispatch(getAllPostsData())}>
        Show existing posts
      </button>
      {allPosts?.length > 0 ? (
        <>
          {allPosts?.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </>
      ) : (
        <p className="no-post-text">No post available!!</p>
      )}
    </div>
  );
}

export { CreatePost };
