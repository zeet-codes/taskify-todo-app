const themeSelect = document.querySelector<HTMLSelectElement>("#theme-select");
const htmlTag = document.documentElement;

const LIGHT_THEME = "light";
const DARK_THEME = "dark";
const SYSTEM_THEME = "system";
const STORAGE_TOKEN = "theme-mode";
const HTML_ATTRIBUTE = "data-theme";

themeSelect?.addEventListener("change", (e: Event) => {
    const themeTarget = e.target as HTMLSelectElement;
    setTheme(themeTarget.value);
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (localStorage.getItem(STORAGE_TOKEN) === SYSTEM_THEME) {
        setTheme(SYSTEM_THEME);
    }
});

function setTheme(theme: string) {
    if (themeSelect) {
        themeSelect.value = theme;
        if (theme === SYSTEM_THEME) {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                htmlTag.setAttribute(HTML_ATTRIBUTE, DARK_THEME);
            } else {
                htmlTag.setAttribute(HTML_ATTRIBUTE, LIGHT_THEME);
            }
            localStorage.setItem(STORAGE_TOKEN, theme);
        } else {
            htmlTag.setAttribute(HTML_ATTRIBUTE, theme);
            localStorage.setItem(STORAGE_TOKEN, theme);
        }
    }
}

function initializeTheme() {
    const storedTheme = localStorage.getItem(STORAGE_TOKEN);
    if (storedTheme) {
        setTheme(storedTheme);
    } else {
        setTheme(SYSTEM_THEME);
    }
}

initializeTheme();
