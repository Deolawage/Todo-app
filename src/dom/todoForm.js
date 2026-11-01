//todoForm.js

function renderTodoForm(parentId, callback) {

    const existingForm = document.querySelector("#todo-form");

if (existingForm) {
    existingForm.remove();
}

  const parent = document.querySelector(parentId);

  const form = document.createElement('form');
  form.id = 'todo-form';

  
  const title = document.createElement('input');
  title.type = 'text';
  title.id = 'TodoName';
  title.placeholder = 'Enter project name...';
  title.required = true; 

  const description = document.createElement('textarea');
  description.id = 'TodoDetails';
  description.placeholder = 'What your Task About...';
  description.required = true; 


  const date = document.createElement('input');
  date.type = 'date';
  date.id = 'TodoDueDate';
  date.required = true; 




  const prioritySelect = document.createElement('select');
  prioritySelect.id = 'todoPriority';
  prioritySelect.required = true;

  const priorities = ['Low', 'Medium', 'High'];
  
  priorities.forEach(level => {
    const option = document.createElement('option');
    option.value = level.toLowerCase(); 
    option.textContent = level;         
    prioritySelect.append(option);
  });



  
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Add Task';

  
  form.append(title, description, date, prioritySelect, submitBtn);

  
  form.addEventListener('submit', function (event) {
    
    event.preventDefault(); 

    const todoTitle = title.value.trim();
    const Detaildescription = description.value;
    const dueDate = date.value;
    const priority = prioritySelect.value; 
    
   callback({
    title: todoTitle,
    description: Detaildescription,
    dueDate: dueDate,
    priority: priority
});

    
    form.reset(); 
  });

  
  parent.append(form);
}


export default renderTodoForm;