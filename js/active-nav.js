document.addEventListener("DOMContentLoaded", init);
function init() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (currentPath.includes(href) || 
        (href === "index.html" && (currentPath.endsWith("/") || currentPath.endsWith("/index.html")))) {
        link.classList.add("active");
    }
});
}