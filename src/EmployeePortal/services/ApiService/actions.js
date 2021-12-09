import api from "./api";
import { API_FAILED, API_FETCHING, API_SUCCESS } from "../APIConstants";

// import apiEndpoints from "../APIEndpoints";

const apiEndpoints = {
  home_page_jobs: "https://prasanth-277.github.io/jobs.json",
  home_page_courses: "https://prasanth-277.github.io/courses.json",
  home_employees: "https://prasanth-277.github.io/employees.json",
  hr_page_jobs: "https://prasanth-277.github.io/jobs.json",
  hr_page_courses: "https://prasanth-277.github.io/courses.json",
  hr_create_and_update_job: "http://localhost:8080/api/jobs/",
  hr_create_and_update_course: "https://localhost:8080/api/course",
};

export const getHomePageJobsList = () => {
  return api.get(apiEndpoints.home_page_jobs).then((response) => {
    return response.data;
  });
};

export const getEmployeesList = () => {
  return api.get(apiEndpoints.home_employees).then((response) => {
    return response.data;
  });
};

export const getDashboardPageJobsList = () => {
  return api.get(apiEndpoints.hr_page_jobs).then((response) => {
    return response.data;
  });
};

export const getHomePageCoursesList = () => {
  return api.get(apiEndpoints.home_page_courses).then((response) => {
    return response.data;
  });
};

export const getDashboardPageCoursesList = () => {
  return api.get(apiEndpoints.hr_page_courses).then((response) => {
    return response.data;
  });
};

export const createJob = (body) => {
  return api
    .put(apiEndpoints.hr_create_and_update_job, body)
    .then((response) => {
      return;
    });
};

export const createCourse = (body) => {
  return api
    .put(apiEndpoints.hr_create_and_update_course, body)
    .then((response) => {
      return;
    });
};
