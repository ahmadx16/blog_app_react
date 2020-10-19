import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={BlogDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
