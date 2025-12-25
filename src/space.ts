type Context = {
  height: number;
  width: number;
  ctx: CanvasRenderingContext2D;
};

type Star = {
  x: number;
  y: number;
};

export default function initSpace(): void {
  const { height, width, ctx }: Context = createCtx();

  let stars = createStars(height, width);

  window.addEventListener("resize", () => {
    stars = createStars(height, width);
  });

  animate({ height, width, ctx, stars });
}

const createStars = (height: number, width: number): Star[] =>
  Array.from({ length: (height + width) / 4 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
  }));

function createCtx(): Context {
  const canvas = document.createElement("canvas");
  canvas.oncontextmenu = (e) => e.preventDefault();
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
  return { height, width, ctx };
}

function animate({
  width,
  height,
  ctx,
  stars,
}: Context & { stars: Star[] }): void {
  ctx.clearRect(0, 0, width, height);

  const speed = 0.05;
  const size = 0.9 * (width / height);

  stars.forEach((star) => {
    star.y -= speed;
    star.x += speed;
    if (star.y < 0) star.y = height;
    if (star.x > width) star.x = 0;

    ctx.fillStyle = "#888888";
    ctx.beginPath();
    ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(() => animate({ width, height, ctx, stars }));
}
