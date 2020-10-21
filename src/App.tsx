import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import AddNewBlog from "./pages/AddNewBlog";
import EditBlog from "./pages/EditBlog";
import Navbar from "./components/Navbar/Navbar";
import blogStore from "./store";


function App() {
  

  return (
    <Provider store={blogStore}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog/:blogId" component={BlogDetail} />
          <Route exact path="/add-new-blog" component={AddNewBlog} />
          <Route exact path="/edit-blog/:blogId" component={EditBlog} /> 
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
