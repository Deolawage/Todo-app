//Storage.js

class StorageManager {
    static STORAGE_KEY = "todo-list-data";

    static saveStore(projectManager, appController) {
        const storeObject = {
            projects: projectManager.projects.map(project => ({
                id: project.id,
                name: project.name,
                todos: project.toDo.map(todo => ({
                    id: todo.id,
                    title: todo.title,
                    description: todo.description,
                    dueDate: todo.dueDate,
                    priority: todo.priority,
                    completed: todo.completed
                }))
            })),
            selectedProjectId: projectManager.selectedProjectId,
            selectedTodoId: appController.selectedTodoId,
            initialized: true
        };

        const jsonString = JSON.stringify(storeObject);
        localStorage.setItem(this.STORAGE_KEY, jsonString);
    }

    static getStore() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    }
}

export default StorageManager;