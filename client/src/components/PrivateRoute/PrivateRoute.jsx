import React from "react";
import { Route, Redirect } from "react-router-dom";

export const isAuthenticated = () => {
  return localStorage.getItem("token") ? true : false;
};

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated() ? children : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
