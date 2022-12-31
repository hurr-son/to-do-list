import './style.css';
import { ToDoList } from './todo';
import { Projects } from './project';
import { renderToDoList, renderProject, renderAllProjects } from './todo-dom';

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
// sundayChores.displayLists()



// To render a single list, do this
// createToDoList(groceryList);


// To render all lists in a project, do this
renderAllProjects(allProjects.projects);

console.log(allProjects.projects)