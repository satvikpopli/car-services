"use strict";

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

// Active page detection

const nav = document.querySelectorAll("nav ul li a");

nav.forEach((element) => {
    element.classList.remove("current");
})

const [home, services, gallery, about, contact] = nav;

const url = window.location.href;
if (url.includes("/contact")) {
    contact.classList.add("current");
} else if (url.includes("/services")) {
    services.classList.add("current");
} else if (url.includes("/gallery")) {
    gallery.classList.add("current");
} else if (url.includes("/about")) {
    about.classList.add("current");
} else {
    home.classList.add("current");
}

