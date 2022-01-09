const apiEndpoints = {
  home_page_jobs: ({ page }) =>
    `api/jobs/sppublishdesc/true/${page}/2/posted_on`,
  home_page_courses: ({ page }) =>
    `api/courses/sppublishdesc/true/${page}/2/start_date`,
  profile: `/api/employees/profile`,
  hr_page_jobs: ({ page }) => `api/jobs/spdesc/${page}/2/postedOn`,
  hr_create_and_update_job: "api/jobs/create",
  hr_page_job_delete: "api/jobs/delete",
  apply_job: ({ jobId }) => `api/joback/create/${jobId}`,
  get_job_applications: ({ jobId, page }) =>
    `api/joback/spJobAckdesc/${jobId}/${page}/2`,

  hr_page_courses: ({ page }) => `api/courses/spase/${page}/2/startDate`,
  hr_create_and_update_course: "api/courses/create",
  hr_page_course_delete: "api/courses/delete",
  apply_course: ({ courseId }) => `api/studentack/create/${courseId}`,
  get_course_applications: ({ courseId, page }) =>
    `api/studentack/spStudentAckdesc/${courseId}/${page}/2`,

  // get_employees: ({ page }) =>
  //   `/api/employees/sortandpagedesc/${page}/2/joinDate`,

  get_employees: ({ page }) => `/api/employees`,

  get_projects: ({ page }) => `/api/projects`,
};

export default apiEndpoints;
