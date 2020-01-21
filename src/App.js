import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
  //Redirect
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
//import {setCurrentUser} '../actions/authAction'
import { setCurrentUser, logoutUser } from "./actions/authAction";

import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Home from "../src/pages/home";
import Login from "../src/pages/login";
import CategoryList from "./pages/category/list";
import SubcategoryList from "./pages/subcategory/list";
import ProductList from "./pages/products/list";
import CategoryEdit from "./pages/category/edit";
import CommonLayout from "../src/components/layout/commonLayout";

if (localStorage.jwt) {
  setAuthToken(localStorage.jwt);
  const decode = jwt_decode(localStorage.jwt);
  store.dispatch(setCurrentUser(decode));

  const currentTime = Date.now() / 1000;
  if (decode.exp < currentTime) {
    store.dispatch(logoutUser());

    window.location.href = "/login";
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <CommonLayout {...this.props}>
                <Route exact path="/dashboard" render={props => <Home />} />
                <Route
                  exact
                  path="/category"
                  render={props => <CategoryList />}
                />
                <Route
                  exact
                  path="/category/:id"
                  render={props => <CategoryEdit {...props} />}
                />
                <Route
                  exact
                  path="/subcategory"
                  render={props => <SubcategoryList />}
                />
                <Route
                  exact
                  path="/products"
                  render={props => <ProductList />}
                />
              </CommonLayout>
            </Switch>
            {/* <Redirect to="login" /> */}
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
