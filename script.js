document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.vibe-header-transparent');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Subtle parallax effect on project grid
    const gridItems = document.querySelectorAll('.grid-item');

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        gridItems.forEach((item, index) => {
            const movement = (index + 1) * 10;
            const shiftX = (x - 0.5) * movement;
            const shiftY = (y - 0.5) * movement;
            item.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    gridItems.forEach(item => observer.observe(item));
});
