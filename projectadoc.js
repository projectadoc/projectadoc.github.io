/* Copyright 2022, DM Construct Pty Ltd. All rights reserved. */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const homeDiv = document.querySelector('.home');
const aboutDiv = document.querySelector('.about');
const projectsDiv = document.querySelector('.projects');
const testimonialsDiv = document.querySelector('.testimonials');
const contactDiv = document.querySelector('.contact');

function show(visibleDiv) {
    homeDiv.hidden = aboutDiv.hidden = projectsDiv.hidden = testimonialsDiv.hidden = contactDiv.hidden = true;
    visibleDiv.hidden = false;
}

document.getElementById('home').addEventListener('click', () => {show(homeDiv);});
document.getElementById('about').addEventListener('click', () => {show(aboutDiv);});
document.getElementById('projects').addEventListener('click', () => {show(projectsDiv);});
document.getElementById('testimonials').addEventListener('click', () => {show(testimonialsDiv);});
document.getElementById('contact').addEventListener('click', () => {show(contactDiv);});
document.getElementById('contact2').addEventListener('click', () => {show(contactDiv);});
document.getElementById('homecontact').addEventListener('click', () => {show(contactDiv);});
