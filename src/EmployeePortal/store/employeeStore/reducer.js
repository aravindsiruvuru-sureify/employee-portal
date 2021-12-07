import { API_INITIAL } from "../../services/APIConstants";

import { SET_JOBS, SET_COURSES, SET_LOADER } from "./actions";

const initialState = {
  jobsData: {},
  coursesData: {},
  loader: false,
};

export default function employeePortalStore(state = initialState, action) {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    case SET_JOBS:
      return {
        ...state,
        jobsData: action.payload,
      };
    case SET_COURSES:
      return {
        ...state,
        coursesData: action.payload,
      };
    default:
      return state;
  }
}
