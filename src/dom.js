import { create } from "lodash";
import editIcon from "./img/edit.svg";
import deleteIcon from "./img/delete.svg";
import starIcon from "./img/star.svg";

const DOM = (function () {
  const newContainer = document.querySelector(".new");
  const inProgressContainer = document.querySelector(".inProgress");
  const finishedContainer = document.querySelector(".finished");
  const projectsContainer = document.querySelector(".projectsContainer");
  const taskList = document.querySelector(".tasks");
  const tasksItems = document.querySelectorAll(".tasksList");
  const projectList = document.getElementById("projectName");
  const taskContainers = [newContainer, inProgressContainer, finishedContainer];

  function createProjectElement(className, projectName) {
    const div = document.createElement("div");
    div.textContent = projectName;
    div.setAttribute("data-custom", projectName);
    div.classList.add(className);
    return div;
  }

  function createDivElement(className, text) {
    const div = document.createElement("div");
    div.textContent = text;
    div.classList.add(className);
    return div;
  }

  function taskMenuEventListeners(callback) {
    taskList.addEventListener("click", function (event) {
      if (event.target.id === "addTask") return;
      if (event.target.classList.contains("tasksList")) {
        Array.from(tasksItems).forEach((task) =>
          task.classList.remove("activeFilter")
        );
        event.target.classList.add("activeFilter");
        callback(event.target.dataset.custom);
      }
    });
  }

  function createTaskContainer(task, color) {
    const container = createDivElement("task");
    const taskTitle = createDivElement("taskTitle", task.title);
    const taskDescription = createDivElement(
      "taskDescription",
      task.description
    );
    const projectID = createDivElement("projectID", task.project);
    const taskDate = createDivElement("taskDate", task.dueDate);
    const taskPriority = createDivElement("taskPriority", task.priority);

    container.style.backgroundColor = color;

    container.appendChild(taskTitle);
    container.appendChild(taskDescription);
    container.appendChild(taskDate);
    container.appendChild(taskPriority);
    container.appendChild(taskTitle);
    container.appendChild(projectID);

    const favoriteIcon = createIconElement("favoriteIcon", starIcon);
    if (task.favorite === true) {
      favoriteIcon.classList.add("active");
    }
    favoriteIcon.setAttribute("data-custom", task.title);
    favoriteIcon.setAttribute("data-custom2", task.project);
    container.append(favoriteIcon);

    favoriteIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleFavorite(favoriteIcon);
      if (favoriteIcon.classList.contains("active")) {
        favoriteIcon.classList.remove("active");
        return;
      }
      favoriteIcon.classList.add("active");
    });

    return container;
  }

  function removeTasks(projectElement) {
    const projectName = projectElement.textContent;
    taskContainers.forEach((container) => {
      Array.from(container.children).forEach((child) => {
        if (child.getAttribute("data-custom") === projectName) {
          container.removeChild(child);
        }
      });
    });
  }

  function removeProject(project) {
    const projectTitle = project.textContent;
    const removeProjectEvent = new CustomEvent("projectRemoved", {
      detail: { projectName: projectTitle },
    });
    document.dispatchEvent(removeProjectEvent);
  }

  function toggleFavorite(icon) {
    const taskName = icon.getAttribute("data-custom");
    const projectName = icon.getAttribute("data-custom2");
    const toggle = new CustomEvent("favoriteToggled", {
      detail: { taskName: taskName, projectName: projectName },
    });
    document.dispatchEvent(toggle);
  }

  function editProject(project) {
    const projectTitle = project.textContent;
    const editProject = new CustomEvent("projectEdited", {
      detail: { projectName: projectTitle },
    });
    document.dispatchEvent(editProject);
  }

  function SelectProject(project) {
    const projectTitle = project.textContent;
    const selectProjectElement = new CustomEvent("projectSelected", {
      detail: { projectName: projectTitle },
    });
    document.dispatchEvent(selectProjectElement);
  }

  function DeselectProject(project) {
    const projectTitle = project.textContent;
    const DeselectProjectElement = new CustomEvent("projectDeselected", {
      detail: { projectName: projectTitle },
    });
    document.dispatchEvent(DeselectProjectElement);
  }

  function createIconElement(className, source) {
    const cover = document.createElement("img");
    cover.classList.add(className);

    cover.src = source;
    return cover;
  }

  function appendIcons(elem) {
    const editSVG = createIconElement("edit", editIcon);
    const deleteSVG = createIconElement("delete", deleteIcon);
    elem.appendChild(editSVG);
    elem.appendChild(deleteSVG);
    return elem;
  }

  function removeProjectFromList(btn, container) {
    const projectDiv = btn.parentNode;
    container.removeChild(projectDiv);
  }

  function appendProject(className, project) {
    const newProjectElement = createProjectElement(className, project.name);
    newProjectElement.style.backgroundColor = project.color;
    appendIcons(newProjectElement);
    const deleteBtn = newProjectElement.querySelector(".delete");
    const editBtn = newProjectElement.querySelector(".edit");
    projectsContainer.appendChild(newProjectElement);
    deleteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      removeTasks(newProjectElement);
      removeProject(newProjectElement);
      removeProjectFromList(deleteBtn, projectsContainer);
    });
    editBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      editProject(newProjectElement);
    });

    newProjectElement.addEventListener("click", () => {
      const selectedProject = newProjectElement;
      if (selectedProject.style.fontWeight === "bold") {
        selectedProject.style.fontWeight = "normal";
        DeselectProject(newProjectElement);
      } else {
        selectedProject.style.fontWeight = "bold";
        SelectProject(newProjectElement);
      }
    });
  }

  function clearContainer(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  function updateProjectsInForm(projects) {
    clearContainer(projectList);
    projects.forEach((project) => {
      const option = document.createElement("option");
      option.textContent = project.name;
      projectList.appendChild(option);
    });
  }

  function clearDashboard() {
    clearContainer(newContainer);
    clearContainer(inProgressContainer);
    clearContainer(finishedContainer);
  }

  function appendNewTask(project, task) {
    const container = createTaskContainer(task, project.color);
    container.setAttribute("data-custom", project.name);
    if (task.status === "New") newContainer.appendChild(container);
    else if (task.status === "In progress") {
      inProgressContainer.appendChild(container);
    } else finishedContainer.appendChild(container);
  }

  function updateTasks(project, tasksArr) {
    tasksArr.forEach((task) => {
      const container = createTaskContainer(task, project.color);
      container.setAttribute("data-custom", project.name);
      if (task.status === "New") newContainer.appendChild(container);
      else if (task.status === "In progress") {
        inProgressContainer.appendChild(container);
      } else finishedContainer.appendChild(container);
    });
  }

  function updateDashboard(oldName, project, tasksArr) {
    tasksArr.forEach((task) => {
      taskContainers.forEach((container) => {
        for (const child of container.children) {
          if (child.getAttribute("data-custom") === oldName) {
            child.style.backgroundColor = project.color;
            child.setAttribute("data-custom", project.name);
            const name = child.querySelector(".projectID");
            name.textContent = project.name;
          }
        }
      });
    });
  }

  function editProjectList(project, oldName) {
    const children = projectsContainer.children;
    console.log(projectsContainer);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.textContent === oldName) {
        child.remove();
        appendProject("project", project);
      }
    }
  }

  return {
    createProjectElement,
    appendProject,
    updateTasks,
    taskMenuEventListeners,
    clearDashboard,
    updateProjectsInForm,
    appendNewTask,
    updateDashboard,
    editProjectList,
  };
})();

export default DOM;
