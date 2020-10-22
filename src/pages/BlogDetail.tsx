import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { getBlogDetail } from "../services/blogAPI";

export const BlogDetail = ({ match }: any) => {
  
  let blogId = "";
  if (match) blogId = match.params.blogId;

  useEffect(() => {
    getBlog();
  }, []);

  const [blogData, setBlogData] = useState({
    blogTitle: "",
    blogMarkdown: "",
  });

  const getBlog = async () => {
    const blogDataResponse = await getBlogDetail(blogId);
    setBlogData({
      blogTitle: blogDataResponse.title,
      blogMarkdown: blogDataResponse.blog_markdown,
    });
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{blogData.blogTitle}</h1>
      </div>
      <ReactMarkdown>{blogData.blogMarkdown}</ReactMarkdown>
    </div>
  );
};


export default BlogDetail;
