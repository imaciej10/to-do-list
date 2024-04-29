import loadMain from "./main.js";

class Task {
  constructor(title, description, dueDate, priority, notes, favorite, status) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.favorite = favorite;
    this.status = status;
  }

  toggleStatus() {
    this.status = "done";
  }

  togglePriority() {
    this.priority = "xd";
  }

  checklist() {
    this.checklist = true;
  }
}

const getInputvalues = function () {
  const taskTitle = document.getElementById("name").value;
  const taskDescription = document.getElementById("description").value;
  const taskDate = document.getElementById("date").value;
  const taskPriority = document.querySelector(
    'input[name="priority"]:checked'
  ).value;
  const taskNotes = document.getElementById("notes").value;
  const taskFavorite = document.getElementById("favorite").checked;
  const taskStatus = document.getElementById("status").value;

  return new Task(
    taskTitle,
    taskDescription,
    taskDate,
    taskPriority,
    taskNotes,
    taskFavorite,
    taskStatus
  );
};

const tasksForm = document.querySelector(".newTask");

tasksForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const mainElements = loadMain();
  const newTask = getInputvalues();
  console.log(newTask);

  tasksForm.reset();
  mainElements.closeModal(mainElements.tasksModal);
});

export { Task };
