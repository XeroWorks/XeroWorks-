// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission (placeholder)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    this.reset();
});
