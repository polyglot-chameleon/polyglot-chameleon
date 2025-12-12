import avatar from "../public/avatar.jpg";

const img = document.createElement("img");
img.src = avatar;
document.body.appendChild(img);

function greet(name: string): string {
  return `Hello, ${name}!`;
}
