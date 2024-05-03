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

  deleteTask() {
    console.log(`${this.name} has been deleted`);
  }

  filterTasksByDate(condition) {
    this.filteredTasks = this.tasks.filter((task) => condition(task));
  }
  filterTasksByImportance() {
    this.filteredTasks = this.tasks.filter((task) => task.priority === "High");
  }
  filterTasksByFinished() {
    this.filteredTasks = this.tasks.filter(
      (task) => task.status === "Finished"
    );
  }
}

export const getNewProject = function () {
  const projectTitle = document.getElementById("project").value;
  const color = document.getElementById("color-picker").value;

  return new Project(projectTitle, color);
};

export const getDefaultProjects = function () {
  const project1 = new Project("Fix espresso machine", "#FF0000");
  const project2 = new Project("Learn how to code", "#FFFF00");

  return [project1, project2];
};
