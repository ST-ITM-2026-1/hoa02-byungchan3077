document.addEventListener("DOMContentLoaded", init);


function init() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".projects-units li");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;  

            projects.forEach(project => {       
                if (filter === "all" || project.dataset.category === filter) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        }); 
    });
}