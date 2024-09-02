import axios from "axios";
import BlogCard from "../../components/BlogCard";
import React, { useEffect, useState } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => setTimeout(() => {
        setPosts(res.data.posts)
        setIsLoading(false)
      }, 1000));
  }, []);

  return (
    <div className="posts">
      <h2>Blog Page</h2>
      {isLoading ? (
        <div className="spinner">Loading...</div>
      ) : (
        posts.map((item) => {
          return <BlogCard {...item}  key={item.id}/>;
        })
      )}
    </div>
  );
}

export default Blog;
