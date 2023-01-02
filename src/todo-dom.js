import { Projects } from "./project";

function renderToDoList(list) {
    
    const listCard = document.createElement('div');
    listCard.className = 'list-card'
    listCard.id = list.id

    const closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.className = 'close-list';
    closeButton.id = list.id

    listCard.appendChild(closeButton);
    const heading = document.createElement('h3');
    heading.className = 'list-title';
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
    ul.className = 'list-items'
    
    list.items.forEach(function(item) {

        const li = document.createElement('li');

        const itemLi = document.createElement('li');
        

        itemLi.innerHTML = item;

        li.appendChild(itemLi);
        
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

function removeListCard(e) {
    if(!e.target.classList.contains('close-list')) {
        return;
    }
        const btn = e.target;
        const listId = btn.closest('div').id;
        const currentProject = get
        btn.closest('div').remove()
        



}


export {renderToDoList, renderProject, renderAllProjects, renderCreateButton};