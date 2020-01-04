import React from "react";
import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";
import Dashboard from "./component/Dashboard";
import Category from "./component/Category";
import CategoryEdit from "./component/CategoryEdit";
import CommonLayout from "./layout/CommonLayout";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

//Product
import Product from "./component/Product/Product";
import AddProduct from "./component/Product/AddProduct";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <CommonLayout {...this.props}>
            <Route exact path="/dashboard" render={props => <Dashboard />} />
            {/* Product */}
            <Route exact path="/products" render={props => <Product />} />
            <Route exact path="/addproduct" render={props => <AddProduct />} />
            {/* category */}
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
