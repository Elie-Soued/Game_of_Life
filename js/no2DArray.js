import { canvas } from "./canvasClass.js";

//New EventListener
document.querySelector("canvas").addEventListener("click", (e) => {
  const rect = e.target.getBoundingClientRect();
  const x =
    Math.floor((e.clientX - rect.left) / canvas.interval) * canvas.interval;
  const y =
    Math.floor((e.clientY - rect.top) / canvas.interval) * canvas.interval;
  // const square = { x: x, y: y, state: 1 };
  // squares.push(square);
  // console.log(squares);
  drawASquare(x, y);
});

const drawASquare = (x, y) => {
  canvas.c.beginPath();
  canvas.c.fillStyle = "#000000";
  canvas.c.fillRect(x, y, canvas.interval - 1, canvas.interval - 1);
  canvas.c.stroke();
};

const clearASquare = (x, y) => {
  canvas.c.beginPath();
  canvas.c.fillStyle = "#FFFFFF";
  canvas.c.fillRect(x, y, canvas.interval - 1, canvas.interval - 1);
  canvas.c.stroke();
};
