// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    return;
  }
  
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskItem.remove();
  });
  
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
  
  taskInput.value = '';
}

// Event listener for adding a task
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    addTask();
  }
});
