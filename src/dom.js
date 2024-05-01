const DOM = (function () {
  const newContainer = document.querySelector(".new");
  const inProgressContainer = document.querySelector(".inProgress");
  const finishedContainer = document.querySelector(".finished");
  const projectsContainer = document.querySelector(".projectsContainer");

  function createProjectElement(className, projectName) {
    const div = document.createElement("div");
    div.textContent = projectName;
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

  function createButtonElement(className) {
    const button = document.createElement("button");
    button.classList.add(className);
    button.textContent = "Remove";
    return button;
  }

  function createImageElement(className, source = "image/cover.jpg") {
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

  function appendProject(className, projectName) {
    const newProjectElement = createProjectElement(className, projectName);
    projectsContainer.appendChild(newProjectElement);
    newProjectElement.addEventListener("click", () =>
      projectsContainer.removeChild(newProjectElement)
    );
  }

  function appendNewTask(taskName, className) {
    const newProjectElement = createProjectElement(className, projectName);
    projectsContainer.appendChild(newProjectElement);
  }

  function updateTasks(project) {
    project.tasks.forEach((task) => {
      const xd = createParagraphElement("kornik", task.title);
      if (task.status === "New") newContainer.appendChild(xd);
      else if (task.status === "In progress") {
        inProgressContainer.appendChild(xd);
      } else finishedContainer.appendChild(xd);
    });
  }

  return {
    createProjectElement,
    createParagraphElement,
    createButtonElement,
    createImageElement,
    createCheckboxElement,
    createLabelElement,
    appendProject,
    updateTasks,
  };
})();

export default DOM;
