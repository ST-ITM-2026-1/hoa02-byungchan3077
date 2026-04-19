document.addEventListener("DOMContentLoaded", init);
function init() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
    if (currentPath.includes(link.getAttribute("href"))) {
        link.classList.add("active");
    }
});
}