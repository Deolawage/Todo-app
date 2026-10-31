// appController.js

import ProjectManager from "./ProjectManager.js";
import StorageManager from "./Storage.js";
import renderSidebar from "../dom/sidebar.js";


class AppController{
    constructor(){
        this.projectManager = new ProjectManager();
        this.selectedTodoId = null;

        this.initialize();
    }

    initialize(){
        const savedData = StorageManager.getStore();

        if(savedData){
            this.projectManager.restoreFromData(savedData);
            this.selectedTodoId = savedData.selectedTodoId;

        }else{
            this.projectManager.addProject("Default");
        }

        const selectedProject = this.projectManager.getSelectedProject();


        if(
            !selectedProject ||
            !selectedProject.findTodo(this.selectedTodoId)
        ){
            this.selectedTodoId = null;
        }

        this.saveState();
        this.render();
    }

    saveState(){
        StorageManager.saveStore(this.projectManager, this);
    }

    render(){
        renderSidebar(
            this.projectManager.projects,
            this.projectManager.selectedProjectId,

            (projectId) => this.selectProject(projectId), 

             () => {
    const name = prompt("Enter project name:");

    if (name && name.trim()) {
        this.addProject(name.trim());
    }
},

      (projectId) => this.deleteProject(projectId)
            );
        }

        selectProject(projectId) {
    this.projectManager.selectProject(projectId);

    this.saveState();
    this.render();
}


    addProject(name){
        const project = this.projectManager.addProject(name);

        this.projectManager.selectProject(project.id);


        this.saveState();
        this.render();
    }


    deleteProject(projectId){

        const wasSelected = this.projectManager.selectedProjectId === projectId;

        this.projectManager.deleteProject(projectId);

        if(wasSelected) {
        this.selectedTodoId = null;
        }

        this.saveState();
        this.render();
    }


    addTodo(todoData){

        const selectedProject = this.projectManager.getSelectedProject();

    if (!selectedProject) return;

    const todo = selectedProject.addTodo(todoData);

    this.selectedTodoId = todo.id;

    this.saveState();
    this.render();
    
    }

    }


export default AppController;