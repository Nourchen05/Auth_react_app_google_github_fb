import "./Card.css";
import React from "react";

const Card = ({ post }) => {
  return (
    <div className="card">
      <span>{post.title}</span>
      <img src={post.img} alt="iamge" className="img" />
      <p className="desc">{post.desc}</p>
      <button className="cardButton">Read more</button>
    </div>
  );
};

export default Card;
