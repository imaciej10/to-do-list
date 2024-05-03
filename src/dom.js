import { create } from "lodash";
import editIcon from "./img/edit.svg";
import deleteIcon from "./img/delete.svg";

const DOM = (function () {
  const newContainer = document.querySelector(".new");
  const inProgressContainer = document.querySelector(".inProgress");
  const finishedContainer = document.querySelector(".finished");
  const projectsContainer = document.querySelector(".projectsContainer");
  const taskList = document.querySelector(".tasks");
  // const allTasks = document.getElementById("today");
  // const today = document.getElementById("today");
  // const thisWeek = document.getElementById("thisWeek");
  // const important = document.getElementById("important");
  // const completed = document.getElementById("completed");

  const taskContainers = [newContainer, inProgressContainer, finishedContainer];
  function createProjectElement(className, projectName) {
    const div = document.createElement("div");
    div.textContent = projectName;
    div.classList.add(className);
    return div;
  }

  function createDivElement(className, text) {
    const div = document.createElement("div");
    div.textContent = text;
    div.classList.add(className);
    return div;
  }
  function createParagraphElement(className, string) {
    const para = document.createElement("p");
    para.classList.add(className);
    para.textContent = string;
    if (className === "pages" && string !== "") para.textContent += " pages";
    return para;
  }

  function taskMenuEventListeners(callback) {
    taskList.addEventListener("click", function (event) {
      callback(event.target.dataset.custom);
    });
  }

  function createTaskContainer(task) {
    const container = createDivElement("task");
    const taskTitle = createDivElement("taskTitle", task.title);
    const taskDescription = createDivElement(
      "taskDescription",
      task.description
    );
    const projectID = createDivElement("projectID", task.project);
    const taskDate = createDivElement("taskDate", task.dueDate);
    const taskPriority = createDivElement("taskPriority", task.priority);

    console.log(task.color);
    container.style.borderColor = task.color;

    container.appendChild(taskTitle);
    container.appendChild(taskDescription);
    container.appendChild(taskDate);
    container.appendChild(taskPriority);
    container.appendChild(taskTitle);
    container.appendChild(projectID);
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

  function createButtonElement(className) {
    const button = document.createElement("button");
    button.classList.add(className);
    button.textContent = "Remove";
    return button;
  }

  function createIconElement(className, source) {
    const cover = document.createElement("img");
    cover.classList.add(className);

    cover.src = source;
    return cover;
  }

  function createCheckboxElement(id, read) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = id;
    if (read === true) checkbox.checked = true;
    return checkbox;
  }

  function createLabelElement(check) {
    const label = document.createElement("label");
    label.setAttribute("for", check);
    label.textContent = "Read";
    return label;
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
    deleteBtn.addEventListener("click", () => {
      removeTasks(newProjectElement);
      removeProject(newProjectElement);
      removeProjectFromList(deleteBtn, projectsContainer);
    });
    editBtn.addEventListener("click", () => alert("his"));
    newProjectElement.addEventListener("click", () => {
      const selectedProject = newProjectElement;
      if (selectedProject.style.fontWeight === "bold") {
        selectedProject.style.fontWeight = "normal";
        clearDashboard();
        updateTasks(project.name, project.tasks);
      } else {
        selectedProject.style.fontWeight = "bold";
        clearDashboard();
        updateTasks(project.name, project.tasks);
      }
    });
  }

  function appendNewTask(taskName, className) {
    const newProjectElement = createProjectElement(className, projectName);
    projectsContainer.appendChild(newProjectElement);
  }

  function clearContainer(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  function clearDashboard() {
    clearContainer(newContainer);
    clearContainer(inProgressContainer);
    clearContainer(finishedContainer);
  }

  function updateTasks(project, tasksArr) {
    tasksArr.forEach((task) => {
      const container = createTaskContainer(task);
      container.setAttribute("data-custom", project.name);
      if (task.status === "New") newContainer.appendChild(container);
      else if (task.status === "In progress") {
        inProgressContainer.appendChild(container);
      } else finishedContainer.appendChild(container);
    });
  }

  return {
    createProjectElement,
    createParagraphElement,
    createButtonElement,
    createCheckboxElement,
    createLabelElement,
    appendProject,
    updateTasks,
    taskMenuEventListeners,
    clearDashboard,
  };
})();

export default DOM;
