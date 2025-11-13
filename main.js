// ----- ГОЛОВНА СТОРІНКА ----- 
const video = document.getElementById('myVideo');

if (video) {
    // Перевіряємо, чи не потрібно пропускати відтворення
    const skipVideo = localStorage.getItem('skipVideo');

    if (!skipVideo) {
        video.play().catch(err => console.log('Відео не змогло відтворитись автоматично:', err));
    }

    // Скидаємо прапорець після завантаження
    localStorage.removeItem('skipVideo');
}

// ----- ІНША СТОРІНКА ----- 
const goHomeLink = document.getElementById('goHomeLink');

if (goHomeLink) {
    goHomeLink.addEventListener('click', function(e) {
        e.preventDefault(); // спершу ставимо прапорець
        localStorage.setItem('skipVideo', 'true');
        window.location.href = goHomeLink.href;
    });
}
