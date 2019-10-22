import React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";


const ApplicationViews = () => {


  return (
    <React.Fragment>
        <h2>Hello!</h2>
      {/* <Route
        exact
        path="/"
        render={props => {
          return <ProductList products={products} {...props} />;
        }}
      /> */}
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
