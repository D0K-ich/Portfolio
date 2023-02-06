const btnDarkMode = document.querySelector(".dark-mode-btn")

// 1.Проверка темной темы на уровне системы

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// 2. Проверка темной темы в локал сторейдж
if (localStorage.getItem('darkMode') ===  'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark")
} else {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark")
}

// При изменение системных настроек во время работы сайта
window
.matchMedia("(prefers-color-scheme: dark)")
.addEventListener('change', () => {
    const newColorScheme = Event.matches ? "dark" : "light";

    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem('darkMode', 'dark')
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem('darkMode', 'light')
    }
})

// Включение ночного режима по кнопке
btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    }
    else {
        localStorage.setItem('darkMode', 'light')
    }
}

console.log(document.title);