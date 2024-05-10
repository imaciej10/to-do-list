import _ from "lodash";
import "./style.css";
import Task, {
  getInputvalues,
  setDefaultDate,
  getProj1Tasks,
  getProj2Tasks,
  getEditedTask,
} from "./tasks.js";
import Project, {
  getNewProject,
  getDefaultProjects,
  getEditedProject,
} from "./projects.js";
import DOM from "./dom.js";
import loadMain from "./main.js";
export const projects = [];
let tasks1 = [];
let tasks2 = [];
let editedProjectName;
let projectToEdit;
let taskToEdit;

const mainElements = loadMain();

const modalWindows = [
  { button: mainElements.closeTasksBtn, window: mainElements.tasksModal },
  {
    button: mainElements.closeProjectsBtn,
    window: mainElements.projectsModal,
  },
  {
    button: mainElements.closeEditProjectBtn,
    window: mainElements.editProjectModal,
  },
  {
    button: mainElements.closeEditTaskBtn,
    window: mainElements.editTaskModal,
  },
];

const [proj1, proj2] = getDefaultProjects();
tasks1 = getProj1Tasks();
tasks2 = getProj2Tasks();
tasks1.forEach((task) => proj1.addTask(task));
tasks2.forEach((task) => proj2.addTask(task));

const storedProjectsJSON = localStorage.getItem("projects");
const storedProjects = storedProjectsJSON ? JSON.parse(storedProjectsJSON) : [];

if (storedProjects.length === 0) {
  projects.push(proj1, proj2);
} else {
  storedProjects.forEach((project) => projects.push(project));
}

projects.forEach((project) => {
  DOM.appendProject("project", project);
  DOM.updateTasks(project, project.tasks);
});

const tasksForm = document.querySelector(".newTask");
const projectsForm = document.querySelector(".newProject");
const editProjectForm = document.querySelector(".editProject");
const editTaskForm = document.querySelector(".editTaskForm");

DOM.updateProjectsInForm(projects);
DOM.taskMenuEventListeners(handleOptionClick);

function saveProjectsToLocalStorage() {
  try {
    const projectsJSON = JSON.stringify(projects);
    localStorage.setItem("projects", projectsJSON);
  } catch (error) {
    console.error("Error saving projects to local storage:", error);
  }
}

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

function tasksCount() {
  let totalCount = 0;
  projects.forEach((project) => {
    totalCount += project.tasks.length;
  });
  return totalCount;
}

function findProjectIndex(projectName) {
  const index = projects.findIndex((project) => project.name === projectName);
  if (index === -1) {
    console.error(`Project "${projectName}" not found.`);
    return null;
  }
  return index;
}
function isToday(date, today) {
  return date === today;
}

function handleOptionClick(id) {
  filterTasksArray(id);
}

function getTaskAndProjectInfo(event) {
  return [event.detail.taskName, event.detail.projectName];
}

function taskFound(project, taskToEdit) {
  let taskIndex;
  let found = false;
  for (let i = 0; i < project.tasks.length; i++) {
    if (project.tasks[i].title === taskToEdit) {
      taskIndex = i;
      found = true;
    }
  }
  if (!found) {
    console.error(
      `Task "${taskToEdit}" not found in project "${project.name}".`
    );
  }
  return [taskIndex, found];
}

function filterTasksArray(param) {
  const [today, thisWeek] = getDates();

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
  } else if (param === "favorite") {
    projects.forEach((project) => {
      project.filterTasksByFavorite();
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
    const project = projects[index];
    project.tasks.push(newTask);
    mainElements.closeModal(mainElements.tasksModal);
    DOM.appendNewTask(project, newTask);
    tasksForm.reset();
    saveProjectsToLocalStorage();
  });

  projectsForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newProject = getNewProject();
    mainElements.closeModal(mainElements.projectsModal);
    projects.push(newProject);
    DOM.appendProject("project", newProject);
    DOM.updateProjectsInForm(projects);
    projectsForm.reset();
    saveProjectsToLocalStorage();
  });

  editTaskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const editedTask = getEditedTask();
    const oldProjectIndex = findProjectIndex(projectToEdit);
    const project = projects[oldProjectIndex];

    const [taskIndex, found] = taskFound(project, taskToEdit);

    if (projectToEdit !== editedTask.project) {
      if (found) {
        project.tasks.splice(taskIndex, 1);
        const newProjectIndex = findProjectIndex(editedTask.project);
        projects[newProjectIndex].tasks.push(editedTask);
      }
    } else if (found) {
      project.tasks.splice(taskIndex, 1, editedTask);
    }

    DOM.clearDashboard();
    projects.forEach((project) => {
      DOM.updateTasks(project, project.tasks);
    });
    editTaskForm.reset();
    mainElements.closeModal(mainElements.editTaskModal);
    saveProjectsToLocalStorage();
  });

  editProjectForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const [newName, newColor] = getEditedProject();
    const index = findProjectIndex(editedProjectName);
    const project = projects[index];
    project.name = newName;
    project.color = newColor;
    project.tasks.forEach((task) => (task.project = newName));

    DOM.updateDashboard(editedProjectName, project, project.tasks);
    DOM.editProjectList(project, editedProjectName);
    DOM.updateProjectsInForm(projects);
    editProjectForm.reset();
    mainElements.closeModal(mainElements.editProjectModal);
    saveProjectsToLocalStorage();
  });

  document.addEventListener("projectEdited", function (event) {
    editedProjectName = event.detail.projectName;
    mainElements.openModal(mainElements.editProjectModal);
  });

  document.addEventListener("favoriteToggled", function (event) {
    const [taskName, projName] = getTaskAndProjectInfo(event);
    const index = findProjectIndex(projName);
    const project = projects[index];

    for (let i = 0; i < projects[index].tasks.length; i++) {
      if (project.tasks[i].title === taskName) {
        project.toggleStatus(i);
      }
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

  document.addEventListener("statusChanged", function (event) {
    let newStatus = event.detail.newStatus;
    newStatus = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
    const [taskName, projName] = getTaskAndProjectInfo(event);
    if (newStatus === "InProgress") newStatus = "In progress";
    const index = findProjectIndex(projName);
    const project = projects[index];
    for (let i = 0; i < project.tasks.length; i++) {
      if (project.tasks[i].title === taskName)
        project.tasks[i].status = newStatus;
    }
    saveProjectsToLocalStorage();
  });

  document.addEventListener("projectRemoved", function (event) {
    const projectName = event.detail.projectName;
    const index = findProjectIndex(projectName);
    if (index !== -1) {
      projects.splice(index, 1);
    }
    DOM.updateProjectsInForm(projects);
    saveProjectsToLocalStorage();
  });

  document.addEventListener("taskDeleted", function (event) {
    const [taskName, projectName] = getTaskAndProjectInfo(event);
    const index = findProjectIndex(projectName);
    const project = projects[index];

    for (let i = 0; i < projects[index].tasks.length; i++) {
      if (project.tasks[i].title === taskName) {
        project.tasks.splice(i, 1);
      }
    }
    DOM.clearDashboard();
    projects.forEach((project) => {
      DOM.updateTasks(project, project.tasks);
    });
    saveProjectsToLocalStorage();
  });

  document.addEventListener("taskEdited", function (event) {
    [taskToEdit, projectToEdit] = getTaskAndProjectInfo(event);
  });

  addTask.addEventListener("click", () => {
    console.log(tasksCount());
    if (tasksCount() >= 12) {
      alert("Can't add more than twelve tasks!");
      return;
    }
    mainElements.openModal(mainElements.tasksModal);
    setDefaultDate();
    saveProjectsToLocalStorage();
  });

  mainElements.addProject.addEventListener("click", () => {
    if (projects.length >= 5) {
      alert("Can't add more than five projects!");
      return;
    }
    mainElements.openModal(mainElements.projectsModal);
  });

  modalWindows.forEach((modal) =>
    modal.button.addEventListener("click", () =>
      mainElements.closeModal(modal.window)
    )
  );
});
