import './style.css';
import { ToDoList } from './todo';
import { Projects, CurrentProject } from './project';
import { renderToDoList, renderProject, renderAllProjects, renderCreateButton} from './todo-dom';


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


function hideDefaultCard() {
    const defaultCard = document.querySelector(".default-card");
    defaultCard.style.display = 'none'
}


renderProject(sundayChores)

allProjects.setProject(sundayChores)

console.log(allProjects.currentProject)

const projectsButton = document.getElementById('projects')

function hideProjectLists() {
    const projectLists = document.getElementsByClassName('list-card')
    for (let list of projectLists) {
        list.style.display = 'none'
    }
}




projectsButton.addEventListener('click', function() {
    const createButton = document.querySelector('.create-button');
    createButton.addEventListener('click', showProjectModal)
    
    closeModal()
    hideProjectLists()
    hideDefaultCard()
    renderAllProjects(allProjects.projects);
    renderCreateButton()
    

})


function closeModal()  {   
    const closeModalButtons = document.getElementsByClassName('close-modal')
    for (let i = 0; i < closeModalButtons.length; i++) {
        closeModalButtons[i].addEventListener('click', function() {
        const modal = this.parentNode.parentNode
        modal.style.display = 'none'
  })}
}

container.appendChild(renderCreateButton())
const createButton = document.querySelector('.create-button');

function showListModal() {
    const modal = document.getElementById('create-list-modal')
    modal.style.display = 'block';
}
function showProjectModal() {
    const modal = document.getElementById('create-project-modal')
    modal.style.display = 'block';
}


const form = document.getElementById('create-list-form');

form.addEventListener("submit", function(event) {
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
        
        closeModal();
        
        console.log(sundayChores)
        
    })
    
    function openProject(e) {

        if(!e.target.classList.contains('project-card')) {
            return
        };
            const projectCards = document.getElementsByClassName('project-card');
            for (let card of projectCards) {
                card.style.display = 'none';
            }
            let index = e.target.id;
            renderProject(allProjects.projects[index])
            allProjects.setProject(allProjects.projects[index])

    }
   
    
    const closeButton = document.querySelector('.close-modal');
    const removeButton = document.querySelector('.close-list')
    let selectedProject = document.querySelector('.project');
    let projectsContainer = document.querySelector('.project-container');
    // createButton.addEventListener("click", showListModal);
    
    
    
    
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

    selectedProject.addEventListener("click", removeListCard)
    
    projectsContainer.addEventListener('click', openProject)