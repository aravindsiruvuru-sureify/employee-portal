/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
  const getAuth = () => true;

  return (
    <Route
      {...rest}
      render={(props) =>
        getAuth() ? (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
