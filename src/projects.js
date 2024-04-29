import loadMain from "./main.js";

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

const projectsForm = document.querySelector(".newProject");
projectsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const mainElements = loadMain();

  projectsForm.reset();
  mainElements.closeModal(mainElements.projectsModal);
});

export { Project };
