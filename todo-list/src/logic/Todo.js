//Todo.js

class Todo{
    constructor({title, description, dueDate, priority = "low", completed = false, id}){

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
    this.id = id ?? crypto.randomUUID();
    }

    toggleComplete(){
        this.completed = ! this.completed
    }
}

export default Todo;



