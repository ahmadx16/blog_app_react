import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { addNewBlog } from "../../services/blogAPI";
import { updateBlog } from "../../services/blogAPI";


interface BlogFormType {
  blogId?:string,
  title?: string;
  markdown?: string;
  formType: "add" | "update";
}

const BlogForm = ({blogId, title, markdown, formType }: BlogFormType) => {

  useEffect(() => {
    setBlogData({
      blogTitle: title ? title : "",
      blogMarkdown: markdown ? markdown : ""
    })
  }, [title,markdown])

  let history = useHistory();
  let updateBlogId = blogId?blogId:""

  const [blogData, setBlogData] = useState({
    blogTitle: title ? title : "",
    blogMarkdown: markdown ? markdown : "",
  });

  const onChangeBlogTitle = (e: any) => {
    setBlogData({...blogData, blogTitle: e.target.value});
  };
  const onChangeMarkdown = (e: any) => {
    setBlogData({...blogData, blogMarkdown: e.target.value});
  };
  const onSubmitBlogForm = (e: any) => {
    e.preventDefault();
    if (formType === "add") {
      addNewBlog(blogData.blogTitle, blogData.blogMarkdown);
    } else {
      updateBlog(updateBlogId, blogData.blogTitle, blogData.blogMarkdown)
    }
    history.push("/");
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitBlogForm}>
        <div className="form-group">
          <label>Blog Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Blog Title"
            value={blogData.blogTitle}
            onChange={onChangeBlogTitle}
          />
          <small className="form-text text-muted">
            Enter at most 100 characters for Title of your Blog
          </small>
        </div>
        <div className="form-group">
          <label>Blog Content</label>
          <textarea
            className="form-control"
            value={blogData.blogMarkdown}
            onChange={onChangeMarkdown}
            placeholder="Enter markdown blog content..."
            rows={25}
          />
          <small className="form-text text-muted">
            Enter markdown styled text content to give your blog styles
          </small>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default BlogForm;
