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
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    gridItems.forEach(item => observer.observe(item));
    document.querySelectorAll('.profile-item').forEach(item => observer.observe(item));

    // Live Notification Logic
    const notifyBox = document.getElementById('vibe-notification');
    const notifyText = notifyBox.querySelector('.notify-message');

    const fakeData = [
        "방금 <strong>서울 강남구</strong>에서 분석을 시작했습니다.",
        "방금 <strong>김*희님</strong>의 스타일 리뷰가 등록되었습니다.",
        "현재 <strong>14명</strong>이 동시에 접속 중입니다.",
        "<strong>예약 마감</strong>까지 단 3자리 남았습니다."
    ];

    let index = 0;

    function runNotification() {
        // 내용 변경
        notifyText.innerHTML = fakeData[index];

        // 보여주기
        notifyBox.classList.add('show');

        // 4초 후 숨기기
        setTimeout(() => {
            notifyBox.classList.remove('show');
            index = (index + 1) % fakeData.length;
        }, 4000);
    }

    // 10초마다 실행
    setInterval(runNotification, 10000);

    // 첫 실행은 페이지 로드 3초 후
    setTimeout(runNotification, 3000);
});
