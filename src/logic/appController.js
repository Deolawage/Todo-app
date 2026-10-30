// appController.js

import ProjectManager from "./ProjectManager.js";
import StorageManager from "./Storage.js";


class AppController{
    constructor(){
        this.projectManager = new ProjectManager();
        this.selectedTodoId = null;

        this.initialize();
    }

    initialize(){
        const saveData = StorageManager.getStore();

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
    }

    saveState(){
        StorageManager.saveStore(this.projectManager, this);
    }
}

export default AppController;