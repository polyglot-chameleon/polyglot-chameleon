export default function initSpace(options: {
  stars: { size: number; speed: number; color: string };
}): void {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.zIndex = "-1";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d")!;
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  const stars = Array.from({ length: (height + width) / 4 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: options.stars.size,
    speed: options.stars.speed,
    color: options.stars.color,
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach((star) => {
      star.y -= star.speed;
      star.x += star.speed;
      if (star.y < 0) star.y = height;
      if (star.x > width) star.x = 0;

      ctx.fillStyle = star.color;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });

  animate();
}
