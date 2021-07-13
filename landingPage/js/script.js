//Variables
let mouseX;
let mouseY;
let maxRadius = 40;
let minRadius = 2;
let colorArray = ["#2b2d42", "#8d99ae", "#edf2f4", "#ef233c"];
let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let circleArray = [];

//Event listeners
window.addEventListener("mousemove", (event) => {
  mouseX = event.x;
  mouseY = event.y;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

//Circle Class

class Circle {
  constructor() {
    this.x = Math.floor(Math.random() * window.innerWidth);
    this.y = Math.floor(Math.random() * window.innerHeight);
    this.dx = Math.random() - 0.5;
    this.dy = Math.random() - 0.5;
    this.radius = Math.random() * 3 + 1;
    this.minRadius = this.radius;
    this.c = canvas.getContext("2d");
    this.color = colorArray[Math.floor(Math.random() * colorArray.length + 1)];
  }
  draw() {
    this.c.beginPath();
    this.c.fillStyle = this.color;
    this.c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.c.strokeStyle = "black";
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

    //Interactivity

    if (
      mouseX - this.x < 50 &&
      mouseX - this.x > -50 &&
      mouseY - this.y < 50 &&
      mouseY - this.y > -50
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

//Functions

for (let i = 0; i < 900; i++) {
  circleArray.push(new Circle());
}

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
};

const init = () => {
  circleArray = [];
  for (let i = 0; i < 900; i++) {
    circleArray.push(new Circle());
  }
};

animate();
init();
