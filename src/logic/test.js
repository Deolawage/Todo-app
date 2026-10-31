
import AppController from "./appController.js";
import Project from "./Project.js";
import Todo from "./Todo.js";

const app = new AppController();

const manager = app.projectManager;

console.log("Projects:", manager.projects);
console.log("Selected project:", manager.getSelectedProject());
console.log("Selected todo ID:", app.selectedTodoId);

// Check class instances
console.log(
    "Projects are Project instances:",
    manager.projects.every(project => project instanceof Project)
);

console.log(
    "Todos are Todo instances:",
    manager.projects.every(project =>
        project.toDo.every(todo => todo instanceof Todo)
    )
);

// Check localStorage
console.log(
    "Saved application state:",
    JSON.parse(localStorage.getItem("todo-list-data"))
);
