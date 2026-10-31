//Sidebar.js

function renderSidebar(projects, selectedProjectId, onProjectSelect){

    const content = document.getElementById("content");

    let sideContainer = document.querySelector(".sidebar");

if (!sideContainer){
    sideContainer = document.createElement("div");
    sideContainer.classList.add("sidebar");
}

sideContainer.replaceChildren();


projects.forEach(project => {
    const projectElement = document.createElement("div");

    projectElement.textContent = project.name;
    projectElement.classList.add("project-item");


     if (project.id === selectedProjectId){
        projectElement.classList.add("active");

     }

     projectElement.addEventListener("click", () =>{
    onProjectSelect(project.id);
});


     sideContainer.append(projectElement); 

    
});

if(!sideContainer.parentElement){
    content.appendChild(sideContainer);
}



}

export default renderSidebar;
