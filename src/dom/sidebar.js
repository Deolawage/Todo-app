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

if (projects.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No projects yet. Create one to get started.";
    emptyMessage.classList.add("empty-projects");

    sideContainer.append(emptyMessage);
}


projects.forEach(project => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project-item");


    projectElement.classList.add("active");
    if (project.id === selectedProjectId){

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