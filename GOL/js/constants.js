import { canvas } from "./canvasClass.js";

//Variables
//**********/
const canvasHTML = document.getElementById("canvasHTML");
const runGameofLifeButton = document.getElementById("runGameofLifeButton");
const stop = document.getElementById("stop");
const reload = document.getElementById("reload");
const zoomIn = document.getElementById("ZoomIn");
const zoomOut = document.getElementById("ZoomOut");
const increaseCanvas = document.getElementById("IncreaseCanvas");
const decreaseCanvas = document.getElementById("DecreaseCanvas");
const colorPickerBackground = document.getElementById("colorPickerBackground");
const colorPickerGrid = document.getElementById("colorPickerGrid");
const colorPickerSquare = document.getElementById("colorPickerSquare");
const fillRandomSquaresButton = document.getElementById(
  "fillRandomSquaresButton"
);
const nextPicture = document.getElementById("nextPicture");
const previousPicture = document.getElementById("previousPicture");

const imagesArray = [
  "../image/oscillators/Beacon (Period2).JPG",
  "../image/oscillators/blinker(period2).JPG",
  "../image/oscillators/Pulsar (Period3).JPG",
  "../image/oscillators/Toad (period2).JPG",
  "../image/spaceships/Lightweight spaceship.JPG",
  "../image/spaceships/middleweight spaceship.JPG",
  "../image/spaceships/heavyweight spaceship.JPG",
  "../image/spaceships/Glider.JPG",
  "../image/favicon.jpg",
];

const centralPicture = imagesArray[0];
//Functions
//**********/

//------------------------------------------------------------
const drawLine = (init_x, init_y, final_x, final_y) => {
  canvas.c.beginPath();
  canvas.c.moveTo(init_x, init_y);
  canvas.c.lineTo(final_x, final_y);
  canvas.c.strokeStyle = canvas.gridColor;
  canvas.c.stroke();
};
//---------------------------------------------------------------
const drawGrid = () => {
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
};
//-------------------------------------------------------------------------
const make2DArray = (cols, rows) => {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
};
//---------------------------------------------------------------------------
const countAliveNeighbors = (grid, x, y) => {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + canvas.cols) % canvas.cols;
      let row = (y + j + canvas.rows) % canvas.rows;

      sum += grid[col][row].state;
    }
  }
  sum = sum - grid[x][y].state;
  return sum;
};
//-------------------------------------------------------------------------------

export {
  canvasHTML,
  runGameofLifeButton,
  fillRandomSquaresButton,
  stop,
  reload,
  zoomIn,
  zoomOut,
  increaseCanvas,
  decreaseCanvas,
  colorPickerBackground,
  colorPickerSquare,
  colorPickerGrid,
  nextPicture,
  previousPicture,
  centralPicture,
  imagesArray,
  make2DArray,
  drawLine,
  drawGrid,
  countAliveNeighbors,
};
