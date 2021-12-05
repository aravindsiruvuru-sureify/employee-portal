import * as serviceActions from "../../services/ApiService/actions";
export const SET_JOBS = "SET_JOBS";
export const SET_COURSES = "SET_COURSES";

export const setJobs = (value) => ({
  type: SET_JOBS,
  payload: value,
});

export const setCourses = (value) => ({
  type: SET_COURSES,
  payload: value,
});

export const getHomePageJobsList = () => {
  return (dispatch) => {
    return serviceActions
      .getHomePageJobsList()
      .then((res) => {
        dispatch(setJobs(res));
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getDashboardPageJobsList = () => {
  return (dispatch) => {
    return serviceActions
      .getDashboardPageJobsList()
      .then((res) => {
        dispatch(setJobs(res));
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getHomePageCoursesList = () => {
  return (dispatch) => {
    return serviceActions
      .getHomePageCoursesList()
      .then((res) => {
        dispatch(setCourses(res));
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getDashboardPageCoursesList = () => {
  return (dispatch) => {
    return serviceActions
      .getDashboardPageCoursesList()
      .then((res) => {
        dispatch(setCourses(res));
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
