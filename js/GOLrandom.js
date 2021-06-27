//Apply randomly 1 or 0 on the grid
//---------------------------------

import { canvas } from "./canvasClass.js";
import { drawGrid, make2DArray } from "./constants.js";
let grid;

//Assign to the variable grid the Value of the execution of Make2DArray
grid = make2DArray(canvas.cols, canvas.rows);

// fill grid with cells
for (let i = 0; i < canvas.cols; i++) {
  for (let j = 0; j < canvas.rows; j++) {
    grid[i][j] = Math.floor(Math.random() * 2);
  }
}

// Counting the number of alive neighbors of a cell in grid
function countAliveNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + canvas.cols) % canvas.cols;
      let row = (y + j + canvas.rows) % canvas.rows;

      sum += grid[col][row];
    }
  }
  sum = sum - grid[x][y];
  return sum;
}

// Create a new grid and populate it with rules of Game of Life
function getnext() {
  let next = make2DArray(canvas.cols, canvas.rows);
  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      let aliveNeighbors = countAliveNeighbors(grid, i, j);
      if (grid[i][j] == 0 && aliveNeighbors == 3) {
        next[i][j] = 1;
      } else if (
        grid[i][j] == 1 &&
        (aliveNeighbors < 2 || aliveNeighbors > 3)
      ) {
        next[i][j] = 0;
      } else {
        next[i][j] = grid[i][j];
      }
    }
  }

  return next;
}

function renderRandomSquares() {
  drawGrid();

  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      let x = i * canvas.interval;
      let y = j * canvas.interval;
      if (grid[i][j] == 1) {
        canvas.c.beginPath();
        canvas.c.fillStyle = canvas.squareColor;
        canvas.c.fillRect(x, y, canvas.interval - 1, canvas.interval - 1);
        canvas.c.strokeStyle = canvas.gridColor;
        canvas.c.stroke();
      }
    }
  }
  grid = getnext();
  requestAnimationFrame(renderRandomSquares);
}

export { renderRandomSquares };
