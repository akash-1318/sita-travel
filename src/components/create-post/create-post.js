import "./create-post.css";

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
    </div>
  );
}

export { CreatePost };
