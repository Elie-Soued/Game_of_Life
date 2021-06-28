import { canvas } from "./canvasClass.js";

//Variables
const runDrawnSquaresButton = document.getElementById("runDrawnSquaresButton");
const stop = document.getElementById("stop");
const stopDrawing = document.getElementById("stopDrawing");
const zoomIn = document.getElementById("ZoomIn");
const zoomOut = document.getElementById("ZoomOut");
const increaseCanvas = document.getElementById("IncreaseCanvas");
const decreaseCanvas = document.getElementById("DecreaseCanvas");
const colorPickerBackground = document.getElementById("colorPickerBackground");
const colorPickerGrid = document.getElementById("colorPickerGrid");
const colorPickerSquare = document.getElementById("colorPickerSquare");
const runRandomSquaresButton = document.getElementById("runRandomSquares");
const fillRandomSquaresButton = document.getElementById(
  "fillRandomSquaresButton"
);

//Functions

function drawLine(init_x, init_y, final_x, final_y) {
  canvas.c.beginPath();
  canvas.c.moveTo(init_x, init_y);
  canvas.c.lineTo(final_x, final_y);
  canvas.c.strokeStyle = canvas.gridColor;
  canvas.c.stroke();
}

function drawGrid() {
  canvas.c.clearRect(
    0,
    0,
    canvas.interval * canvas.cols,
    canvas.interval * canvas.rows
  );
  for (let i = 0; i <= canvas.element.width; i = i + canvas.interval) {
    for (let j = 0; j <= canvas.element.height; j = j + canvas.interval) {
      drawLine(0, j, canvas.element.width, j);
    }
    drawLine(i, 0, i, canvas.element.height);
  }
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

export {
  runDrawnSquaresButton,
  fillRandomSquaresButton,
  runRandomSquaresButton,
  stop,
  stopDrawing,
  zoomIn,
  zoomOut,
  increaseCanvas,
  decreaseCanvas,
  colorPickerBackground,
  colorPickerSquare,
  colorPickerGrid,
  make2DArray,
  drawLine,
  drawGrid,
};
