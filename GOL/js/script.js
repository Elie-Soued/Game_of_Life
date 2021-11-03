//Imports and variable declaration
import { canvas, canvasHTML } from "./canvasClass.js";
import {
  drawGrid,
  make2DArray,
  buildNext,
  fillRandomly,
  fillSquares,
} from "./constants.js";

//1-Create a 2D Array called Grid
let grid = make2DArray(canvas.cols, canvas.rows, canvas);

//2-Create a 2D Array called Next based on Grid and on the Rules of GOL
const getNext = () => {
  let next = make2DArray(canvas.cols, canvas.rows, canvas);
  buildNext(grid, next);
  return next;
};

//3- renderSquares colors the living cells
const renderSquares = () => {
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

//4- renderRandomSquares gives the grid cells a random value of 1 or 0
const renderRandomSquares = () => {
  drawGrid();
  fillRandomly();
  renderSquares();
};

//5-runGameOflife runs or stops the GOL Algorithm depending on the value of isRunning
const runGameofLife = () => {
  drawGrid();
  if (canvas.isRunning) {
    renderSquares();
    grid = getNext();
    requestAnimationFrame(runGameofLife);
  } else {
    renderSquares();
    grid = getNext();
  }
};

//Color cell when user clicks on the canvas
canvasHTML.addEventListener("click", (e) => {
  const rect = e.target.getBoundingClientRect();
  const x =
    Math.floor((e.clientX - rect.left) / canvas.interval) * canvas.interval;
  const y =
    Math.floor((e.clientY - rect.top) / canvas.interval) * canvas.interval;
  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      if (grid[i][j].x === x && grid[i][j].y === y) {
        grid[i][j].toggleState();
      }
    }
  }
});

export { renderRandomSquares, runGameofLife };
