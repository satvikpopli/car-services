// NAVBAR
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav');
const icon = document.querySelector('lord-icon');

function displayMenu() {
    if (document.body.clientWidth > 850) {
        menu.classList.add("active");
    } else {
        if (menu.classList.contains("active")) {
            hamburger.classList.add("active");
        } else {
            hamburger.classList.remove("active");
        }
    }
}

function toggleMenu() {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
}

displayMenu();

window.addEventListener("resize", displayMenu);

hamburger.addEventListener("click", toggleMenu);