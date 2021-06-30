//Imports
import { canvas } from "./canvasClass.js";
import { Cell } from "./cellClass.js";
import { drawGrid, make2DArray } from "./constants.js";

//Variables
const canvasHTML = document.querySelector("canvas");
let grid;
grid = make2DArray(canvas.cols, canvas.rows);

//Draw an empty grid
drawGrid();

// fill the grid with cell Objects
for (let i = 0; i < canvas.cols; i++) {
  for (let j = 0; j < canvas.rows; j++) {
    grid[i][j] = new Cell(i * canvas.interval, j * canvas.interval, canvas);
  }
}

// Counting the number of alive neighbors of a cell in grid
function countAliveNeighbors(grid, x, y) {
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
}

// Create a new grid and populate it with rules of Game of Life
function getnext() {
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
}

//Function that display random squares on the grid
function renderRandomSquares() {
  drawGrid();

  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      grid[i][j].state = Math.floor(Math.random() * 2);
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
}

//Function that executes the GOL rules on the squares that are displayed on the grid
function runGameofLife() {
  drawGrid();

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
  grid = getnext();
  requestAnimationFrame(runGameofLife);
}

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
