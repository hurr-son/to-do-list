function ToDoList(name, description, dueDate, priority, notes) {
  this.name = name;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.completed = false;
  this.items = [];

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.editItem = function (item, newItem) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items[index] = newItem;
    }
  };

  this.removeItem = function (item) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  };

  this.updateData = function (name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  };

  this.setCompleted = function () {
    this.completed = true;
  };

  this.displayList = function () {
    console.log(this.name);
    console.log("Description: " + this.description);
    console.log("Due date: " + this.dueDate);
    console.log("Priority: " + this.priority);
    console.log("Notes: " + this.notes);
    for (let i = 0; i < this.items.length; i++) {
      console.log(i + 1 + ". " + this.items[i]);
    }
  };
}

export { ToDoList };
