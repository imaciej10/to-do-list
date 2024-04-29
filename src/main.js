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
  const tasksOverlay = document.getElementById("tasksOverlay");

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
    tasksOverlay,
  };
};

export default loadMain;
