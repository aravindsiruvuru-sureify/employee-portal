import { API_INITIAL } from "../../services/APIConstants";

import { SET_JOBS, SET_COURSES } from "./actions";

const initialState = {
  jobsData: {},
};

export default function employeePortalStore(state = initialState, action) {
  switch (action.type) {
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
