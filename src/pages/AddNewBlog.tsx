import React, { useState } from "react";

import {useHistory} from 'react-router-dom'
import { addNewBlog } from "../services/blogAPI";

const AddNewBlog = () => {
  let history = useHistory()
  
  const [blogTitle, setBlogTitle] = useState("");
  const [blogMarkdown, setBlogMarkdown] = useState("");

  const onChangeBlogTitle = (e: any) => {
    setBlogTitle(e.target.value);
  };
  const onChangeMarkdown = (e: any) => {
    setBlogMarkdown(e.target.value);
  };
  const onSubmitAddNewBlog = (e: any) => {
    e.preventDefault();
    addNewBlog(blogTitle, blogMarkdown);
    history.push("/")
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitAddNewBlog}>
        <div className="form-group">
          <label>Blog Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Blog Title"
            value={blogTitle}
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
            value={blogMarkdown}
            onChange={onChangeMarkdown}
          />
          <small className="form-text text-muted">
            Enter markdown styled text content to give your blog styles
          </small>
        </div>

        <button type="submit" className="btn btn-primary">
          Add New Blog!
        </button>
      </form>
    </div>
  );
};
export default AddNewBlog;
