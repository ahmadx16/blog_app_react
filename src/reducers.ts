const initialState: any[] = [];

interface Action {
  type: string;
  payload: any;
}

export const blogReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "GET_BLOGS":
      return action.payload;
    case "DELETE_BLOG":
      return state.filter((blog)=> blog.id !== Number(action.payload))
    default:
      return state;
  }
};
