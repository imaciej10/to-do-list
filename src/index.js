import _ from "lodash";
import "./style.css";
import { Task } from "./tasks.js";
import { Project } from "./projects.js";
import loadMain from "./main.js";
const tasks = [];
const projects = [];

let newApp = new Task(
  "Implement App",
  "Create a new food delivery app basec on recent customer request. Try to use SOLID principles along the way",
  new Date(),
  "High",
  "Don't mess up",
  false,
  "ready"
);

console.log(newApp);
tasks.push(newApp);
let myProject = new Project(newApp.title);
myProject.addTask();
myProject.deleteTask();
projects.push(myProject);
console.log(projects);

document.addEventListener("DOMContentLoaded", () => {
  const mainElements = loadMain();

  addTask.addEventListener("click", () => {
    mainElements.tasksModal.classList.add("active");
    mainElements.tasksOverlay.classList.add("active");
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

  addProject.addEventListener("click", () => {
    alert("add project");
  });
  finishedProjects.addEventListener("click", () => {
    alert("finished projects");
  });
});
