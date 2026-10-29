
import ProjectManager from "./ProjectManager.js";
import StorageManager from "./Storage.js";

const manager = new ProjectManager();

// Create a project
const personal = manager.addProject("Personal");

// Add a todo
const todo = personal.addTodo({
    title: "Learn localStorage",
    description: "Practice saving and retrieving application state",
    dueDate: "2026-10-30",
    priority: "high",
    completed: false
});

// Select the project
manager.selectProject(personal.id);

// Simulate the relevant controller state
const appController = {
    selectedTodoId: todo.id
};

// Save the application state
StorageManager.saveStore(manager, appController);

// Retrieve the saved state
const savedData = StorageManager.getStore();

// Inspect the result
console.log("Saved data:", savedData);
console.log("Project name:", savedData.projects[0].name);
console.log("Todo title:", savedData.projects[0].todos[0].title);
console.log("Selected project ID:", savedData.selectedProjectId);
console.log("Selected todo ID:", savedData.selectedTodoId);
console.log("Initialized:", savedData.initialized);

export default test;