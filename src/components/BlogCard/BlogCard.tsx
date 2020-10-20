import React from "react";
import TimeAgo from "react-timeago";
import { useHistory } from "react-router-dom";

const BlogCard = ({ blogId,title, markdown, date_created }: any) => {
  
  let history = useHistory();
  
  const onClickViewMore = (e: any) => {
    e.preventDefault()
    history.push('/blog/'+blogId)
  };

  return (
      <div className="card mt-3">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {markdown}
            ...
          </p>
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

export default BlogCard;
