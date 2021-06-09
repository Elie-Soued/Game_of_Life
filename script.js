//New EventListener
document.querySelector("canvas").addEventListener("click", (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / interval) * interval;
  const y = Math.floor((e.clientY - rect.top) / interval) * interval;
  const square = { x: x, y: y, state: 1 };
  squares.push(square);
  console.log(squares);
  drawASquare(x, y);
});

//Set up the canvas
let canvas = document.querySelector("canvas");
canvas.width = 500;
canvas.height = 200;
let c = canvas.getContext("2d");
let squares = [];

// Declare global variables
let interval = 20;
let grid;
let cols = canvas.width / interval;
let rows = canvas.height / interval;

//Set the Grid
function setGrid() {
  for (i = 0; i <= innerWidth; i = i + interval) {
    for (j = 0; j <= innerWidth; j = j + interval) {
      c.beginPath();
      c.moveTo(0, j);
      c.lineTo(innerWidth, j);
      c.stroke();
    }
    c.beginPath();
    c.moveTo(i, 0);
    c.lineTo(i, innerHeight);
    c.stroke();
  }
}
setGrid();

//Clear the cells while maintening the grid
function cleargrid() {
  c.clearRect(0, 0, interval * cols, interval * rows);
  for (i = 0; i <= innerWidth; i = i + interval) {
    for (j = 0; j <= innerWidth; j = j + interval) {
      c.beginPath();
      c.moveTo(0, j);
      c.lineTo(innerWidth, j);
      c.stroke();
    }
    c.beginPath();
    c.moveTo(i, 0);
    c.lineTo(i, innerHeight);
    c.stroke();
  }
}

const drawASquare = (x, y) => {
  c.beginPath();
  c.fillStyle = "#000000";
  c.fillRect(x, y, interval - 1, interval - 1);
  c.stroke();
};

const clearASquare = (x, y) => {
  c.beginPath();
  c.fillStyle = "#FFFFFF";
  c.fillRect(x, y, interval - 1, interval - 1);
  c.stroke();
};

// Old Code : Might be reused at a later stage
//------------------------------------------------------------------------
//-------------------------------------------------------------------------

// Counting the number of alive neighbors of a cell in grid
function countAliveNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum = sum - grid[x][y];
  return sum;
}

// Create a new grid and populate it with rules of Game of Life
function getnext() {
  let next = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      let aliveNeighbors = countAliveNeighbors(grid, i, j);
      if (state == 0 && aliveNeighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }

  return next;
}

// drawgrid does the following:
//1- It clears the grid(line 93)
//2- It draws a white square if grid[i][j] == 1
//3- it gives grid the value of the execution of getnext()
//4- It execute drawgrid again

function drawgrid() {
  cleargrid();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * interval;
      let y = j * interval;
      if (grid[i][j] == 1) {
        c.beginPath();
        c.fillStyle = "#000000";
        c.fillRect(x, y, interval - 1, interval - 1);
        c.stroke();
      }
    }
  }
  grid = getnext();
  requestAnimationFrame(drawgrid);
}
