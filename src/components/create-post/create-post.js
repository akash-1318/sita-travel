import "./create-post.css";
import { Post } from "../posts/post";

function CreatePost() {
  return (
    <div className="primary-container">
      <input type="text" placeholder="Title" className="title-input"></input>
      <textarea
        placeholder="Details"
        className="detail-input text-area"
      ></textarea>
      <button className="post-btn">Add new post</button>
      <p className="sub-text">Or</p>
      <button className="fetch-btn">Show existing posts</button>
      {/* <Post /> */}
      <p className="no-post-text">No post available!!</p>
    </div>
  );
}

export { CreatePost };
