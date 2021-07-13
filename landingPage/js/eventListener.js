import { canvas, init } from "./constants.js";

let mouseX;
let mouseY;

window.addEventListener("mousemove", (event) => {
  mouseX = event.x;
  mouseY = event.y;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

export { mouseX, mouseY };
