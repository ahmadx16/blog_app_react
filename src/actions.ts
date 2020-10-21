interface Action {
  type: string;
  payload: any;
}

export const getBlogsActions = (blogData: any): Action => {
  return {
    type: "GET_BLOGS",
    payload: blogData,
  };
};

export const deleteBlogAction = (blogId: any): Action => {
  return {
    type: "DELETE_BLOG",
    payload: blogId,
  };
};
