import { tasks } from "./_createTask.js";

const completeTask = (e) => {
    let task = e.target.parentElement;
    if(!task.getAttribute("name")) {
        task = task.parentElement;
    }   

    const taskId = task.getAttribute("name");
    tasks[taskId].completed = !tasks[taskId].completed;

    const taskButtonCheck = task.firstChild.firstChild;
    taskButtonCheck.classList.toggle("button_checked");
};

export default completeTask;