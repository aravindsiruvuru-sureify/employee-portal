import React, { useEffect } from "react";
import { HashRouter as BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import history from "./history";
import HomePage from "./HomePage";
import JobsPage from "./JobsPage";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const Router = ({ children = null }) => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/jobs"} component={JobsPage} />

        {children}
      </Switch>
    </BrowserRouter>
  );
};

Router.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default Router;
