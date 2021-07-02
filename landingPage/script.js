let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

// for (let i = 0; i < 1000; i++) {
//   let x = Math.floor(Math.random() * window.innerWidth);
//   let y = Math.floor(Math.random() * window.innerHeight);
//   c.beginPath();
//   c.fillStyle = "black";
//   c.arc(x, y, 10, 0, 2 * Math.PI);
//   c.strokeStyle = "black";
//   c.stroke();
// }

class Circle {
  constructor() {
    this.x = Math.floor(Math.random() * window.innerWidth);
    this.y = Math.floor(Math.random() * window.innerHeight);
    this.dx = Math.random() - 0.5;
    this.dy = Math.random() - 0.5;
    this.radius = 30;
  }
  draw() {
    c.beginPath();
    c.fillStyle = "black";
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.strokeStyle = "black";
    c.stroke();
    c.fill();
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
    this.draw();
  }
}

const circleArray = [];
for (let i = 0; i < 500; i++) {
  circleArray.push(new Circle());
}

const animate = () => {
  requestAnimationFrame(animate);
  for (let i = 0; i < 100; i++) {}
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
};

animate();
