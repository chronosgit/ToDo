const tasksBox = document.querySelector(".tasks");
const taskCreationButton = document.querySelector(".button_add");
const taskCreationInput = document.querySelector(".task-writer .input");
const tasksQuantity = document.querySelector(".stats__quantity");

let tasks = [];

const createTask = (e) => {
    const inputText = taskCreationInput.value;

    if(inputText.length >= 100 || inputText.length === 0) {
        alert("Task length must be in between 1 and 100 characters");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const taskButton = document.createElement("button");
    taskButton.classList.add("button");

    const taskTextNode = document.createTextNode(inputText);
    const taskName = document.createElement("p");
    taskName.append(taskTextNode);
    taskName.classList.add("task__name");

    taskDiv.append(taskButton, taskName);
    tasksBox.append(taskDiv);
    tasks.push({
        name: inputText,
        completed: false,
    })

    if(tasks.length === 1) {
        taskDiv.classList.add("border-reset");
    } else {
        tasksBox.firstChild.classList.remove("border-reset");
    }

    if(tasks.length > 1) {
        tasksQuantity.innerHTML = `${tasks.length} items left`;
    } else {
        tasksQuantity.innerHTML = `${tasks.length} item left`;
    }
    taskCreationInput.value = "";
}

const clearTasks = () => {
    tasks = [];
}

const taskCreationListener = taskCreationButton.addEventListener("click", createTask);

taskCreationInput.onkeydown = (e) => {
    if(e.keyCode === 13) createTask(e);
}



export default taskCreationListener;
export { clearTasks };