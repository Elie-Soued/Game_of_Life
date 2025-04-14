import { canvas, init } from "./constants.js";

let mouseX;
let mouseY;

// Handle mouse movement on desktop
window.addEventListener("mousemove", (event) => {
  console.log("mouse movement detected");
  mouseX = event.x;
  mouseY = event.y;
});

// Handle touch movement on mobile
window.addEventListener("touchstart", (event) => {
  console.log("touch start detected");
  // Prevent default to avoid scrolling in some cases
  // Uncomment if needed: event.preventDefault();
});

window.addEventListener("touchmove", (event) => {
  console.log("touch movement detected");
  // Get the first touch point
  if (event.touches.length > 0) {
    // TouchEvent coordinates work similar to mouse coordinates
    mouseX = event.touches[0].clientX;
    mouseY = event.touches[0].clientY;
  }

  // Uncomment the following line if you want to prevent page scrolling
  // while interacting with your canvas. Be careful as this might affect
  // normal scrolling behavior on your page:
  // event.preventDefault();
});

window.addEventListener("touchend", (event) => {
  console.log("touch end detected");
  // Optional: You can handle touch end if needed
  // For example, you might want to keep the last position or reset it
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

export { mouseX, mouseY };
