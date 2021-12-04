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


export const getJobsList = () => {
  return (dispatch) => {
    return serviceActions
      .getJobsList()
      .then((res) => {
        dispatch(setJobs(res));
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getCoursesList = () => {
  return (dispatch) => {
    return serviceActions
      .getCoursesList()
      .then((res) => {
        dispatch(setCourses(res));
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  };
};