const openEditBox = (e) => {
    let taskIconBox = e.target;
    if(e.target.tagName === "IMG") {
        taskIconBox = e.target.parentElement;
    }

    const task = taskIconBox.parentElement.parentElement;
    const taskId = task.getAttribute("name");

    const editInput = document.querySelector("#task-editor__input");
    editInput.setAttribute("name", taskId);
    editInput.value = task.firstChild.lastChild.innerHTML;
    editInput.parentElement.classList.remove("hidden");
}

export default openEditBox;