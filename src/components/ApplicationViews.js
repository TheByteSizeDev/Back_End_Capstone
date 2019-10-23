import React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import Login from "./Auth/Login"
import Register from "./Auth/Register"


const ApplicationViews = () => {


  return (
    <React.Fragment>
      <Route
        exact
        path="/login"
        render={props => {
          return <Login {...props} />;
        }}
      />

      <Route
        exact
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
