const initialState: any[] = [];

interface Action {
  type: string;
  payload: any;
}

export const blogReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [action.payload, ...state];
    case "GET_BLOGS":
      return action.payload;
    
    default:
      return state;
  }
};
