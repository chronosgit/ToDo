import completeTask from "./_completeTask.js";
import deleteTask from "./_deleteTask.js";
import openEditBox from "./_openEditBox.js";

const tasksBox = document.querySelector(".tasks");
const taskCreationButton = document.querySelector(".button_add");
const taskCreationInput = document.querySelector(".task-writer .input");
const tasksQuantity = document.querySelector(".stats__quantity");

let tasks = {};

const createTaskManageButtons = () => {
    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.classList.add("task__icon-box");
    const taskDeleteIcon = document.createElement("img");
    taskDeleteIcon.src = "/src/images/trashcan.png";
    taskDeleteIcon.classList.add("task__icon");
    taskDeleteButton.append(taskDeleteIcon);

    taskDeleteButton.onclick = deleteTask;

    const taskEditButton = document.createElement("button");
    taskEditButton.classList.add("task__icon-box");
    const taskEditIcon = document.createElement("img");
    taskEditIcon.src = "/src/images/pen.png";
    taskEditIcon.classList.add("task__icon");
    taskEditButton.append(taskEditIcon);

    taskEditButton.onclick = openEditBox;

    const taskManageBox = document.createElement("div");
    taskManageBox.classList.add("task__manage");

    taskManageBox.append(taskEditButton, taskDeleteButton);

    return taskManageBox;
}

const createTaskMainBox = (inputText) => {
    const taskAddButton = document.createElement("button");
    taskAddButton.classList.add("button");

    const taskTextNode = document.createTextNode(inputText);
    const taskName = document.createElement("p");
    taskName.append(taskTextNode);
    taskName.classList.add("task__name");

    const taskMainBox = document.createElement("div");
    taskMainBox.classList.add("task__main");
    taskMainBox.append(taskAddButton, taskName);
    taskMainBox.onclick = completeTask;

    return taskMainBox;
}

const createTask = (e) => {
    const inputText = taskCreationInput.value;

    if(inputText.length >= 100 || inputText.length === 0) {
        alert("Task length must be in between 1 and 100 characters");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const taskMainBox = createTaskMainBox(inputText);
    const taskManageBox = createTaskManageButtons();

    const taskId = "id" + Math.random().toString(16).slice(2);
    taskDiv.setAttribute("name", taskId);
    taskDiv.append(taskMainBox, taskManageBox);
    tasksBox.append(taskDiv);
    tasks[taskId] = {
        id: taskId,
        name: inputText,
        completed: false,
    };

    if(Object.keys(tasks).length === 1) {
        taskDiv.classList.add("border-reset");
    } else {
        tasksBox.firstChild.classList.remove("border-reset");
    }

    if(Object.keys(tasks).length > 1) {
        tasksQuantity.innerHTML = `${Object.keys(tasks).length} items left`;
    } else {
        tasksQuantity.innerHTML = `${Object.keys(tasks).length} item left`;
    }
    taskCreationInput.value = "";
}

const clearCompletedTasks = () => {
    for(let taskId in tasks) {
        if(tasks[taskId].completed) {
            delete tasks[taskId];
        }
    }
}

const taskCreationListener = taskCreationButton.addEventListener("click", createTask);

taskCreationInput.onkeydown = (e) => {
    if(e.keyCode === 13) createTask(e);
}



export default taskCreationListener;
export { clearCompletedTasks, createTaskManageButtons, createTaskMainBox, tasks };