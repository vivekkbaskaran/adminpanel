import React from "react";
import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";
import Dashboard from "./component/Dashboard";
import CommonLayout from "./layout/CommonLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <CommonLayout>
          <Route exact path="/dashboard" component={Dashboard} />
        </CommonLayout>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
