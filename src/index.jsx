import { Provider } from "react-redux";
import store from "./redux/store";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import User from "./pages/User";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute"

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <PrivateRoute path="/users/me" component={Profile} />
          <Route path="/users/:userid">
            <User />
          </Route>
          <Route path="/register">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
