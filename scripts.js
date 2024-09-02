// Scroll to section on nav link click
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple fade-in effect on sections
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
            section.classList.add('visible');
        }
    });
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('header nav ul');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Fade-in effect for service and project items
window.addEventListener('scroll', () => {
    document.querySelectorAll('.service-item, .project-item').forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0) {
            item.classList.add('visible');
        }
    });
});

// Animate elements on page load
window.addEventListener('load', () => {
    document.querySelector('#header').classList.add('animated');
    document.querySelector('.logo a').classList.add('animated');
    document.querySelectorAll('nav ul li').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        item.classList.add('animated');
    });
    document.querySelectorAll('.section').forEach((section, index) => {
        section.style.animationDelay = `${index * 0.3}s`;
        section.classList.add('animated');
    });
    document.querySelectorAll('.service-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
        item.classList.add('animated');
    });
    document.querySelectorAll('.project-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
        item.classList.add('animated');
    });
    document.querySelector('footer').classList.add('animated');
});
