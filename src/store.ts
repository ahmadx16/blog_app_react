import { createStore } from "redux";
import { blogReducer } from "./reducers";


const blogStore = createStore(
  blogReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default blogStore;
