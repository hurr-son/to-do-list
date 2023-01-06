import { Projects } from "./project";

function renderToDoList(list) {
  const listCard = document.createElement("div");
  listCard.className = "list-card";
  listCard.classList.add("view-card");
  listCard.id = list.id;

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;";
  closeButton.className = "close-list";
  closeButton.id = list.id;

  listCard.appendChild(closeButton);
  const heading = document.createElement("h3");
  heading.className = "list-title";
  heading.innerHTML = list.name;
  listCard.appendChild(heading);

  const descSpan = document.createElement("span");
  descSpan.innerHTML = `${list.description}`;
  descSpan.className = "description";
  listCard.appendChild(descSpan);

  const dueDateSpan = document.createElement("span");
  dueDateSpan.innerHTML = `${list.dueDate}`;
  dueDateSpan.className = "due-date";
  listCard.appendChild(dueDateSpan);

  const prioritySpan = document.createElement("span");
  prioritySpan.innerHTML = `${list.priority}`;
  prioritySpan.className = "priority";
  listCard.appendChild(prioritySpan);

  const ul = document.createElement("ul");
  ul.className = "list-items";

  list.items.forEach(function (item) {
    const li = document.createElement("ul");

    const itemLi = document.createElement("li");

    itemLi.innerHTML = item;

    li.appendChild(itemLi);

    ul.appendChild(li);
  });
  listCard.appendChild(ul);
  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "edit-button";
  editButton.innerHTML = "Edit";
  listCard.appendChild(editButton);
  return listCard;
}

function renderEditModeCard(listCard) {
  const editCard = document.createElement("div");
  editCard.classList.add("list-card", "edit-card");
  editCard.style.display = "none";
  editCard.id = listCard.id;

  const title = listCard.querySelector(".list-title");
  const description = listCard.querySelector(".description");
  const dueDate = listCard.querySelector(".due-date");
  const priority = listCard.querySelector(".priority");
  const listItems = listCard.querySelectorAll(".list-items li");

  const titleInput = document.createElement("input");
  titleInput.classList.add("edit-list-title");
  titleInput.value = title.textContent;

  const descriptionInput = document.createElement("textarea");
  descriptionInput.classList.add("edit-list-description");
  descriptionInput.value = description.innerHTML;
  console.log(description);

  const dueDateInput = document.createElement("input");
  dueDateInput.classList.add("edit-list-due-date");
  dueDateInput.type = "date";
  dueDateInput.value = dueDate.innerHTML;
  console.log(typeof dueDate.innerHTML);

  const priorityInput = document.createElement("select");
  priorityInput.classList.add("edit-list-priority");
  priorityInput.innerHTML = `
    <option value="Anytime" ${
      priority === "Anytime" ? "selected" : ""
    }>Anytime</option>
    <option value="Can wait" ${
      priority === "Can wait" ? "selected" : ""
    }>Can wait</option>
    <option value="Today" ${
      priority === "Today" ? "selected" : ""
    }>Today</option>
    <option value="Immediately" ${
      priority === "Immediately" ? "selected" : ""
    }>Immediately</option>
  `;

  priorityInput.value = priority.innerHTML;

  const listItemsInput = document.createElement("ul");
  listItemsInput.classList.add("edit-list-items");

  listItems.forEach((item) => {
    const listItemInput = document.createElement("li");
    const input = document.createElement("input");
    input.value = item.textContent;
    console.log(item);
    listItemInput.appendChild(input);
    listItemsInput.appendChild(listItemInput);
  });

  const saveButton = document.createElement("button");
  saveButton.classList.add("save-button");
  saveButton.textContent = "Save";

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("cancel-button");
  cancelButton.textContent = "Cancel";

  editCard.appendChild(titleInput);
  editCard.appendChild(descriptionInput);
  editCard.appendChild(dueDateInput);
  editCard.appendChild(priorityInput);
  editCard.appendChild(listItemsInput);
  editCard.appendChild(saveButton);
  editCard.appendChild(cancelButton);

  return editCard;
}

function renderCreateButton() {
  const createButton = document.createElement("div");
  createButton.className = "create-button";

  createButton.innerHTML = "+";
  return createButton;
}

function renderProject(project) {
  const container = document.querySelector(".lists-container");
  const projectTitle = document.querySelector(".project-title");
  projectTitle.innerHTML = project.name;

  project.todoLists.forEach((list) => {
    container.appendChild(renderToDoList(list));
    container.appendChild(renderEditModeCard(renderToDoList(list)));
  });
}

function renderProjectInput(project) {
  const projectContainer = document.querySelector(".project-container");

  const projectsWrapper = document.createElement("div");
  projectsWrapper.className = "project-card";
  projectsWrapper.id = project.id;

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;";
  closeButton.className = "close-list";

  const heading = document.createElement("h3");
  heading.innerHTML = project.name;

  const openButton = document.createElement("button");
  openButton.type = "button";
  openButton.innerHTML = "Open";
  openButton.className = "open-button";
  projectsWrapper.appendChild(openButton);

  const list = document.createElement("ul");
  projectsWrapper.appendChild(closeButton);
  projectsWrapper.appendChild(heading);
  projectsWrapper.appendChild(list);

  project.todoLists.forEach(function (todoList) {
    const listItem = document.createElement("li");
    listItem.innerHTML = todoList.name;

    list.appendChild(listItem);
  });
  projectContainer.appendChild(projectsWrapper);
}

function renderAllProjects(projects) {
  const projectContainer = document.querySelector(".project-container");

  projects.forEach(function (project) {
    const projectsWrapper = document.createElement("div");
    projectsWrapper.className = "project-card";
    projectsWrapper.id = project.id;
    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.className = "close-list";

    const heading = document.createElement("h3");
    heading.innerHTML = project.name;

    const list = document.createElement("ul");
    projectsWrapper.appendChild(closeButton);
    projectsWrapper.appendChild(heading);
    projectsWrapper.appendChild(list);

    const openButton = document.createElement("button");
    openButton.type = "button";
    openButton.innerHTML = "Open";
    openButton.className = "open-button";
    openButton.id = project.id;
    projectsWrapper.appendChild(openButton);

    project.todoLists.forEach(function (todoList) {
      const listItem = document.createElement("li");
      listItem.innerHTML = todoList.name;

      list.appendChild(listItem);
    });
    projectContainer.appendChild(projectsWrapper);
  });
}

export {
  renderToDoList,
  renderProject,
  renderAllProjects,
  renderCreateButton,
  renderProjectInput,
  renderEditModeCard,
};
