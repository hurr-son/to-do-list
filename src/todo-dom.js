import { Projects } from "./project";

function renderToDoList(list) {
    
    const listCard = document.createElement('div');
    listCard.className = 'list-card'
    const heading = document.createElement('h3');
    heading.innerHTML = list.name;
    listCard.appendChild(heading);

    const descSpan = document.createElement('span');
    descSpan.innerHTML = `Description: ${list.description}`;
    listCard.appendChild(descSpan);

    const dueDateSpan = document.createElement('span');
    dueDateSpan.innerHTML = `Due: ${list.dueDate}`;
    listCard.appendChild(dueDateSpan);

    const prioritySpan = document.createElement('span');
    prioritySpan.innerHTML = `Priority: ${list.priority}`;
    listCard.appendChild(prioritySpan);

    const ul = document.createElement("ul");
    
    list.items.forEach(function(item) {

        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            list.setCompleted(item, this.checked);
        });

        const label = document.createElement('label');
        label.innerHTML = item;

        li.appendChild(checkbox);
        li.appendChild(label);
        ul.appendChild(li);

    });
    listCard.appendChild(ul);
    return listCard;
}


function renderCreateButton() {
    const createButton = document.createElement('div');
    createButton.className = 'create-button';
    createButton.classList.add('list-card')
    createButton.innerHTML = '+';
    return createButton;
}


function renderProject(project) {
    const container = document.querySelector('.lists-container');
    const projectTitle = document.querySelector('.project-title');
    projectTitle.innerHTML = project.name

    console.log(project.todoList);
    project.todoLists.forEach(list => {
        container.appendChild(renderToDoList(list));
        
    });

    
}


function renderAllProjects(projects) {
    const content = document.getElementById('content');
    
    const projectsWrapper = document.createElement('div');
    projectsWrapper.className = 'projects-wrapper';

    projects.forEach(function(project) {
        const heading = document.createElement('h3');
        heading.innerHTML = project.name;

        const list = document.createElement('ul');

        project.todoLists.forEach(function(todoList) {
            const listItem = document.createElement('li');
            listItem.innerHTML = todoList.name;
        
            list.appendChild(listItem);
        })
        
        projectsWrapper.appendChild(heading);
        projectsWrapper.appendChild(list);
        content.appendChild(projectsWrapper);
    })


}


export {renderToDoList, renderProject, renderAllProjects, renderCreateButton};