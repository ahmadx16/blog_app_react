import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import AddNewBlog from "./pages/AddNewBlog";
import Navbar from "./components/Navbar/Navbar";
import { blogReducer } from "./reducers";

function App() {
  const blogStore = createStore(
    blogReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={blogStore}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog/:blogId" component={BlogDetail} />
          <Route exact path="/add-new-blog" component={AddNewBlog} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
