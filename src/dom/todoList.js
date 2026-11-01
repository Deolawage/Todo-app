//TodoList.js


function renderTodos(todos, selectedTodoId, onTodoSelect, onTodoDelete, onTodoToggle) {
    const taskListEl = document.getElementById("task-list");

    taskListEl.replaceChildren();

    todos.forEach(todo => {
        const li = document.createElement("li");
        li.dataset.id = todo.id;

        if (todo.completed) {
            li.classList.add("completed");
        }

        if (todo.id === selectedTodoId) {
            li.classList.add("selected");
        }

        const title = document.createElement("span");
        title.textContent = todo.title;

        const dueDate = document.createElement("span");
        dueDate.textContent = todo.dueDate;

        const priority = document.createElement("span");
        priority.textContent = todo.priority;

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();
            onTodoDelete(todo.id);
        });

        // Complete button
        const completeButton = document.createElement("button");

        completeButton.textContent = todo.completed
            ? "Mark Incomplete"
            : "Mark Complete";

        completeButton.addEventListener("click", (event) => {
            event.stopPropagation();
            onTodoToggle(todo.id);
        });

        // Append elements
        li.append(title, dueDate, priority, deleteButton, completeButton);

        li.addEventListener("click", () => {
            onTodoSelect(todo.id);
        });

        taskListEl.append(li);
    });
}

export default renderTodos;