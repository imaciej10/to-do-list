const loadMain = function () {
  const main = document.querySelector(".main");
  const newContainer = document.querySelector(".new");
  const inProgressContainer = document.querySelector(".inProgress");
  const finishedContainer = document.querySelector(".finished");

  const addTask = document.getElementById("addTask");
  const today = document.getElementById("today");
  const thisWeek = document.getElementById("thisWeek");
  const important = document.getElementById("important");
  const completed = document.getElementById("completed");
  const addProject = document.getElementById("addProject");
  const finishedProjects = document.getElementById("finishedProjects");
  const tasksModal = document.querySelector(".tasksModal");
  const overlay = document.getElementById("tasksOverlay");
  const projectsModal = document.querySelector(".projectsModal");
  const closeTasksBtn = document.querySelector("button[data-close-button]");
  const closeProjectsBtn = document.getElementById("exitProjects");

  const closeModal = function (window) {
    window.classList.remove("active");
    overlay.classList.remove("active");
  };

  const openModal = function (window) {
    window.classList.add("active");
    overlay.classList.add("active");
  };

  return {
    main,
    newContainer,
    inProgressContainer,
    finishedContainer,
    addTask,
    today,
    thisWeek,
    important,
    completed,
    addProject,
    finishedProjects,
    tasksModal,
    overlay,
    closeProjectsBtn,
    closeTasksBtn,
    projectsModal,
    closeModal,
    openModal,
  };
};

export default loadMain;
