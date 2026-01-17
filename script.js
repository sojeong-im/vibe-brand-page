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

    // Live Notification Logic
    const notifyBox = document.getElementById('vibe-notification');
    const notifyMsg = notifyBox.querySelector('.notify-message');
    const locations = ['서울 강남구', '부산 해운대구', '인천 연수구', '대구 수성구', '경기 성남시'];

    const showNotification = () => {
        const randomLoc = locations[Math.floor(Math.random() * locations.length)];
        notifyMsg.innerHTML = `방금 <strong>${randomLoc}</strong>에서 분석을 시작했습니다.`;
        notifyBox.classList.add('show');

        setTimeout(() => {
            notifyBox.classList.remove('show');
        }, 5000);
    };

    // Show initial notification after 3 seconds
    setTimeout(showNotification, 3000);

    // Repeat every 15-25 seconds
    setInterval(() => {
        showNotification();
    }, Math.random() * (25000 - 15000) + 15000);
});
