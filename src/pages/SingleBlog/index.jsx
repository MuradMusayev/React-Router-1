import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NotFound from "../NotFound";

function SingleBlog() {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [errorInfo, setErrorInfo] = useState("");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        setErrorInfo(err.message);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <>
          <div className="spinner">Loading...</div>
        </>
      ) : Object.keys(post).length ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          {post.tags?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </>
      ) : (
        <>
          <p>{errorInfo}</p>
        </>
      )}
    </div>
  );
}

export default SingleBlog;
