function createToDoList(list) {
    
    const content = document.getElementById('content');
    const listCard = document.createElement('div');
    listCard.className = 'list-card'
    const heading = document.createElement('h2');
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
    listCard.appendChild(ul)
    content.appendChild(heading);
    content.appendChild(listCard)
}

export {createToDoList};