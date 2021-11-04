//Imports and variable declaration
import { canvas, canvasHTML } from "./canvasClass.js";
import {
  make2DArray,
  toggleCell,
  getNext,
  fillSquares,
  drawGrid,
} from "./constants.js";

//1-Create a 2D Array called Grid
let grid = make2DArray(canvas.cols, canvas.rows, canvas);

//2- renderRandomSquares gives the grid cells a random value of 1 or 0
const renderRandomSquares = () => {
  fillRandomly();
  renderTheSquares();
};

//3-runGameOflife runs or stops the GOL Algorithm depending on the value of isRunning
const runGameofLife = () => {
  drawGrid();
  if (canvas.isRunning) {
    renderTheSquares(grid);
    grid = getNext(grid);
    requestAnimationFrame(runGameofLife);
  } else {
    drawGrid();
    renderTheSquares(grid);
    grid = getNext(grid);
  }
};

//Color cell when user clicks on the canvas
canvasHTML.addEventListener("click", (e) => {
  const rect = e.target.getBoundingClientRect();
  const x =
    Math.floor((e.clientX - rect.left) / canvas.interval) * canvas.interval;
  const y =
    Math.floor((e.clientY - rect.top) / canvas.interval) * canvas.interval;
  toggleCell(x, y, grid);
});

const fillRandomly = () => {
  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      grid[i][j].state = Math.floor(Math.random() * 2);
    }
  }
};

const renderTheSquares = () => {
  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      let x = i * canvas.interval;
      let y = j * canvas.interval;
      if (grid[i][j].state == 1) {
        fillSquares(x, y);
      }
    }
  }
};

export { renderRandomSquares, runGameofLife };
