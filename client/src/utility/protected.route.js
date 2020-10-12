import React from "react";
import { Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selector";
 const ProtectedRoute = ({
  component: Component,
  currentUser,
  ...rest
  
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (currentUser) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(ProtectedRoute);
