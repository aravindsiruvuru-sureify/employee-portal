import * as serviceActions from "../../services/ApiService/actions";
export const SET_JOBS = "SET_JOBS";

export const setJobs = (value) => ({
  type: SET_JOBS,
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
