//Imports and variable declaration
import { canvas, canvasHTML } from "./canvasClass.js";
import { Cell } from "./cellClass.js";
import { drawGrid, make2DArray, countAliveNeighbors } from "./constants.js";

let grid;
grid = make2DArray(canvas.cols, canvas.rows);

//Fill the grid with cell Objects
for (let i = 0; i < canvas.cols; i++) {
  for (let j = 0; j < canvas.rows; j++) {
    grid[i][j] = new Cell(i * canvas.interval, j * canvas.interval, canvas);
  }
}

//Create a new grid and populate it with rules of Game of Life
const getnext = () => {
  let next = make2DArray(canvas.cols, canvas.rows);
  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      next[i][j] = new Cell(i * canvas.interval, j * canvas.interval, canvas);
    }
  }
  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      let aliveNeighbors = countAliveNeighbors(grid, i, j);
      if (grid[i][j].state == 0 && aliveNeighbors == 3) {
        next[i][j].state = 1;
      } else if (
        grid[i][j].state == 1 &&
        (aliveNeighbors < 2 || aliveNeighbors > 3)
      ) {
        next[i][j].state = 0;
      } else {
        next[i][j].state = grid[i][j].state;
      }
    }
  }
  return next;
};

//Function that renders the squares
const renderSquares = () => {
  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      let x = i * canvas.interval;
      let y = j * canvas.interval;
      if (grid[i][j].state == 1) {
        canvas.c.beginPath();
        canvas.c.fillStyle = canvas.squareColor;
        canvas.c.fillRect(x, y, canvas.interval - 1, canvas.interval - 1);
        canvas.c.strokeStyle = canvas.gridColor;
        canvas.c.stroke();
      }
    }
  }
};

//Function that display random squares on the grid
const renderRandomSquares = () => {
  drawGrid();
  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      grid[i][j].state = Math.floor(Math.random() * 2);
    }
  }
  renderSquares();
};

//Function that executes the GOL rules on the squares that are displayed on the grid
const runGameofLife = () => {
  drawGrid();
  if (canvas.isRunning) {
    renderSquares();
    grid = getnext();
    requestAnimationFrame(runGameofLife);
  } else {
    renderSquares();
    grid = getnext();
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
