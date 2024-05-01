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
console.log(projects);

const [proj1, proj2] = getDefaultProjects();
tasks1 = getProj1Tasks();
tasks2 = getProj2Tasks();
activeProject = proj1.name;
tasks1.forEach((task) => proj1.addTask(task));
tasks2.forEach((task) => proj2.addTask(task));

projects.push(proj1, proj2);
console.log(proj1);
console.log(proj2);
projects.forEach((project) => {
  DOM.appendProject("project", project.name);
  DOM.updateTasks(project);
});

const tasksForm = document.querySelector(".newTask");
const projectsForm = document.querySelector(".newProject");
const mainElements = loadMain();

document.addEventListener("DOMContentLoaded", () => {
  tasksForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newTask = getInputvalues();
    tasksForm.reset();
    mainElements.closeModal(mainElements.tasksModal);
    tasks.push(newTask);
  });

  projectsForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newProject = getNewProject();
    projectsForm.reset();
    mainElements.closeModal(mainElements.projectsModal);
    projects.push(newProject);
    activeProject = newProject.name;
    DOM.appendProject("project", newProject.name);
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

  today.addEventListener("click", () => {
    alert("today");
  });
  thisWeek.addEventListener("click", () => {
    alert("this week");
  });
  important.addEventListener("click", () => {
    alert("important");
  });
  completed.addEventListener("click", () => {
    alert("completed");
  });
});
