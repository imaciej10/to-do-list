class Task {
  constructor(title, description, dueDate, priority, notes, checklist, status) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
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

export { Task };
