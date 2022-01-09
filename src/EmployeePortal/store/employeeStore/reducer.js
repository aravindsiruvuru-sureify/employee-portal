import { API_INITIAL } from "../../services/APIConstants";

import {
  SET_JOBS,
  SET_COURSES,
  SET_LOADER,
  SET_USER_PROFILE,
  SET_PROJECTS,
  SET_EMPLOYEES,
  SET_API_ERROR,
} from "./actions";

const initialState = {
  jobsData: {},
  coursesData: {},
  projects: [],
  profile: {},
  employees: {},
  loader: false,
  apiError: null,
};

export default function employeePortalStore(state = initialState, action) {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    case SET_API_ERROR:
      return {
        ...state,
        apiError: action.payload,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
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
    case SET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
}
