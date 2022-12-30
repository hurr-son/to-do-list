function Project(name) {
    this.name = name;
    this.todoLists = [];

    this.addList = function(list) {
        this.todoLists.push(list);
    };

    this.removeList = function(list) {
        let index = this.todoLists.indexOf(list);
        if (index > -1) {
            this.todoLists.splice(index, 1);
        }
    };

    this.displayLists = function() {
        console.log("Project: " + this.name);
        this.todoLists.forEach(function(list) {
            list.displayList();
        });
    };
}

export {Project};