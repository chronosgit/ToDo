import { createTaskMainBox, createTaskManageButtons, tasks } from "./_createTask.js";

const createTaskElement = (task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    
    const taskMainBox = createTaskMainBox(task.name);
    const taskManageBox = createTaskManageButtons();

    if(task.completed) {
        taskMainBox.firstChild.classList.add("button_checked");
    }
    
    taskDiv.setAttribute("name", task.id);
    taskDiv.append(taskMainBox, taskManageBox);

    return taskDiv;
}

const renderTasks = (tasksArray) => {
    const tasksBox = document.querySelector(".tasks");
    for(let task of tasksArray) {
        tasksBox.append(createTaskElement(task));
    }
}

const getAllTasks = () => {
    return Object.values(tasks);
}

const getActiveTasks = () => {
    const activeTasks = [];

    for(let taskId in tasks) {
        if(!tasks[taskId].completed) {
            activeTasks.push(tasks[taskId]);
        }
    }

    return activeTasks;
}

const getCompletedTasks = () => {
    const completedTasks = [];

    for(let taskId in tasks) {
        if(tasks[taskId].completed) {
            completedTasks.push(tasks[taskId]);
        }
    }

    return completedTasks;
}

const filterTasks = (e) => {
    const filterButtons = document.querySelectorAll(".stats__filter");
    for(let filterButton of filterButtons) {
        filterButton.classList.remove("active");
    }

    const activatedFilter = e.target;
    activatedFilter.classList.add("active");

    const tasks = document.querySelector(".tasks");

    while(tasks.firstChild) {
        tasks.lastChild.remove();
    }

    let filterType = null;
    switch (e.target.id) {
        case "filter-all":
            renderTasks(getAllTasks());
            break;
        case "filter-active":
            renderTasks(getActiveTasks());
            break;
        case "filter-completed":
            renderTasks(getCompletedTasks());
            break;
    }
};  

export default filterTasks;