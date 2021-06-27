//Onclick, turn cell to black and apply the Game of life algorithm on the form you drew.
//---------------------------------------------------------------------------------------

//Imports
import { canvas } from "./canvasClass.js";
import { Cell } from "./cellClass.js";
import { drawGrid, make2DArray } from "./constants.js";

//Variables
const canvasHTML = document.querySelector("canvas");
let grid;
drawGrid();
grid = make2DArray(canvas.cols, canvas.rows);

// fill grid with cells
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

function renderSquares() {
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
  requestAnimationFrame(renderSquares);
}

//Get the x and y of the location I clicked on the canvas and assign a cell in the gridArray that has these specs.
//Once we found the cell, toggle its state
//for a state === 1 : fill the square, for a state === 0 : clear the cell.
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

export { renderSquares };
