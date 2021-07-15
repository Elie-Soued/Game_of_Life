import { maxRadius, colorArray, canvas } from "./constants.js";
import { mouseX, mouseY } from "./eventListener.js";

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

export { Circle };
