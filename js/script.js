// Initialize AOS Animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive Course Cards
const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.course-icon');
        icon.style.transform = 'rotate(5deg) scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.course-icon');
        icon.style.transform = 'rotate(0) scale(1)';
    });
});