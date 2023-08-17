import React from "react";

const BlogItem = (props) => {
  return (
    <div className="blog-item">
      <figure>
        <img src={props.imgSrc} alt={props.title} />
        <span className="badge badge-date">{props.badge}</span>
      </figure>
      <div className="blog-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default BlogItem;
