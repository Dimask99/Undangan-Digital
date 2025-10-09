document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("openInvitation");
  const bgm = document.getElementById("bgm");

  button.addEventListener("click", () => {
    document.getElementById("invitation").scrollIntoView({ behavior: "smooth" });
    bgm.play().catch(() => {});
  });

  // Fade saat scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-section").forEach(el => observer.observe(el));

  // ❄ Efek salju
  const canvas = document.getElementById("snow");
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const snowflakes = Array.from({ length: 100 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    d: Math.random() * 1 + 0.5
  }));

  function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.beginPath();
    snowflakes.forEach(f => {
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    });
    ctx.fill();
    moveSnow();
  }

  function moveSnow() {
    snowflakes.forEach(f => {
      f.y += f.d;
      if (f.y > canvas.height) f.y = 0;
    });
  }

  setInterval(drawSnow, 33);
});