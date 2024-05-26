import { eachDayOfInterval } from "date-fns";

export default class Task {
  constructor(
    title,
    description,
    dueDate,
    priority,
    notes,
    favorite,
    status,
    project
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.favorite = favorite;
    this.status = status;
    this.project = project;
  }
}

export const getInputvalues = function () {
  const taskTitle = document.getElementById("name").value;
  const taskDescription = document.getElementById("description").value;
  const taskDate = document.getElementById("date").value;
  const taskPriority = document.querySelector(
    'input[name="priority"]:checked'
  ).value;
  const taskProject = document.getElementById("projectName").value;
  const taskNotes = document.getElementById("notes").value;
  const taskFavorite = document.getElementById("isFavorite").checked;
  const taskStatus = document.getElementById("status").value;

  return new Task(
    taskTitle,
    taskDescription,
    taskDate,
    taskPriority,
    taskNotes,
    taskFavorite,
    taskStatus,
    taskProject
  );
};

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function updateProjectsInForm(projects, container) {
  clearContainer(container);
  projects.forEach((project) => {
    const option = document.createElement("option");
    option.textContent = project.name;
    container.appendChild(option);
  });
}

export const populateTaskForm = function (task, projects) {
  const editTaskForm = document.querySelector(".editTaskForm");
  const container = editTaskForm.querySelector("#projectName");
  editTaskForm.querySelector("#name").value = task.title;
  editTaskForm.querySelector("#description").value = task.description;

  editTaskForm.querySelector("#date").value = "2024-05-05";
  updateProjectsInForm(projects, container);
  const priorityRadioButton = editTaskForm.querySelector(
    `input[name="priority"][value="${task.priority}"]`
  );

  if (priorityRadioButton) {
    priorityRadioButton.checked = true;
  }
  editTaskForm.querySelector("#projectName").value = task.project;
  editTaskForm.querySelector("#notes").value = task.notes;
  editTaskForm.querySelector("#isFavorite").checked = task.favorite;
  editTaskForm.querySelector("#status").value = task.status;
};

export const getEditedTask = function () {
  const editTaskForm = document.querySelector(".editTaskForm");

  const taskTitle = editTaskForm.querySelector("#name").value;
  const taskDescription = editTaskForm.querySelector("#description").value;
  const taskDate = editTaskForm.querySelector("#date").value;
  const taskPriority = editTaskForm.querySelector(
    'input[name="priority"]:checked'
  ).value;
  const taskProject = editTaskForm.querySelector("#projectName").value;
  const taskNotes = editTaskForm.querySelector("#notes").value;
  const taskFavorite = editTaskForm.querySelector("#isFavorite").checked;
  const taskStatus = editTaskForm.querySelector("#status").value;

  return new Task(
    taskTitle,
    taskDescription,
    taskDate,
    taskPriority,
    taskNotes,
    taskFavorite,
    taskStatus,
    taskProject
  );
};
export const setDefaultDate = function () {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const defaultDate = year + "-" + month + "-" + day;

  document.getElementById("date").value = defaultDate;
};

function setDate(period) {
  let today = new Date();
  let thisWeek = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const prevDay = String(today.getDate() - 1).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  thisWeek = year + "-" + month + "-" + prevDay;
  today = year + "-" + month + "-" + day;

  if (period === "today") return today;
  else if (period === "this week") return thisWeek;
}

export const getProj1Tasks = function () {
  const task1 = new Task(
    "Replace boiler",
    "Use something to pry it",
    setDate("today"),
    "High",
    "How do I do that?",
    false,
    "New",
    "Fix espresso machine"
  );
  const task2 = new Task(
    "Do some descaling",
    "Easy peasy",
    setDate("this week"),
    "Medium",
    "be careful, please!",
    true,
    "In progress",
    "Fix espresso machine"
  );
  const task3 = new Task(
    "Check water container",
    "ya know.. they sometimes get messy",
    setDate("today"),
    "Low",
    "easyyyy",
    false,
    "Finished",
    "Fix espresso machine"
  );

  return [task1, task2, task3];
};

export const getProj2Tasks = function () {
  const task4 = new Task(
    "Implement App",
    "Create a new food delivery app based on recent customer request. Try to use SOLID principles along the way",
    "2024-02-06",
    "High",
    "Don't mess up",
    true,
    "New",
    "Learn how to code"
  );

  const task5 = new Task(
    "Watch coding videos",
    "Gather more knowledge about ES6 modules and encapsulating",
    setDate("today"),
    "Low",
    "yikes",
    false,
    "New",
    "Learn how to code"
  );

  const task6 = new Task(
    "Create calculator",
    "Basic stuff, you should do it",
    setDate("this week"),
    "Medium",
    "don't forget about the functions!",
    false,
    "In progress",
    "Learn how to code"
  );
  return [task4, task5, task6];
};
