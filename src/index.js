import _ from "lodash";
import "./style.css";
import Task, {
  getInputvalues,
  setDefaultDate,
  getProj1Tasks,
  getProj2Tasks,
} from "./tasks.js";
import Project, {
  getNewProject,
  getDefaultProjects,
  getEditedProject,
} from "./projects.js";
import DOM from "./dom.js";
import loadMain from "./main.js";
const tasks = [];
const projects = [];
let tasks1 = [];
let tasks2 = [];
let editedProjectName;

const [proj1, proj2] = getDefaultProjects();
tasks1 = getProj1Tasks();
tasks2 = getProj2Tasks();
tasks1.forEach((task) => proj1.addTask(task));
tasks2.forEach((task) => proj2.addTask(task));

projects.push(proj1, proj2);
projects.forEach((project) => {
  DOM.appendProject("project", project);
  DOM.updateTasks(project, project.tasks);
});

const tasksForm = document.querySelector(".newTask");
const projectsForm = document.querySelector(".newProject");
const editProjectForm = document.querySelector(".editProject");
const mainElements = loadMain();

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function getDates() {
  let today = new Date();
  const startOfWeek = new Date();
  const endOfWeek = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  startOfWeek.setDate(today.getDate() - today.getDay());
  endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
  today = year + "-" + month + "-" + day;

  const thisWeek = [formatDate(startOfWeek), formatDate(endOfWeek)];

  return [today, thisWeek];
}
function isDateInRange(date, dateArr) {
  return date >= dateArr[0] && date <= dateArr[1];
}

function findProjectIndex(projectName) {
  const index = projects.findIndex((project) => project.name === projectName);
  return index;
}
function isToday(date, today) {
  return date === today;
}

function handleOptionClick(id) {
  filterTasksArray(id);
}

function filterTasksArray(param) {
  const [today, thisWeek] = getDates();
  let filter;

  if (param === "thisWeek") {
    projects.forEach((project) => {
      project.filterTasksByDate((task) =>
        isDateInRange(task.dueDate, thisWeek)
      );
    });
  } else if (param === "today") {
    projects.forEach((project) => {
      project.filterTasksByDate((task) => isToday(task.dueDate, today));
    });
  } else if (param === "important") {
    projects.forEach((project) => {
      project.filterTasksByImportance();
    });
  } else if (param === "finished") {
    projects.forEach((project) => {
      project.filterTasksByFinished();
    });
  } else if (param === "all") {
    DOM.clearDashboard();
    projects.forEach((project) => DOM.updateTasks(project, project.tasks));
    return;
  }
  DOM.clearDashboard();
  projects.forEach((project) =>
    DOM.updateTasks(project, project.filteredTasks)
  );
}
document.addEventListener("DOMContentLoaded", () => {
  tasksForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newTask = getInputvalues();
    const index = findProjectIndex(newTask.project);
    projects[index].tasks.push(newTask);
    tasksForm.reset();
    mainElements.closeModal(mainElements.tasksModal);
    DOM.appendNewTask(projects[index], newTask);
  });

  projectsForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newProject = getNewProject();
    projectsForm.reset();
    mainElements.closeModal(mainElements.projectsModal);
    projects.push(newProject);
    DOM.appendProject("project", newProject);
    DOM.updateProjectsInForm(projects);
  });

  editProjectForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const [newName, newColor] = getEditedProject();
    const index = findProjectIndex(editedProjectName);
    projects[index].name = newName;
    projects[index].color = newColor;
    DOM.updateDashboard(
      editedProjectName,
      projects[index],
      projects[index].tasks
    );
    DOM.editProjectList(projects[index], editedProjectName);
    DOM.updateProjectsInForm(projects);
    editProjectForm.reset();
    mainElements.closeModal(mainElements.editProjectModal);
  });

  DOM.updateProjectsInForm(projects);
  DOM.taskMenuEventListeners(handleOptionClick);

  document.addEventListener("projectEdited", function (event) {
    editedProjectName = event.detail.projectName;
    mainElements.openModal(mainElements.editProjectModal);
  });

  document.addEventListener("favoriteToggled", function (event) {
    const taskName = event.detail.taskName;
    const projName = event.detail.projectName;
    const index = findProjectIndex(projName);
    const project = projects[index];
    for (let i = 0; i < projects[index].tasks.length; i++) {
      if (project.tasks[i].title === taskName)
        console.log(project.tasks[i].favorite);
      project.toggleStatus(i);
    }
  });
  document.addEventListener("projectDeselected", function (event) {
    DOM.clearDashboard();
    projects.forEach((project) => {
      DOM.updateTasks(project, project.tasks);
    });
  });

  document.addEventListener("projectSelected", function (event) {
    const projectName = event.detail.projectName;
    const index = findProjectIndex(projectName);

    DOM.clearDashboard();
    DOM.updateTasks(projects[index], projects[index].tasks);
  });

  document.addEventListener("projectRemoved", function (event) {
    const projectName = event.detail.projectName;
    const index = findProjectIndex(projectName);
    if (index !== -1) {
      projects.splice(index, 1);
    }
    DOM.updateProjectsInForm(projects);
  });

  addTask.addEventListener("click", () => {
    mainElements.openModal(mainElements.tasksModal);
    setDefaultDate();
  });

  mainElements.closeTasksBtn.addEventListener("click", () => {
    mainElements.closeModal(mainElements.tasksModal);
  });

  mainElements.addProject.addEventListener("click", () => {
    mainElements.openModal(mainElements.projectsModal);
  });

  mainElements.closeProjectsBtn.addEventListener("click", () => {
    mainElements.closeModal(mainElements.projectsModal);
  });

  mainElements.closeEditProjectBtn.addEventListener("click", () => {
    mainElements.closeModal(mainElements.editProjectModal);
  });
});
