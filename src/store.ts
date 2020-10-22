import { createStore, combineReducers, applyMiddleware } from "redux";

import { blogReducer } from "./reducers";
import actionLogger from "./middleware/logger";

 
const rootReducer = combineReducers({
  blogReducer,
})

const blogStore = createStore(
  rootReducer,
  applyMiddleware(actionLogger),
);

export type RootState = ReturnType<typeof rootReducer>
export default blogStore;
