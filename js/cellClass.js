import { canvas } from "./canvasClass.js";

const canvasHTML = document.querySelector("canvas");
let grid;

class Cell {
  constructor(x, y, canvasObject) {
    this.x = x;
    this.y = y;
    this.state = 0;
    this.canvas = canvasObject;
    this.c = canvasObject.c;
  }

  toggleState() {
    if (!this.state) {
      this.state = 1;
      this.fillCell(this.x, this.y);
    } else {
      this.state = 0;
      this.clearCell(this.x, this.y);
    }
  }

  drawLine(init_x, init_y, final_x, final_y) {
    this.c.beginPath();
    this.c.moveTo(init_x, init_y);
    this.c.lineTo(final_x, final_y);
    this.c.strokeStyle = this.canvas.gridColor;
    this.c.stroke();
  }

  fillCell(x, y) {
    this.c.beginPath();
    this.c.fillStyle = this.canvas.squareColor;
    this.c.fillRect(
      x,
      y,
      this.canvas.interval - 0.4,
      this.canvas.interval - 0.4
    );
    this.c.stroke();
  }

  clearCell(x, y) {
    this.c.clearRect(x, y, this.canvas.interval, this.canvas.interval);
    this.drawLine(x, y, x + this.canvas.interval, y);
    this.drawLine(x, y, x, y + this.canvas.interval);
    this.drawLine(
      x,
      y + this.canvas.interval,
      x + this.canvas.interval,
      y + this.canvas.interval
    );
    this.drawLine(
      x + this.canvas.interval,
      y + this.canvas.interval,
      x + this.canvas.interval,
      y
    );
  }
}

//--------------end of Cell Class ----------------------------

//Drawing the lines of the grid
function drawLine(init_x, init_y, final_x, final_y) {
  canvas.c.beginPath();
  canvas.c.moveTo(init_x, init_y);
  canvas.c.lineTo(final_x, final_y);
  canvas.c.strokeStyle = canvas.gridColor;
  canvas.c.stroke();
}

//Clear the cells while maintening the grid
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

//Create an empty 2D Array called
function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

//Assign to the variable grid the Value of the execution of Make2DArray
grid = make2DArray(canvas.cols, canvas.rows);

// fill grid with cells
for (let i = 0; i < canvas.cols; i++) {
  for (let j = 0; j < canvas.rows; j++) {
    grid[i][j] = Math.floor(Math.random() * 2);
    // grid[i][j] = new Cell(i * canvas.interval, j * canvas.interval, canvas);
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

function renderSquares() {
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
        renderSquares();
      }
    }
  }
});

export { renderSquares };
