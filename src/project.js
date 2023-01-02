class Projects {
  constructor() {
    this.projects = [];
    
    this.Project = function(name) {
      this.name = name;
      this.todoLists = [];
      
      this.addList = function(list) {
        list.id = this.todoLists.length;
        this.todoLists.push(list);
       
      };
      
      this.removeList = function(id) {
        let index = this.todoLists.findIndex(list => list.id === id);
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
    }
  
    addProject(project) {
      this.projects.push(project);
    }
  
    removeProject(project) {
      let index = this.projects.indexOf(project);
      if (index > -1) {
        this.projects.splice(index, 1);
      }
    }
  
    displayProjects() {
      console.log("Projects:");
      this.projects.forEach(function(project) {
        project.displayLists();
      });
    }
  }

  class CurrentProject {
    constructor() {
      this.currentProject = null;
    }

    setCurrentProject(project) {
      this.currentProject = project;
    }

    getCurrentProject() {
      return this.currentProject;
    }
  }

  export {Projects, CurrentProject};
  

