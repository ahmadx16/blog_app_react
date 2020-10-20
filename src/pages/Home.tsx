import React, { useEffect } from "react";
import { connect } from "react-redux";

import BlogList from "../components/BlogList/BlogList";
import { getBlogs } from "../actions";
import { getAllBlogsData } from "../services/blogAPI";

export const Home = ({ blogState, getBlogs }: any) => {
  useEffect(() => {
    getBlogData();
  }, []);

  const getBlogData = async () => {
    const blogsData = await getAllBlogsData();
    if (blogsData.error){
        alert(blogsData.error);
        return
    } 
    getBlogs(blogsData);
  };

  return (
    <div>
      <BlogList blogsData={blogState} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { blogState: state };
};

const mapDispatchToProps = {
  getBlogs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
