// Get DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const completedTasks = document.getElementById('completed-tasks');

// Event listener for add task button
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

// Function to create a task item
function createTaskItem(taskText) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', completeTask);
    taskItem.appendChild(checkbox);

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskItem.appendChild(taskTextSpan);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);
    taskItem.appendChild(deleteBtn);

    return taskItem;
}

// Function to complete a task
function completeTask() {
    const taskItem = this.parentNode;
    taskItem.classList.toggle('completed-task-item');
    taskItem.querySelector('input[type="checkbox"]').disabled = true;
    taskItem.querySelector('.delete-btn').style.display = 'inline-block';
    completedTasks.appendChild(taskItem);
}

// Function to delete a task
function deleteTask() {
    const taskItem = this.parentNode;
    taskItem.remove();
}