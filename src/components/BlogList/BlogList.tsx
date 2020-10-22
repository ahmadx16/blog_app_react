import React from "react";
import BlogCard from "../BlogCard/BlogCard";

interface BlogsDataType {
  blogsData: [{}];
}

const BlogList = ({ blogsData }: BlogsDataType) => {
  let blogList = [<h2>There are currently no blogs. Add blogs for more</h2>];
  if (blogsData) {
    blogList = blogsData.map((blogData: any) => {
      return (
        <BlogCard
          key={blogData.id}
          blogId={blogData.id}
          title={blogData.title}
          date_created={blogData.created}
        />
      );
    });
  }

  return <div className="container mt-4">{blogList}</div>;
};

export default BlogList;
