
import Project from "./Project.js";
import Todo from "./Todo.js";
import StorageManager from "./Storage.js";

// Retrieve previously saved data
const savedData = StorageManager.getStore();

if (savedData && savedData.projects.length > 0) {
    // Reconstruct the first saved project
    const savedProjectData = savedData.projects[0];
    const restoredProject = Project.fromData(savedProjectData);

    // Verify the reconstruction
    console.log(
        "Is a Project instance:",
        restoredProject instanceof Project
    );

    console.log(
        "Project ID preserved:",
        restoredProject.id === savedProjectData.id
    );

    console.log(
        "Project name preserved:",
        restoredProject.name === savedProjectData.name
    );

    console.log(
        "Restored todos:",
        restoredProject.toDo
    );

    console.log(
        "Are todos Todo instances:",
        restoredProject.toDo.every(todo => todo instanceof Todo)
    );

    console.log(
        "Todo IDs preserved:",
        restoredProject.toDo.every((todo, index) =>
            todo.id === savedProjectData.todos[index].id
        )
    );
} else {
    console.log("No saved projects found. Run the storage test first.");
}
