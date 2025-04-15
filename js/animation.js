//Variables
let maxRadius = 40;
let colorArray = ["#2b2d42", "#8d99ae", "#edf2f4", "#ef233c"];
let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
let circleArray = [];

//Functions
const init = () => {
  circleArray = [];
  for (let i = 0; i < 1000; i++) {
    circleArray.push(new Circle());
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

class Circle {
  constructor() {
    this.x = Math.floor(Math.random() * window.innerWidth);
    this.y = Math.floor(Math.random() * window.innerHeight);
    this.dx = Math.random() - 0.5;
    this.dy = Math.random() - 0.5;
    this.radius = Math.random() * 3 + 1;
    this.minRadius = this.radius;
    this.c = canvas.getContext("2d");
    this.distance = 50;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length + 1)];
  }

  draw() {
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.c.fillStyle = this.color;
    this.c.fill();
  }

  update() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    if (
      mouseX - this.x < this.distance &&
      mouseX - this.x > -this.distance &&
      mouseY - this.y < this.distance &&
      mouseY - this.y > -this.distance
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}

init();
animate();
