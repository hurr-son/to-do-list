import './style.css';
import { ToDoList } from './todo';
import { Projects, CurrentProject } from './project';
import { renderToDoList, renderProject, renderAllProjects, renderCreateButton, renderProjectInput} from './todo-dom';

(function(){
let isProject = true
let isProjects = false


const container = document.querySelector('.lists-container');

const allProjects = new Projects()

let sundayChores = new allProjects.Project("Sunday Chores"); 
let homework = new allProjects.Project("Homework");

allProjects.addProject(sundayChores);
allProjects.addProject(homework);

let groceryList = new ToDoList("Groceries", "List for Sunday grocery run", "01-01-2023", "High", "Don't forget to say high to Jerry at the front desk. You guys haven't seen each other in a while.");
groceryList.addItem("Eggs");
groceryList.addItem("Bread");
groceryList.addItem("Milk");




let houseChores = new ToDoList("House Chores", "", "01-01-2023", "High", "");
houseChores.addItem("Do laundry");
houseChores.addItem("Take the trash out");
houseChores.addItem("Clean the bathroom");
houseChores.addItem("Vacuum the apartment");


let mondayHomework = new ToDoList("monHW", "", "", "", "");


sundayChores.addList(groceryList);
sundayChores.addList(houseChores);

homework.addList(mondayHomework)
homework.addList(mondayHomework)




renderProject(sundayChores)

allProjects.setProject(sundayChores)


const addItemButton = document.getElementById('add-item-button');

addItemButton.addEventListener('click', function() {
    const itemInputsContainer = document.getElementById('add-item-input');

    const numInputs = itemInputsContainer.getElementsByTagName('input').length;

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'item';
    newInput.name = `item-${numInputs + 1}`;

    const newLabel = document.createElement('label');
    newLabel.htmlFor = newInput.id;
    newLabel.innerHTML = `Item ${numInputs + 1}`;

    itemInputsContainer.appendChild(newLabel);
    itemInputsContainer.appendChild(newInput);
})



const editModal = document.getElementById('edit-list-modal');

function editList(e) {
    if(!e.target.classList.contains('edit-button')) {
        return
    }

    const btn = e.target
    btn.addEventListener("click", function(e) {
        editModal.style.display = 'block'
    })
    
}

function hideDefaultCard() {
    const defaultCard = document.querySelector(".default-card");
    defaultCard.style.display = 'none'
}

function hideProjectLists() {
    const projectLists = document.getElementsByClassName('list-card')
    for (let list of projectLists) {
        list.style.display = 'none'
    }
}

const projectsButton = document.getElementById('projects');

function handleClick() {
  isProject = false;
  isProjects = true;
  hideProjectLists();
  hideDefaultCard();
  renderAllProjects(allProjects.projects);
  renderCreateButton();
  projectsButton.removeEventListener('click', handleClick);
}

projectsButton.addEventListener('click', handleClick);

 
    document.addEventListener('click', function(event) {
      if (event.target.matches('.close-modal')) {
        const modal = event.target.parentNode.parentNode;
        modal.style.display = 'none';
      }
    });



container.appendChild(renderCreateButton())



function showListModal() {
    const modal = document.getElementById('create-list-modal')
    modal.style.display = 'block';
}
function showProjectModal() {
    const modal = document.getElementById('create-project-modal')
    modal.style.display = 'block';
}
const createButton = document.querySelector('.create-button');
createButton.addEventListener('click', function() {
    if(isProject) {
        showListModal();
    } else {
        showProjectModal();
    }
})

console.log(allProjects.currentProject);

const form = document.getElementById('create-list-form');

form.addEventListener("submit", function(event) {
    const modal = document.querySelector('.modal');
    const itemInputs = document.getElementsByClassName('item');
    
    event.preventDefault();
    
    const formData = new FormData(form);
    
    const todoList = new ToDoList(
        formData.get("name"),
        formData.get("description"),
        formData.get("priority"),
        formData.get("due-date")
        );
        
        sundayChores.addList(todoList);
        
        for (let input of itemInputs) {
            if (input.value !== '') {
                todoList.addItem(input.value);
                
            }
        }
        
        container.appendChild(renderToDoList(todoList))
        
        modal.style.display = 'none'
        

    })


  
    
    function openProject(e) {

        if(!e.target.classList.contains('project-card')) {
            return
        };
            isProject = true;
            isProjects = false;
            projectsButton.addEventListener('click', handleClick);
            projectsButton.disabled = false;
            const projectCards = document.getElementsByClassName('project-card');
            for (let card of projectCards) {
                card.style.display = 'none';
            }
            let index = e.target.id;
            renderProject(allProjects.projects[index])
            allProjects.setProject(allProjects.projects[index])

    }

const projectForm = document.getElementById('create-project-form');

projectForm.addEventListener('submit', function(event) {
    const modal = document.getElementById('create-project-modal');
    
    event.preventDefault();
    
      const formData = new FormData(projectForm);
      
      const project = new allProjects.Project(formData.get('name'));
      allProjects.addProject(project);
    
      renderProjectInput(project);
    
      modal.style.display = 'none';  
    });
    
    
    

    // // createButton.addEventListener("click", showListModal);
    // createButton.addEventListener("click", showProjectModal);
    
    
    
    
    function removeListCard(e) {
        
        if(!e.target.classList.contains('close-list')) {
            return;
        }
        
        if(e.target.closest('div').classList.contains('list-card')) {
            
            const btn = e.target;
            const listId = parseInt(btn.closest('div').id, 10);
            allProjects.currentProject.getCurrentProject().removeList(listId);
            btn.closest('div').remove();
            console.log(sundayChores.todoLists);
        }
        
        else if(e.target.closest('div').classList.contains('project-card')) {
            const btn = e.target;
            const projectId = parseInt(btn.closest('div').id, 10);
            allProjects.removeProject(projectId)
            btn.closest('div').remove();
            console.log(allProjects.projects)
        }    
    }
    
    let selectedProject = document.querySelector('.project');
    let projectsContainer = document.querySelector('.project-container');
    selectedProject.addEventListener("click", removeListCard)
    selectedProject.addEventListener("click", editList)
    projectsContainer.addEventListener('click', openProject)

})()