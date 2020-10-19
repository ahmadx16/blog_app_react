import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import { blogReducer } from "./reducers";

function App() {
  const blogStore = createStore(
    blogReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <div>
      <Provider store={blogStore}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail" component={BlogDetail} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
