import { tasks } from "./_createTask.js";

const deleteTask = (e) => {
    let taskIconBox = e.target;
    if(e.target.tagName === "IMG") {
        taskIconBox = e.target.parentElement;
    }

    const task = taskIconBox.parentElement.parentElement;

    taskIconBox.remove();
    task.remove();
    delete tasks[task.getAttribute("name")];

    if(Object.keys(tasks).length === 1) {
        document.querySelector(".task").classList.add("border-reset");
    }

    const tasksQuantity = document.querySelector(".stats__quantity");
    if(Object.keys(tasks).length === 0) {
        tasksQuantity.innerHTML = "No tasks";
    } else if(Object.keys(tasks).length > 1) {
        tasksQuantity.innerHTML = `${Object.keys(tasks).length} items left`;
    } else {
        tasksQuantity.innerHTML = `${Object.keys(tasks).length} item left`;
    }
}

export default deleteTask;