import React, { useState } from "react";
import Post from "./Post/Post";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "micky",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      user: "micky1",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
