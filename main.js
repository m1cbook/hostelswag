document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    if (video) {
        const skipVideo = localStorage.getItem('skipVideo');
        if (skipVideo) {
            video.pause(); // якщо треба пропустити відео
        }
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
