document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const hourSelect = document.getElementById('hour-select');
    const addTaskButton = document.getElementById('add-task-button');
    const hours = document.querySelectorAll('.hour');

    addTaskButton.addEventListener('click', () => {
        const taskName = taskInput.value.trim();
        const selectedHour = hourSelect.value;

        if (taskName === '' || selectedHour === '') {
            alert('Please enter a task and select an hour');
            return;
        }

        const hourElement = Array.from(hours).find(hour => hour.getAttribute('data-hour') === selectedHour);
        const taskList = hourElement.querySelector('.task-list');
        const listItem = document.createElement('li');
        listItem.innerHTML = `${taskName} <button class="delete-task-button">X</button>`;
        taskList.appendChild(listItem);

        taskInput.value = '';
        hourSelect.value = '';

        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        const deleteButton = listItem.querySelector('.delete-task-button');
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation();
            taskList.removeChild(listItem);
        });
    });
});
