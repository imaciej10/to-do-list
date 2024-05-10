export default class Project {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.tasks = [];
    this.filteredTasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  filterTasksByDate(condition) {
    this.filteredTasks = this.tasks.filter((task) => condition(task));
  }
  filterTasksByImportance() {
    this.filteredTasks = this.tasks.filter((task) => task.priority === "High");
  }
  filterTasksByFavorite() {
    this.filteredTasks = this.tasks.filter((task) => task.favorite === true);
  }
  filterTasksByFinished() {
    this.filteredTasks = this.tasks.filter(
      (task) => task.status === "Finished"
    );
  }
  toggleStatus(index) {
    this.tasks[index].favorite = !this.tasks[index].favorite;
  }
  copyTasks(array) {
    this.tasks = array;
  }
}

export const getNewProject = function () {
  const projectTitle = document.getElementById("project").value;
  const color = document.getElementById("color-picker").value;

  return new Project(projectTitle, color);
};

export const getEditedProject = function () {
  const newTitle = document.getElementById("editedTitle").value;
  const newColor = document.getElementById("editedColor").value;

  return [newTitle, newColor];
};

export const getDefaultProjects = function () {
  const project1 = new Project("Fix espresso machine", "#CCDBDC");
  const project2 = new Project("Learn how to code", "#D58D7E");

  return [project1, project2];
};

export const populateProjectForm = function (project) {
  const editedTitle = document.querySelector("#editedTitle");
  const editedColor = document.querySelector("#editedColor");
  console.log(editedTitle);
  editedTitle.value = project.name;
  editedColor.value = project.color;
};
