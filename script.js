const toggleButton = document.getElementById("theme-toggle");
const html = document.documentElement;

toggleButton.addEventListener("click", () => {
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    toggleButton.textContent = isDark ? "☀️" : "🌙";
});
