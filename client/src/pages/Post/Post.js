import React from "react";
import "./Post.css";
import { posts } from "../../data";
import { useLocation } from "react-router";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const post = posts.find((p) => p.id.toString() === path);
  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDEsc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc} </p>
    </div>
  );
};

export default Post;
