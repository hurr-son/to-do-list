import './style.css';
import { ToDoList } from './todo';
import { Projects } from './project';
import { renderToDoList, renderProject, renderAllProjects, renderCreateButton } from './todo-dom';


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
// groceryList.removeItem("Eggs");



let houseChores = new ToDoList("House Chores", "", "01-01-2023", "High", "");
houseChores.addItem("Do laundry");
houseChores.addItem("Take the trash out");
houseChores.addItem("Clean the bathroom");
houseChores.addItem("Vacuum the apartment");


sundayChores.addList(groceryList);
sundayChores.addList(houseChores);

renderProject(sundayChores)


// To render all lists in a project, do this
// renderAllProjects(allProjects.projects);


function closeModal() {
    const modal = document.getElementById('create-list-modal')
    
    modal.style.display = 'none';
}

container.appendChild(renderCreateButton())
const createButton = document.querySelector('.create-button');

function showModal() {
    const modal = document.getElementById('create-list-modal')
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
        const listCard = document.querySelector('.list-card')
        listCard.insertAdjacentElement('afterend', createButton)
        
    })
    
    
    const closeButton = document.querySelector('.close');
    createButton.addEventListener("click", showModal);
    closeButton.addEventListener("click", closeModal);
    
    
    
    