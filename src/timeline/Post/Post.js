import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

function Post({ user, postImage }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user}
        </div>
      </div>
      <div className="post__image">
        <img src={postImage} alt="Post Image" />
      </div>
    </div>
  );
}

export default Post;
