class Project {
  constructor(name) {
    this.name = name;
  }

  addTask() {
    console.log(`${this.name} has been added`);
  }

  deleteTask() {
    console.log(`${this.name} has been deleted`);
  }
}

export { Project };
