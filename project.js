const taskList = document.getElementById('taskList');

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDueDate = document.getElementById('taskDueDate');
    const taskText = taskInput.value.trim();
    const dueDate = taskDueDate.value;

    if (taskText !== '') {
        const newTask = createTaskElement(taskText, dueDate);
        taskList.appendChild(newTask);

        // Clear the input fields
        taskInput.value = '';
        taskDueDate.value = '';
    }
}

function createTaskElement(text, dueDate) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskText = document.createElement('span');
    taskText.textContent = text;

    const taskDue = document.createElement('span');
    taskDue.textContent = formatDueDate(dueDate);

    taskItem.appendChild(taskText);
    taskItem.appendChild(taskDue);

    return taskItem;
}

function formatDueDate(dueDate) {
    if (!dueDate) return '';
    
    const date = new Date(dueDate);
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    
    return date.toLocaleDateString('en-US', options);
}
