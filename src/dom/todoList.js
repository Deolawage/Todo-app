//TodoList.js


function renderTodos(todos, selectedTodoId, onTodoSelect, onTodoDelete) {
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

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

          deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();
            onTodoDelete(todo.id);
        });


        li.append(title, dueDate, priority, deleteButton);

        li.addEventListener("click", () => {
            onTodoSelect(todo.id);
        });

        taskListEl.append(li);
    });
}

export default renderTodos;