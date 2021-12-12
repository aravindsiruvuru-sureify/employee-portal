const baseUrl = "http://35.200.162.143:8080/api/course/{id}/";

const apiEndpoints = {
  home_page_jobs: ({ page }) =>
    `http://35.200.162.143:8080/api/jobs/sppublishdesc/true/${page}/2/posted_on`,
  home_page_courses: ({ page }) =>
    `http://35.200.162.143:8080/api/course/sppublishdesc/true/${page}/2/start_date`,
  hr_page_jobs: ({ page }) =>
    `http://35.200.162.143:8080/api/jobs/spdesc/${page}/2/postedOn`,
  hr_page_courses: ({ page }) =>
    `http://35.200.162.143:8080/api/course/spase/${page}/2/startDate`,
  hr_create_and_update_job: "http://35.200.162.143:8080/api/jobs/",
  hr_create_and_update_course: "http://35.200.162.143:8080/api/course",
  hr_page_employees: "https://prasanth-277.github.io/employees.json",
  hr_page_job_delete: "http://35.200.162.143:8080/api/jobs/",
  hr_page_course_delete: "http://35.200.162.143:8080/api/course/",
};

export default apiEndpoints;
