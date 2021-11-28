/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// import Layout from '../../components/Layout';

const ProtectedRoute = ({
  component: Component,
  noHeader = false,
  ...rest
}) => {
  const getAuth = () => true;

  return (
    <Route
      {...rest}
      render={(props) =>
        getAuth() ? (
        //   <Layout noHeader={noHeader}>
            <Component {...props} />
        //   </Layout>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
