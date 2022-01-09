const apiEndpoints = {
  home_page_jobs: ({ page }) =>
    `api/jobs/sppublishdesc/true/${page}/2/posted_on`,
  home_page_courses: ({ page }) =>
    `api/courses/sppublishdesc/true/${page}/2/start_date`,
  profile: `/api/employees/profile`,

  //Job APIS
  hr_page_jobs: ({ page }) => `api/jobs/spdesc/${page}/2/postedOn`,
  hr_create_and_update_job: "api/jobs/create",
  hr_page_job_delete: "api/jobs/delete",
  apply_job: ({ jobId }) => `api/joback/create/${jobId}`,
  get_job_applications: ({ jobId, page }) =>
    `api/joback/spJobAckdesc/${jobId}/${page}/2`,

  //Course APIS
  hr_page_courses: ({ page }) => `api/courses/spase/${page}/2/startDate`,
  hr_create_and_update_course: "api/courses/create",
  hr_page_course_delete: "api/courses/delete",
  apply_course: ({ courseId }) => `api/studentack/create/${courseId}`,
  get_course_applications: ({ courseId, page }) =>
    `api/studentack/spStudentAckdesc/${courseId}/${page}/2`,

  //Employee APIS
  get_employees: ({ page }) =>
    `/api/employees/sortandpageasc/${page}/2/joinDate`,
  employee_create: "/api/employees/create",
  employee_delete: "/api/employees/delete/",
  employee_update: "/api/employees/update",
  update_employee_permanent_address: ({ empId }) =>
    `/api/address/permanent/${empId}`,
  update_employee_current_address: ({ empId }) =>
    `/api/address/current/${empId}`,
  update_employee_bank_details: ({ empId }) =>
    `/api/bankdetails/update/${empId}`,
  update_employee_previous_company: ({ empId }) =>
    `/api/previouscompany/update/${empId}`,
  assign_employee_project: ({ empId, projectId }) =>
    `/api/projects/assign/${empId}/${projectId}`,

  //Project APIS
  get_projects: () => `/api/projects`,
};

export default apiEndpoints;
