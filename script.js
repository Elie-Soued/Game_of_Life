//Putting Event Listener to the Buttons
document.getElementById("run").addEventListener("click", drawgrid);
document.getElementById("stop").addEventListener("click", () => {
  location.reload();
});

//Set up the canvas
let canvas = document.querySelector("canvas");
canvas.width = 1500;
canvas.height = 500;
let c = canvas.getContext("2d");

// Declare global variables
let interval = 10;
let grid;
let cols = canvas.width / interval;
let rows = canvas.height / interval;

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

//Create an empty 2D Array called grid
function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

grid = make2DArray(cols, rows);

// Randomly fill Grid with 0s and 1s
for (let i = 0; i < cols; i++) {
  for (let j = 0; j < rows; j++) {
    grid[i][j] = Math.floor(Math.random() * 2);
  }
}

// Counting the neighbors of a cell grid [i][j]
function countNeighbors(grid, x, y) {
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

// Create getnext and populate it with rules of Game of Life
function getnext() {
  let next = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      let neighbors = countNeighbors(grid, i, j);
      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }

  return next;
}

// Turning 1s into black squares
function drawgrid() {
  requestAnimationFrame(drawgrid);
  cleargrid();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * interval;
      let y = j * interval;
      if (grid[i][j] == 1) {
        c.beginPath();
        c.fillStyle = "#FFFFFF";
        c.fillRect(x, y, interval - 1, interval - 1);
        c.stroke();
      }
    }
  }

  grid = getnext();
}
