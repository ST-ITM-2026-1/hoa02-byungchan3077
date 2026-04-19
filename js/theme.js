document.addEventListener("DOMContentLoaded", init);
function init() {
    const toggleBtn = document.getElementById("theme-toggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        toggleBtn.textContent = "Light";
    } else {
        toggleBtn.textContent = "Dark";
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            toggleBtn.textContent = "Light";
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.textContent = "Dark";
            localStorage.setItem("theme", "light");
        }
    });
}