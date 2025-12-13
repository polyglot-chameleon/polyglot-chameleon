import avatar from "../public/avatar.jpg";
import "./style.css";

const bio = document.createElement("section");
bio.id = "bio";
document.body.appendChild(bio);

const img = document.createElement("img");
img.src = avatar;
img.oncontextmenu = (e) => e.preventDefault();
img.onmousedown = (e) => e.preventDefault();
bio.appendChild(img);

const tagline = document.createElement("p");
tagline.textContent =
  "Fullstack Hero | NLP Guru | CogSci aficionado | Lifelong learner.";
bio.appendChild(tagline);

const SocialMediaBadges = [
  {
    name: "GitHub",
    url: "https://github.com/polyglot-chameleon",
    badge:
      "https://img.shields.io/badge/GitHub-PolyglotChameleon-181717?style=flat&logo=github",
  },
  {
    name: "GitLab",
    url: "https://gitlab.com/polyglot-chameleon",
    badge:
      "https://img.shields.io/badge/GitLab-PolyglotChameleon-181717?style=flat&logo=gitlab",
  },
];

SocialMediaBadges.forEach((platform) => {
  const link = document.createElement("a");
  link.href = platform.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const badgeImg = document.createElement("img");
  badgeImg.src = platform.badge;
  badgeImg.alt = `${platform.name} Badge`;

  link.appendChild(badgeImg);
  bio.appendChild(link);
});

// const messageSection = document.createElement("section");
// messageSection.id = "message";
// document.body.appendChild(messageSection);

// const span = document.createElement("span");
// span.textContent = "coming soon...";
// messageSection.appendChild(span);

/* moving stars and planets in the background */
import initSpace from "./space";

initSpace({
  stars: { size: 1.3, speed: 0.05, color: "#888888" },
});
