// Smooth scrolling pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active link dans la navigation
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
        link.style.color = 'var(--secondary)';
    }
});
