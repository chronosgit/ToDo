import editTask from "./_editTask.js";

const root = document.querySelector(":root");

const globalListener = window.addEventListener("DOMContentLoaded", (e) => {
    const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

    if(isDark) {
        const rootStyles = getComputedStyle(root);

        const colorWhite = rootStyles.getPropertyValue("--clr-white");
        const colorBlack = rootStyles.getPropertyValue("--clr-black");

        root.style.setProperty("--clr-bg", colorBlack);
        root.style.setProperty("--clr-main", colorWhite);
    }

    const taskEditButton = document.querySelector(".button_edit");
    taskEditButton.onclick = editTask;

    const taskEditInput = document.querySelector("#task-editor__input");
    taskEditInput.onkeydown = (e) => {
        if(e.keyCode === 13) editTask(e);
    }
});

export default globalListener;