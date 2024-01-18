const root = document.querySelector(":root");
const themeSwitch = document.querySelector(".theme-switch");

const rootStyles = getComputedStyle(root);
const colorWhite = rootStyles.getPropertyValue("--clr-white");
const colorDarkerWhite = rootStyles.getPropertyValue("--clr-white-dark");
const colorBlack = rootStyles.getPropertyValue("--clr-black");
const colorLighterBlack = rootStyles.getPropertyValue("--clr-black-light");
const iconSunUrl = rootStyles.getPropertyValue("--icon-sun-url");
const iconMoonUrl = rootStyles.getPropertyValue("--icon-moon-url");

const switchThemeVariables = () => {
    if(rootStyles.getPropertyValue("--clr-bg") === colorWhite) { // light theme is currently on
        root.style.setProperty("--clr-bg", colorBlack);
        root.style.setProperty("--clr-main", colorWhite);
        root.style.setProperty("--clr-bg-hover", colorLighterBlack);
    } else {
        root.style.setProperty("--clr-bg", colorWhite);
        root.style.setProperty("--clr-main", colorBlack);
        root.style.setProperty("--clr-bg-hover", colorDarkerWhite);
    }
}

const changeThemeSwitchIcon = () => {
    if(rootStyles.getPropertyValue("--theme-switch-icon-main") === iconSunUrl) { // to dark
        root.style.setProperty("--theme-switch-icon-main", iconMoonUrl);
        root.style.setProperty("--theme-switch-icon-alternative", iconSunUrl);
    } else {
        root.style.setProperty("--theme-switch-icon-main", iconSunUrl);
        root.style.setProperty("--theme-switch-icon-alternative", iconMoonUrl);
    }
}

const themeSwitchListener = themeSwitch.addEventListener("click", (e) => {
    switchThemeVariables();

    changeThemeSwitchIcon();
});

export default themeSwitchListener;