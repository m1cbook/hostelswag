document.addEventListener('DOMContentLoaded', () => {
    // --- Головна сторінка ---
    const video = document.getElementById('myVideo');
    if (video) {
        const skipVideo = localStorage.getItem('skipVideo');
        if (!skipVideo) {
            // пробуємо відтворити відео
            video.play().catch(err => console.log('Авто-відтворення не спрацювало:', err));
        }
        // скидаємо прапорець після завантаження
        localStorage.removeItem('skipVideo');
    }

    // --- Інша сторінка ---
    const goHomeLink = document.getElementById('goHomeLink');
    if (goHomeLink) {
        goHomeLink.addEventListener('click', function(e) {
            e.preventDefault(); // спершу ставимо прапорець
            localStorage.setItem('skipVideo', 'true');
            // невелика затримка для запису в localStorage
            setTimeout(() => {
                window.location.href = goHomeLink.href;
            }, 50);
        });
    }
});
