import { API_INITIAL } from "../../services/APIConstants";

import { SET_JOBS } from "./actions";

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
    default:
      return state;
  }
}
