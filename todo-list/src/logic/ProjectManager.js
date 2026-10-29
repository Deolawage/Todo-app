//ProjectManager.js

import Project from "./Project.js";


class projectManager{
    constructor(){
        this.projects = [];
        this.selectedProjectId = null;
    }

    addProject(name){

        const project = new Project (name);
        this.projects.push(project);

        if(this.selectedProjectId === null){
            this.selectedProjectId = project.id;
        }

        return project;

    }

    findProject(projectId){
        return this.projects.find(project => project.id === projectId);
    }

    selectProject(projectId){
        const project = this.findProject(projectId);


        if(!project) return;

        this.selectProjectId = project.id;
    }
    getSelectedProject(){
        return this.findProject(this.selectProjectId) ?? null;


    }

    deleteProject(projectId){
        const project = this.findProject(projectId);
        
        if(!project) return;

        this.projects = this.projects.filter(
            project => project.id !== projectId
        );

        if(this.selectedProjectId === projectId){
            this.selectedProjectId = this.projects[0]?.id ?? null;

        }
          }
}

export default projectManager;