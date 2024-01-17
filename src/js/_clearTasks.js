import { clearTasks } from "./_createTask.js";

const tasksBox = document.querySelector(".tasks");
const tasksQuantity = document.querySelector(".stats__quantity");
const clearButton = document.querySelector(".stats__clear");

const removeTasksFromDom = () => {
    while(tasksBox.firstChild) {
        tasksBox.removeChild(tasksBox.firstChild);
    }
}

const clearTasksListener = clearButton.addEventListener("click", (e) => {
    clearTasks();

    removeTasksFromDom();
    
    tasksQuantity.innerHTML = "No tasks";
});

export default clearTasksListener;