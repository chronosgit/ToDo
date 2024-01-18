import { tasks } from "./_createTask.js";

const editTask = (e) => {
    const taskEditInput = document.querySelector("#task-editor__input");

    if(taskEditInput.value.length >= 100 || taskEditInput.value.length === 0) {
        alert("Task length must be in between 1 and 100 characters");
        return;
    }

    let task = null;
    const list = document.getElementsByName(taskEditInput.getAttribute("name"));
    for(let el of list) {
        if(el.tagName === "DIV") {
            task = el;
            break;
        }
    }

    if(!task) return;

    task.firstChild.lastChild.innerHTML = taskEditInput.value;
    tasks[taskEditInput.getAttribute("name")].name = taskEditInput.value;

    console.log(tasks);

    taskEditInput.setAttribute("name", "");
    taskEditInput.value = "";
    taskEditInput.parentElement.classList.add("hidden");
}

export default editTask;