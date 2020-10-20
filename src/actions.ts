interface Action {
  type: string;
  payload: any;
}

export const addBlog = (blogData: any): Action => {
  return {
    type: "ADD_BLOG",
    payload: blogData,
  };
};

export const getBlogs = (blogData: any): Action => {
  return {
    type: "GET_BLOGS",
    payload: blogData,
  };
};
