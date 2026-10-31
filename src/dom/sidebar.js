//Sidebar.js

function renderSidebar(projects, selectedProjectId, onProjectSelect, onAddProject, onDeleteProject){

    const content = document.getElementById("content");

    let sideContainer = document.querySelector(".sidebar");

if (!sideContainer){
    sideContainer = document.createElement("div");
    sideContainer.classList.add("sidebar");
}

sideContainer.replaceChildren();

const addProjectButton = document.createElement("button");
addProjectButton.textContent = "+ Add Project";
addProjectButton.classList.add("add-project-btn");

addProjectButton.addEventListener("click", () => {
    onAddProject();

})

sideContainer.append(addProjectButton);


projects.forEach(project => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project-item");


     if (project.id === selectedProjectId){
        projectElement.classList.add("active");

     }

     projectElement.addEventListener("click", () =>{
    onProjectSelect(project.id);
});

const projectName = document.createElement("span");
projectName.textContent = project.name;
projectElement.append(projectName);

 
const deleteButton = document.createElement("button");
deleteButton.textContent = "x";
deleteButton.classList.add("delete-btn");

deleteButton.addEventListener("click", (event) =>{
    event.stopPropagation();
    onDeleteProject(project.id);
})

projectElement.append(deleteButton);

     sideContainer.append(projectElement); 

    
});

if(!sideContainer.parentElement){
    content.appendChild(sideContainer);
}



}

export default renderSidebar;