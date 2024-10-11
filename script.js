document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".content").forEach(c => c.classList.remove("active"))

        tab.classList.add("active");

        const tabContent = tab.getAttribute("data-tab");
        document.getElementById(tabContent).classList.add("active");
    })
});

document.querySelector(".tab.active").click();