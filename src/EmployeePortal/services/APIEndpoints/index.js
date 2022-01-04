const baseUrl = "http://35.200.162.143:8080/api/course/{id}/";

const apiEndpoints = {
  home_page_jobs: ({ page }) =>
    `api/jobs/sppublishdesc/true/${page}/2/posted_on`,
  home_page_courses: ({ page }) =>
    `api/courses/sppublishdesc/true/${page}/2/start_date`,
  hr_page_jobs: ({ page }) => `api/jobs/spdesc/${page}/2/postedOn`,
  hr_page_courses: ({ page }) => `api/courses/spase/${page}/2/startDate`,
  hr_create_and_update_job: "api/jobs/create",
  hr_create_and_update_course: "api/courses/create",
  get_employees: ({ page }) => `https://prasanth-277.github.io/employees.json`,
  hr_page_job_delete: "api/jobs/delete",
  hr_page_course_delete: "api/courses/delete",

  apply_job: ({ jobId }) => `api/joback/create/${jobId}`,
  get_job_applications: ({ jobId, page }) =>
    `api/joback/spJobAckdesc/${jobId}/${page}/2`,

  get_course_applications: ({ courseId, page }) =>
    `api/studentack/spStudentAckdesc/${courseId}/${page}/2`,
  apply_course: ({ courseId }) => `api/studentack/create/${courseId}`,
};

export default apiEndpoints;
