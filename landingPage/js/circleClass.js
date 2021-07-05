import { canvas } from "./constant.js";

class Circle {
  constructor() {
    this.x = Math.floor(Math.random() * window.innerWidth);
    this.y = Math.floor(Math.random() * window.innerHeight);
    this.dx = Math.random() - 0.5;
    this.dy = Math.random() - 0.5;
    this.radius = 30;
    this.c = canvas.getContext("2d");
  }
  draw() {
    this.c.beginPath();
    this.c.fillStyle = "black";
    this.c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.c.strokeStyle = "black";
    this.c.stroke();
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
    this.draw();
  }
}

export { Circle };
