import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ id, title, body }) {
  return (
    <Link to={`/blogdetail/${id}`} className="blogCard">
      <div>
        <h3>{title}</h3>
        <p>{body.slice(0, 100)}...</p>
      </div>
    </Link>
  );
}

export default BlogCard;
