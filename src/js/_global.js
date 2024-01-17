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
});

export default globalListener;