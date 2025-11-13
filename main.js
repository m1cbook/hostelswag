document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("video-overlay");
  const closeBtn = document.getElementById("close-video");
  const video = document.getElementById("promo-video");

  localStorage.setItem("videoSeen", "true"); // записуємо
  const seen = localStorage.getItem("videoSeen"); // читаємо
  video.muted = true; // muted для autoplay

  // Перевірка localStorage
  const videoSeen = localStorage.getItem("videoSeen") === "true";

  // Перевірка URL параметру
  const urlParams = new URLSearchParams(window.location.search);
  const noVideo = urlParams.get("novideo") === "true";

  // Показуємо відео тільки якщо:
  // 1) Користувач ще не бачив відео (localStorage)
  // 2) URL не містить novideo=true
  if (!videoSeen && !noVideo) {
    overlay.style.display = "flex";

    // запускаємо відео після невеликої затримки
    setTimeout(() => video.play().catch(() => {}), 50);
  } else {
    overlay.style.display = "none"; // обов'язково ховаємо overlay
  }

  function closeVideo() {
    overlay.style.display = "none";
    video.pause();
    video.currentTime = 0;
    localStorage.setItem("videoSeen", "true"); // відмічаємо, що відео переглянули
  }

  closeBtn.addEventListener("click", closeVideo);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeVideo();
  });
});
