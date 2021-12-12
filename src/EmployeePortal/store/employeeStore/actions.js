import * as serviceActions from "../../services/ApiService/actions";
export const SET_JOBS = "SET_JOBS";
export const SET_COURSES = "SET_COURSES";
export const SET_LOADER = "SET_LOADER";
export const SET_API_ERROR = "SET_API_ERROR";
export const SET_EMPLOYEES = "SET_EMPLOYEES";

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

export const getHomePageEmployeesList = () => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return serviceActions
      .getEmployeesList()
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
