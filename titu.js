// Learn More Button
document.getElementById("learn-more").addEventListener("click", function() {
    alert("Learn more about online shopping!");
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Menu Toggle Functionality
 
//
const menuIcon = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-btn');
const navMenu = document.querySelector('header nav ul');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuIcon.classList.toggle('active');
    closeBtn.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuIcon.classList.toggle('active');
    closeBtn.classList.toggle('active');
});
// 
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const closeBtn = document.getElementById('close-btn');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        menuIcon.classList.toggle('active');
        closeBtn.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function() {
        navLinks.classList.remove('show');
        menuIcon.classList.remove('active');
        closeBtn.classList.remove('active');
    });
});

