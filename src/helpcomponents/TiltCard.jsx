import VanillaTilt from "vanilla-tilt";

export function initializeTilt() {
  const elements = document.querySelectorAll("[data-tilt]");
  VanillaTilt.init(elements, {
    max: 15,
    speed: 400,
    glare: true,
    reverse: true,
    scale: 1.05,
    "max-glare": 0.2,
  });
}
