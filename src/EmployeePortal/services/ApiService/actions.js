import api from "./api";
import { API_FAILED, API_FETCHING, API_SUCCESS } from "../APIConstants";

export const getJobsList = () => {
  return api
    .get("https://prasanth-277.github.io/jobs.json")
    .then((response) => {
      return response.data;
    });
};
