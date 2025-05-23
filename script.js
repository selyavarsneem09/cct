const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = '';
    taskInput.focus();
  }
});

taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTaskBtn.click();
  }
});

function addTask(text) {
  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  const actions = document.createElement('div');
  actions.className = 'task-actions';

  const doneBtn = document.createElement('button');
  doneBtn.innerHTML = '✔️';
  doneBtn.title = 'Mark as done';
  doneBtn.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '🗑️';
  delBtn.title = 'Delete task';
  delBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  actions.appendChild(doneBtn);
  actions.appendChild(delBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
}
