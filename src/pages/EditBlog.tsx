import React, {useState, useEffect} from "react";

import BlogForm from "../components/BlogForm/BlogForm";
import { getBlogDetail } from "../services/blogAPI";

const EditBlog = ({ match }: any) => {
  let blogId = match ? match.params.blogId : "";

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
    <BlogForm
      formType="update"
      blogId={blogId}
      title={blogData.blogTitle}
      markdown={blogData.blogMarkdown}
    />
  );
};

export default EditBlog;
