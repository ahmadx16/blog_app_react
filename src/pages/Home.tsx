import React, { useEffect } from "react";
import { connect } from "react-redux";

import BlogList from "../components/BlogList/BlogList";
import { getBlogsActions } from "../actions";
import { getAllBlogsData } from "../services/blogAPI";

export const Home = ({ blogState, getBlogsActions }: any) => {
  useEffect(() => {
    getBlogData();
  }, []);

  const getBlogData = async () => {
    const blogsData = await getAllBlogsData();
    if (blogsData.error){
        alert(blogsData.error);
        return
    } 
    getBlogsActions(blogsData);
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
  getBlogsActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
