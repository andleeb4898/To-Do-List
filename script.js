const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskTextSpan.classList.add('task-text');
    
    const statusSpan = document.createElement('span');
    statusSpan.textContent = 'Pending';
    statusSpan.classList.add('status', 'status-pending');
    
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('task-actions');
    
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-button');
    completeButton.addEventListener('click', function() {
        taskItem.classList.toggle('task-completed');
        if (taskItem.classList.contains('task-completed')) {
            statusSpan.textContent = 'Completed';
            statusSpan.classList.remove('status-pending');
            statusSpan.classList.add('status-completed');
        } else {
            statusSpan.textContent = 'Pending';
            statusSpan.classList.remove('status-completed');
            statusSpan.classList.add('status-pending');
        }
    });
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });
    
    actionsDiv.appendChild(completeButton);
    actionsDiv.appendChild(deleteButton);
    
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(statusSpan);
    taskItem.appendChild(actionsDiv);
    
    taskList.appendChild(taskItem);
}
