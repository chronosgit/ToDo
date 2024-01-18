import { clearCompletedTasks } from "./_createTask.js";

const tasksBox = document.querySelector(".tasks");
const tasksQuantity = document.querySelector(".stats__quantity");
const clearButton = document.querySelector(".stats__clear");

const removeCompletedTasksFromDom = () => {
    const activeTasks = []

    while(tasksBox.firstChild) {
        if(!tasksBox.firstChild.firstChild.firstChild.classList.contains("button_checked")) {
            activeTasks.push(tasksBox.firstChild);
        }
        tasksBox.firstChild.remove();
    }

    for(let task of activeTasks) {
        tasksBox.append(task);
    }
}

const clearCompletedTasksListener = clearButton.addEventListener("click", (e) => {
    clearCompletedTasks();

    removeCompletedTasksFromDom();
    
    tasksQuantity.innerHTML = "No tasks";
});

export default clearCompletedTasksListener;