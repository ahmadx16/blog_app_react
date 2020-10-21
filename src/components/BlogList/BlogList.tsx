import React from "react";
import BlogCard from "../BlogCard/BlogCard";

const BlogList = ({ blogsData }: any) => {
  let blogList = "There are no blogs yet!";
  if (blogsData) {
    blogList = blogsData.map((blogData: any) => {
      return (
        <BlogCard
          key={blogData.id}
          blogId={blogData.id}
          title={blogData.title}
          markdown={blogData.blog_markdown}
          date_created={blogData.created}
        />
      );
    });
  }

  return <div className="container mt-4">{blogList}</div>;
};

export default BlogList;
