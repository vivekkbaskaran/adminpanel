import React from "react";
import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";
import Dashboard from "./component/Dashboard";
import Category from "./component/Category";
import CategoryEdit from "./component/CategoryEdit";
import CommonLayout from "./layout/CommonLayout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

//function App() {
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <CommonLayout {...this.props}>
            <Route exact path="/dashboard" render={props => <Dashboard />} />
            <Route exact path="/category" render={props => <Category />} />
            <Route
              exact
              path="/category/:id"
              render={props => <CategoryEdit {...props} {...this.props} />}
            />
          </CommonLayout>
        </Switch>
      </Router>
    );
  }
}

export default App;
