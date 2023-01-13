import "./style.css";
import { ToDoList } from "./todo";
import { Projects, CurrentProject } from "./project";
import {
  renderToDoList,
  renderProject,
  renderAllProjects,
  renderCreateButton,
  renderProjectInput,
  renderEditModeCard,
} from "./todo-dom";

(function () {
  let isProject = true;
  let isProjects = false;
  let selectedProject = document.querySelector(".project");

  const container = document.querySelector(".lists-container");

  const allProjects = new Projects();

  let sundayChores = new allProjects.Project("Sunday Chores");
  let homework = new allProjects.Project("Homework");

  allProjects.addProject(sundayChores);
  allProjects.addProject(homework);

  let groceryList = new ToDoList(
    "Groceries",
    "List for Sunday grocery run",
    "2002-02-02",
    "Can wait",
    "Don't forget to say high to Jerry at the front desk. You guys haven't seen each other in a while."
  );
  groceryList.addItem("Eggs");
  groceryList.addItem("Bread");
  groceryList.addItem("Milk");

  let houseChores = new ToDoList(
    "House Chores",
    "",
    "2010-01-04",
    "Anytime",
    ""
  );
  houseChores.addItem("Do laundry");
  houseChores.addItem("Take the trash out");
  houseChores.addItem("Clean the bathroom");
  houseChores.addItem("Vacuum the apartment");

  let mondayHomework = new ToDoList("monHW", "", "", "", "");
  let tuesdayHomework = new ToDoList("tuesHW", "", "", "", "");

  sundayChores.addList(groceryList);
  sundayChores.addList(houseChores);

  homework.addList(mondayHomework);
  homework.addList(tuesdayHomework);

  renderProject(sundayChores);

  allProjects.setProject(sundayChores);

  container.addEventListener("click", (e) => {
    const listContainer = e.target.closest(".lists-container");
    if (!listContainer) return;

    const viewCards = listContainer.querySelectorAll(".view-card");
    const editCards = listContainer.querySelectorAll(".edit-card");
    const parentId = e.target.parentNode.id;

    viewCards.forEach((viewCard) => {
      if (viewCard.id === parentId) {
        if (e.target.classList.contains("edit-button")) {
          listContainer.setAttribute("data-state", "edit");
          viewCard.style.display = "none";
        } else if (e.target.classList.contains("cancel-button")) {
          listContainer.setAttribute("data-state", "default");
          viewCard.style.display = "flex";
        } else if (e.target.classList.contains("save-button")) {
          listContainer.setAttribute("data-state", "default");
          viewCard.style.display = "flex";
        }
      }
    });

    editCards.forEach((editCard) => {
      if (editCard.id === parentId) {
        if (e.target.classList.contains("save-button")) {
          listContainer.setAttribute("data-state", "default");
          editCard.style.display = "none";
        } else if (e.target.classList.contains("edit-button")) {
          editCard.style.display = "flex";
        } else if (e.target.classList.contains("cancel-button")) {
          editCard.style.display = "none";
        }
      }
    });
  });

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("save-button")) {
      const listContainer = e.target.closest(".lists-container");
      const parentId = parseInt(e.target.parentNode.id);
      const lists = allProjects.currentProject.getCurrentProject().todoLists;
      const list = lists.find((list) => list.id === parentId);
      const editCard = listContainer.querySelector(
        `.edit-card[id="${parentId}"]`
      );
      const listItemInputs = editCard.querySelectorAll(
        ".edit-list-items li input"
      );

      const newItems = [];
      for (let i = 0; i < listItemInputs.length; i++) {
        if (listItemInputs[i].value !== "") {
          newItems.push(listItemInputs[i].value);
        } else {
          listItemInputs[i].parentNode.remove();
        }
      }

      for (let i = 0; i < newItems.length; i++) {
        list.editItem(list.items[i], newItems[i]);
      }

      console.log(newItems);

      list.updateData(
        editCard.querySelector(".edit-list-title").value,
        editCard.querySelector(".edit-list-description").value,
        editCard.querySelector(".edit-list-due-date").value,
        editCard.querySelector(".edit-list-priority").value
      );

      const viewCard = listContainer.querySelector(
        `.view-card[id="${parentId}"]`
      );

      viewCard.querySelector(".list-title").textContent = list.name;
      viewCard.querySelector(".description").textContent = list.description;
      viewCard.querySelector(".due-date").textContent = list.dueDate;
      viewCard.querySelector(".priority").textContent = list.priority;

      const listItemContainer = viewCard.querySelector(".list-items");
      listItemContainer.innerHTML = "";
      for (let item of newItems) {
        if (item !== "") {
          listItemContainer.innerHTML += `<li>${item}</li>`;
        }
      }
    }
  });

  const addItemButton = document.getElementById("add-item-button");

  addItemButton.addEventListener("click", function () {
    const itemInputsContainer = document.getElementById("add-item-input");

    const numInputs = itemInputsContainer.getElementsByTagName("input").length;

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "item";
    newInput.name = `item-${numInputs + 1}`;

    const newLabel = document.createElement("label");
    newLabel.htmlFor = newInput.id;
    newLabel.className = "label";
    newLabel.innerHTML = `Item ${numInputs + 1}`;

    itemInputsContainer.appendChild(newLabel);
    itemInputsContainer.appendChild(newInput);
  });

  function editProject(e) {
    if (!e.target.classList.contains("project-card")) {
      return;
    }

    const projectCard = e.target;
    projectCard.addEventListener("click", function (e) {
      editProjectModal.style.display = "block";
    });
  }

  function removeProjectLists() {
    const listCards = document.getElementsByClassName("list-card");
    for (let i = listCards.length - 1; i >= 0; i--) {
      if (listCards[i].parentNode) {
        listCards[i].remove();
      }
    }
  }

  function removeProjects() {
    const projectCards = document.getElementsByClassName("project-card");
    for (let i = projectCards.length - 1; i >= 0; i--) {
      if (projectCards[i].parentNode) {
        projectCards[i].remove();
      }
    }
  }

  const projectsButton = document.getElementById("projects");

  function handleClick() {
    isProject = false;
    isProjects = true;
    renderAllProjects(allProjects.projects);
    renderCreateButton();
    removeProjectLists();
    removeClickEventListener(projectsButton, handleClick);
  }

  function removeClickEventListener(element, callback) {
    element.removeEventListener("click", callback);
  }

  if (isProject === true) {
    projectsButton.addEventListener("click", handleClick);
  } else return;

  document.addEventListener("click", function (event) {
    if (event.target.matches(".close-modal")) {
      const modal = event.target.parentNode.parentNode;
      modal.style.display = "none";
    }
  });

  container.appendChild(renderCreateButton());

  function showListModal() {
    const modal = document.getElementById("create-list-modal");
    modal.style.display = "block";
  }
  function showProjectModal() {
    const modal = document.getElementById("create-project-modal");
    modal.style.display = "block";
  }
  const createButton = document.querySelector(".create-button");

  createButton.addEventListener("click", function () {
    if (isProject) {
      showListModal();
    } else {
      showProjectModal();
    }
  });

  const form = document.getElementById("create-list-form");

  form.addEventListener("submit", function (event) {
    const modal = document.querySelector(".modal");
    const itemInputs = document.getElementsByClassName("item");
    const itemLabels = document.getElementsByClassName("label");
    event.preventDefault();

    const formData = new FormData(form);

    const todoList = new ToDoList(
      formData.get("name"),
      formData.get("description"),
      formData.get("due-date"),
      formData.get("priority")
    );

    allProjects.currentProject.getCurrentProject().addList(todoList);

    for (let input of itemInputs) {
      if (input.value !== "") {
        todoList.addItem(input.value);
        console.log(input);
      }
    }

    container.appendChild(renderToDoList(todoList));
    container.appendChild(renderEditModeCard(renderToDoList(todoList)));

    modal.style.display = "none";

    for (let i = itemLabels.length - 1; i > 0; i--) {
      itemLabels[i].remove();
      itemInputs[i].remove();
    }

    form.reset();
  });

  function openProject(e) {
    if (!e.target.classList.contains("open-button")) {
      return;
    }
    isProject = true;
    isProjects = false;
    removeProjects();
    projectsButton.addEventListener("click", handleClick);
    const projectCards = document.getElementsByClassName("project-card");
    for (let card of projectCards) {
      card.style.display = "none";
    }
    let index = e.target.id;
    renderProject(allProjects.projects[index]);
    allProjects.setProject(allProjects.projects[index]);
    console.log(allProjects.currentProject);
  }

  const projectForm = document.getElementById("create-project-form");
  console.log(projectForm);

  projectForm.addEventListener("submit", function (event) {
    const modal = document.getElementById("create-project-modal");

    event.preventDefault();

    const formData = new FormData(projectForm);

    const project = new allProjects.Project(formData.get("name"));
    allProjects.addProject(project);
    console.log(allProjects.projects);

    renderProjectInput(project);

    modal.style.display = "none";

    projectForm.reset();
  });

  function removeListCard(e) {
    if (!e.target.classList.contains("close-list")) {
      return;
    }

    if (e.target.closest("div").classList.contains("list-card")) {
      const editCards = document.querySelectorAll(".edit-card");
      const btn = e.target;
      const listId = parseInt(btn.closest("div").id, 10);
      allProjects.currentProject.getCurrentProject().removeList(listId);
      editCards.forEach((card) => {
        if (card.id == btn.id) {
          card.remove();
        }
      });
      btn.closest("div").remove();

      console.log(sundayChores.todoLists);
    } else if (e.target.closest("div").classList.contains("project-card")) {
      const btn = e.target;
      const projectId = parseInt(btn.closest("div").id, 10);
      allProjects.removeProject(projectId);
      btn.closest("div").remove();
      console.log(allProjects.projects);
    }
  }
  const defaultCard = document.querySelector(".default-card");
  // console.log(renderEditModeCard(defaultCard));

  selectedProject.addEventListener("click", removeListCard);
  selectedProject.addEventListener("click", openProject);
})();
