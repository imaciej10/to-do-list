export default class Project {
  constructor(name, tasks) {
    this.name = name;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask() {
    console.log(`${this.name} has been deleted`);
  }
}

export const getNewProject = function () {
  const projectTitle = document.getElementById("project").value;

  return new Project(projectTitle);
};

export const getDefaultProjects = function () {
  const project1 = "Fix espresso machine";
  const project2 = "Learn how to code";

  return [new Project(project1), new Project(project2)];
};
