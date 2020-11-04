import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.userCreate.user.username);

  const checkAuth = () => {
    return user ? true : false;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/register" }} />
        )
      }
    />
  );
};

export default PrivateRoute;