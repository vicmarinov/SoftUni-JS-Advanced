function solve () {
    const [
        addTaskSection,
        openTasksSection,
        inProgressTasksSection,
        completedTasksSection
    ] = document.querySelectorAll('.wrapper section');

    addTaskSection.getElementsByTagName('form')[0]
        .addEventListener('submit', onSubmit);

    function onSubmit (event) {
        event.preventDefault();

        const taskTitle = document.getElementById('task').value;
        const taskDescription = document.getElementById('description').value;
        const taskDueDate = document.getElementById('date').value;

        document.getElementById('task').value = '';
        document.getElementById('description').value = '';
        document.getElementById('date').value = '';

        if (!(taskTitle && taskDescription && taskDueDate)) {
            console.log('ERROR: The task must have title, description and due date filled!');
            return;
        }

        openTasksSection.querySelector('div:last-of-type')
            .append(createTask(
                taskTitle,
                `Description: ${taskDescription}`,
                `Due Date: ${taskDueDate}`
            ));
    }

    function onStartButtonClick (event) {
        const taskElement = event.currentTarget.parentElement.parentElement;
        inProgressTasksSection.querySelector('div:last-of-type').append(taskElement);

        taskElement.getElementsByClassName('green')[0].remove();

        const finishButton = createElement('button', 'Finish', ['orange']);
        finishButton.addEventListener('click', onFinishButtonClick);
        taskElement.getElementsByClassName('flex')[0].append(finishButton);
    }

    function onFinishButtonClick (event) {
        const taskElement = event.currentTarget.parentElement.parentElement;
        completedTasksSection.querySelector('div:last-of-type').append(taskElement);

        taskElement.getElementsByClassName('flex')[0].remove();
    }

    function onDeleteButtonClick (event) {
        const taskElement = event.currentTarget.parentElement.parentElement;
        taskElement.remove();
    }

    function createTask (taskTitle, description, dueDate) {
        const articleElement = createElement('article', '', []);
        articleElement.append(createElement('h3', taskTitle, []));
        articleElement.append(createElement('p', description, []));
        articleElement.append(createElement('p', dueDate, []));
        
        const buttonsContainer = createElement('div', '', ['flex']);

        const startButton = createElement('button', 'Start', ['green']);
        startButton.addEventListener('click', onStartButtonClick);
        buttonsContainer.append(startButton);

        const deleteButton = createElement('button', 'Delete', ['red']);
        deleteButton.addEventListener('click', onDeleteButtonClick);
        buttonsContainer.append(deleteButton);

        articleElement.append(buttonsContainer);
        
        return articleElement;
    }

    function createElement (tagName, textContent, classesArr) {
        const element = document.createElement(tagName);
        element.textContent = textContent;
        for (const className of classesArr) {
            element.classList.add(className);
        }

        return element;
    }
}