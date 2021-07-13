// import { canvas } from "./constant.js";

// let mouseX;
// let mouseY;
// let maxRadius = 40;
// let minRadius = 2;
// let colorArray = ["#ffaa33", "#99ffaa", "#00ff00", "#ff1100", "#4411aa"];

// window.addEventListener("mousemove", (event) => {
//   mouseX = event.x;
//   mouseY = event.y;
// });

// class Circle {
//   constructor() {
//     this.x = Math.floor(Math.random() * window.innerWidth);
//     this.y = Math.floor(Math.random() * window.innerHeight);
//     this.dx = Math.random() - 0.5;
//     this.dy = Math.random() - 0.5;
//     this.radius = Math.random() * 3 + 1;
//     this.minRadius = this.radius;
//     this.c = canvas.getContext("2d");
//     this.color = colorArray[Math.floor(Math.random() * colorArray.length + 1)];
//   }
//   draw() {
//     this.c.beginPath();
//     this.c.fillStyle = "black";
//     this.c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//     this.c.strokeStyle = "black";
//     this.c.fillStyle = this.color;
//     this.c.fill();
//   }

//   update() {
//     if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }

//     if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//       this.dy = -this.dy;
//     }

//     this.x += this.dx;
//     this.y += this.dy;

//     //Interactivity

//     if (
//       mouseX - this.x < 50 &&
//       mouseX - this.x > -50 &&
//       mouseY - this.y < 50 &&
//       mouseY - this.y > -50
//     ) {
//       if (this.radius < maxRadius) {
//         this.radius += 1;
//       }
//     } else if (this.radius > this.minRadius) {
//       this.radius -= 1;
//     }

//     this.draw();
//   }
// }

// export { Circle };
