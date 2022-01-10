import { employeeListDATA } from "../../constants";
import * as serviceActions from "../../services/ApiService/actions";
export const SET_JOBS = "SET_JOBS";
export const SET_COURSES = "SET_COURSES";
export const SET_LOADER = "SET_LOADER";
export const SET_API_ERROR = "SET_API_ERROR";
export const SET_EMPLOYEES = "SET_EMPLOYEES";
export const SET_PROJECTS = "SET_PROJECTS";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

export const setJobs = (value) => ({
  type: SET_JOBS,
  payload: value,
});

export const setCourses = (value) => ({
  type: SET_COURSES,
  payload: value,
});

export const setLoader = (value) => ({
  type: SET_LOADER,
  payload: value,
});

export const setApiError = (value) => ({
  type: SET_API_ERROR,
  payload: value,
});

export const setEmployees = (value) => ({
  type: SET_EMPLOYEES,
  payload: value,
});

export const setProjects = (value) => ({
  type: SET_PROJECTS,
  payload: value,
});

export const setUserProfile = (value) => ({
  type: SET_USER_PROFILE,
  payload: value,
});

export const getUserProfileDetails = () => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return serviceActions
      .getUserProfileDetails()
      .then((res) => {
        dispatch(setUserProfile(res));
        dispatch(setLoader(false));
        return res;
      })
      .catch((err) => {
        console.error(err);
        setApiError(err);
      });
  };
};

export const getHomePageJobsList = ({ page }) => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return serviceActions
      .getHomePageJobsList({ page })
      .then((res) => {
        dispatch(setJobs(res));
        dispatch(setLoader(false));
        return res;
      })
      .catch((err) => {
        console.error(err);
        setApiError(err);
      });
  };
};

export const getDashboardPageJobsList = ({ page }) => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return serviceActions
      .getDashboardPageJobsList({ page })
      .then((res) => {
        dispatch(setJobs(res));
        dispatch(setLoader(false));
        return res;
      })
      .catch((err) => {
        console.error(err);
        setApiError(err);
      });
  };
};

export const getHomePageCoursesList = ({ page }) => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return serviceActions
      .getHomePageCoursesList({ page })
      .then((res) => {
        dispatch(setCourses(res));
        dispatch(setLoader(false));
        return res;
      })
      .catch((err) => {
        console.error(err);
        setApiError(err);
      });
  };
};

export const getDashboardPageCoursesList = ({ page = 0 }) => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return serviceActions
      .getDashboardPageCoursesList({ page })
      .then((res) => {
        dispatch(setCourses(res));
        dispatch(setLoader(false));
        return res;
      })
      .catch((err) => {
        console.error(err);
        setApiError(err);
      });
  };
};

export const getEmployeesList = ({ page = 0 }) => {
  return (dispatch) => {
    dispatch(setLoader(true));
    dispatch(setEmployees({ content: employeeListDATA }));
    dispatch(setLoader(false));
    return serviceActions
      .getEmployeesList({ page })
      .then((res) => {
        dispatch(setEmployees(res));
        dispatch(setLoader(false));
        return res;
      })
      .catch((err) => {
        console.error(err);
        setApiError(err);
      });
  };
};

export const getProjectsList = () => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return serviceActions
      .getProjectsList()
      .then((res) => {
        dispatch(setProjects(res));
        dispatch(setLoader(false));
        return res;
      })
      .catch((err) => {
        console.error(err);
        setApiError(err);
      });
  };
};
