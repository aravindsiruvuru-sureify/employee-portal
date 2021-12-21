import React, { useEffect } from "react";
import { HashRouter as BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import history from "./history";
import HomePage from "./HomePage";
import JobsPage from "./JobsPage";
import CoursesPage from "./CoursesPage";
import Dashboard from "./Dashboard";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import EmployeeListPage from "./EmployeeListPage";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";

const Router = ({ children = null }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/jobs"} component={JobsPage} />
        <Route exact path={"/courses"} component={CoursesPage} />
        <Route exact path={"/employees"} component={EmployeeListPage} />
        <Route exact path={"/dashboard"} component={Dashboard} />
        <Route exact path={"/login"} component={LoginPage} />
        <Route exact path={"/register"} component={RegistrationPage} />

        {children}
      </Switch>
    </BrowserRouter>
  );
};

Router.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default Router;
