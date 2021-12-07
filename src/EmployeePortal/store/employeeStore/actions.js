import * as serviceActions from "../../services/ApiService/actions";
export const SET_JOBS = "SET_JOBS";
export const SET_COURSES = "SET_COURSES";
export const SET_LOADER = "SET_LOADER";

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

export const getHomePageJobsList = () => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return serviceActions
      .getHomePageJobsList()
      .then((res) => {
        dispatch(setJobs(res));
        dispatch(setLoader(false));
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getDashboardPageJobsList = () => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return serviceActions
      .getDashboardPageJobsList()
      .then((res) => {
        dispatch(setJobs(res));
        dispatch(setLoader(false));
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getHomePageCoursesList = () => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return serviceActions
      .getHomePageCoursesList()
      .then((res) => {
        dispatch(setCourses(res));
        dispatch(setLoader(false));
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getDashboardPageCoursesList = () => {
  return (dispatch) => {
    dispatch(setLoader(true));
    return serviceActions
      .getDashboardPageCoursesList()
      .then((res) => {
        dispatch(setCourses(res));
        dispatch(setLoader(false));
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
