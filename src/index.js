import _ from "lodash";
import "./style.css";
import Task, {
  getInputvalues,
  setDefaultDate,
  getProj1Tasks,
  getProj2Tasks,
} from "./tasks.js";
import Project, { getNewProject, getDefaultProjects } from "./projects.js";
import DOM from "./dom.js";
import loadMain from "./main.js";
const tasks = [];
const projects = [];
let tasks1 = [];
let tasks2 = [];
let activeProject;

const [proj1, proj2] = getDefaultProjects();
tasks1 = getProj1Tasks();
tasks2 = getProj2Tasks();
activeProject = proj1.name;
tasks1.forEach((task) => proj1.addTask(task));
tasks2.forEach((task) => proj2.addTask(task));

projects.push(proj1, proj2);
projects.forEach((project) => {
  DOM.appendProject("project", project);
  DOM.updateTasks(project, project.tasks);
});

const tasksForm = document.querySelector(".newTask");
const projectsForm = document.querySelector(".newProject");
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

function isToday(date, today) {
  return date === today;
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
    tasksForm.reset();
    mainElements.closeModal(mainElements.tasksModal);
    tasks.push(newTask);
    console.log(newTask);
  });

  projectsForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newProject = getNewProject();
    projectsForm.reset();
    mainElements.closeModal(mainElements.projectsModal);
    projects.push(newProject);
    activeProject = newProject.name;
    DOM.appendProject("project", newProject);
  });

  function handleOptionClick(id) {
    console.log(id);
    filterTasksArray(id);
  }
  DOM.taskMenuEventListeners(handleOptionClick);

  document.addEventListener("projectRemoved", function (event) {
    console.log(projects);
    const projectName = event.detail.projectName;
    const index = projects.findIndex((project) => project.name === projectName);
    if (index !== -1) {
      projects.splice(index, 1);
    }
    console.log(projects);
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
});
