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


function renderProject(project) {
    const content = document.getElementById('content');
    
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    const heading = document.createElement('h2')
    heading.innerHTML = project.name;
    projectCard.appendChild(heading);
    content.appendChild(projectCard)

    project.todoLists.forEach(list => {
        projectCard.appendChild(renderToDoList(list));
        
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


export {renderToDoList, renderProject, renderAllProjects};