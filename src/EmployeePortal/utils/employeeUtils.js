import { get } from 'lodash';

export const removeProjectFromEmployee = ({ employee, project }) => {
  const projects = get(employee, 'projects', []);
  return {
    ...employee,
    projects: [
      ...projects.filter((pro) => pro.project_id !== project.project_id),
    ],
  };
};

export const addProjectToEmployee = ({ employee, project }) => {
  return {
    ...employee,
    projects: [...employee.projects, project],
  };
};

export const getFilteredProjects = ({ allProjects, projects }) => {
  const projectsIds = projects.map((project) => project.project_id);
  return allProjects.filter(
    (project) => !projectsIds.includes(project.project_id)
  );
};

export const getEmployeeById = ({ id, employees }) => {
  return employees.find((emp) => emp.user_id === id);
};

export const getManagerSubordinates = ({ mangerId, employees }) => {
  return employees.filter((emp) => emp.manager_id === mangerId);
};

export const replaceEmployee = ({ employee, employees }) => {
  const index = employees.findIndex((emp) => emp.user_id === employee.user_id);
  employees.splice(index, 1, employee);
  return employees;
};
