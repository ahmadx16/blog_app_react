import React from "react";
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux'

import TimeAgo from "react-timeago";

import { deleteBlog } from "../../services/blogAPI";
import { deleteBlogAction } from "../../actions"


interface BlogCardType {
  blogId:string,
  title:string,
  date_created:string,
  deleteBlogAction:any,

}

const BlogCard = ({ blogId, title, date_created, deleteBlogAction }: BlogCardType) => {
  let history = useHistory();

  const onClickViewMore = () => {
    history.push("/blog/" + blogId);
  };

  const onDeleteBlog = async() =>{
    await deleteBlog(blogId)
    deleteBlogAction(blogId)
  }
  const onEditClick = async() =>{
    history.push("/edit-blog/"+blogId)
  }
  

  return (
    <div className="card mt-3">
      <div className="card-header">
        <div className="row">
          <div className="col-10">Featured</div>
          <div className="col-2">
            <button className="btn btn-outline-danger" onClick={onDeleteBlog}>
              Delete
            </button>

            <button className="btn btn-outline-info ml-2" onClick={onEditClick}>
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        
        <button className="btn btn-outline-primary" onClick={onClickViewMore}>
          View More...
        </button>
      </div>
      <div className="card-footer text-muted">
        <TimeAgo date={date_created} minPeriod={30} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  deleteBlogAction
}

export default connect(null, mapDispatchToProps)(BlogCard);
