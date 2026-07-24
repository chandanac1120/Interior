// Sticky Navbar
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Mobile Menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});