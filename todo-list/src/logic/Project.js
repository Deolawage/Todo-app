//Project.js

import Todo from "./Todo.js";

class Project{
    constructor(name, id){
        this.name = name;
         this.id = id ?? crypto.randomUUID();
        this.toDo = [];
    }

    addTodo({title, description, dueDate, priority, completed, id}
    ){
        const todo = new Todo({title, description, dueDate, priority, completed, id});
        this.toDo.push(todo);
        return todo;
    }

    findTodo(todoId){
        return this.toDo.find(todo => todo.id === todoId);
    }

        removeTodo(todoId) {
        const todo = this.findTodo(todoId);
        
         if (!todo) return;

        const index = this.toDo.indexOf(todo);
        this.toDo.splice(index, 1);
    }

    toggleTodo(todoId){
       const todo = this.findTodo(todoId);
       
       if (!todo) return;
         
        todo.toggleComplete();
    }



    
}

export default Project;