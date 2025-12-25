type Context = {
  height: number;
  width: number;
  ctx: CanvasRenderingContext2D;
};

type Star = {
  x: number;
  y: number;
};

export default function initSpace({ height, width, ctx }: Context): void {
  ctx.clearRect(0, 0, width, height);
  const stars = createStars(height, width);
  animate({ height, width, ctx, stars });
}

const createStars = (height: number, width: number): Star[] =>
  Array.from({ length: (height + width) / 4 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
  }));

function animate({
  width,
  height,
  ctx,
  stars,
}: Context & { stars: Star[] }): void {
  ctx.clearRect(0, 0, width, height);

  const speed = 0.05;
  const size = 1.3;

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
