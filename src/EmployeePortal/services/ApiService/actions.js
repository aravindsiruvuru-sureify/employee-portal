import api from "./api";
import { API_FAILED, API_FETCHING, API_SUCCESS } from "../APIConstants";

import apiEndpoints from "../APIEndpoints";

// const apiEndpoints = {
//   home_page_jobs:
//     "http://35.200.162.143:8080/api/jobs/sppublishdesc/true/0/20/posted_on",
//   // home_page_courses: "https://prasanth-277.github.io/courses.json",
//   home_page_courses:
//     "http://35.200.162.143:8080/api/course/sppublishdesc/true/0/20/start_date",
//   home_employees: "https://prasanth-277.github.io/employees.json",
//   hr_page_jobs: "https://prasanth-277.github.io/jobs.json",
//   hr_page_courses: "https://prasanth-277.github.io/courses.json",
//   hr_create_and_update_job: "http://localhost:8080/api/jobs/",
//   hr_create_and_update_course: "https://localhost:8080/api/course",
// };

export const getUserProfileDetails = () => {
  return api.get(apiEndpoints.profile).then((response) => {
    return response.data;
  });
};

export const getHomePageJobsList = ({ page }) => {
  return api.get(apiEndpoints.home_page_jobs({ page })).then((response) => {
    return response.data;
  });
};

export const getDashboardPageJobsList = ({ page }) => {
  return api.get(apiEndpoints.hr_page_jobs({ page })).then((response) => {
    return response.data;
  });
};

export const getHomePageCoursesList = ({ page }) => {
  return api.get(apiEndpoints.home_page_courses({ page })).then((response) => {
    return response.data;
  });
};

export const getDashboardPageCoursesList = ({ page }) => {
  return api.get(apiEndpoints.hr_page_courses({ page })).then((response) => {
    return response.data;
  });
};

export const getEmployeesList = ({ page = 0 }) => {
  return api.get(apiEndpoints.get_employees({ page })).then((response) => {
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
    .post(apiEndpoints.hr_create_and_update_course, body)
    .then((response) => {
      return;
    });
};

export const deleteJobById = ({ id }) => {
  return api
    .delete(`${apiEndpoints.hr_page_job_delete}/${id}/`)
    .then((response) => {
      return;
    });
};

export const deleteCourseById = ({ id }) => {
  return api
    .delete(`${apiEndpoints.hr_page_course_delete}/${id}/`)
    .then((response) => {
      return;
    });
};

export const applyJob = ({ body, jobId }) => {
  return api.put(apiEndpoints.apply_job({ jobId }), body).then((response) => {
    return;
  });
};

export const enrollCourse = ({ body, courseId }) => {
  return api
    .put(apiEndpoints.apply_course({ courseId }), body)
    .then((response) => {
      return;
    });
};

export const getJobApplicants = ({ jobId, page = 0 }) => {
  return api
    .get(apiEndpoints.get_job_applications({ jobId, page }))
    .then((res) => {
      return res;
    });
};

export const getCourseApplicants = ({ courseId, page = 0 }) => {
  return api
    .get(apiEndpoints.get_course_applications({ courseId, page }))
    .then((res) => {
      return res;
    });
};

export const getProjectsList = () => {
  return api.get(apiEndpoints.get_projects()).then((res) => {
    return res.data;
  });
};
