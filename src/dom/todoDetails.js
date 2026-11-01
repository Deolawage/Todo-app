//TodoDetails.js

function renderTodoDetails(todo) {
    const detailsContainer = document.getElementById("todo-details");

    detailsContainer.replaceChildren();

    if (!todo) {
        const message = document.createElement("p");
        message.textContent = "Select a todo to view its details.";

        detailsContainer.append(message);
        return;
    }

    const title = document.createElement("h2");
    title.textContent = todo.title;

    const description = document.createElement("p");
    description.textContent = todo.description;

    const dueDate = document.createElement("p");
    dueDate.textContent = `Due: ${todo.dueDate}`;

    const priority = document.createElement("p");
    priority.textContent = `Priority: ${todo.priority}`;

    const status = document.createElement("p");
    status.textContent = todo.completed ? "Completed" : "Pending";

    detailsContainer.append(
        title,
        description,
        dueDate,
        priority,
        status
    );
}

export default renderTodoDetails;