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

//Assign to the variable grid the Value of the execution of Make2DArray
grid = make2DArray(cols, rows);

// Randomly fill grid with 0s and 1s
for (let i = 0; i < cols; i++) {
  for (let j = 0; j < rows; j++) {
    grid[i][j] = Math.floor(Math.random() * 2);
  }
}

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

// Create getnext and populate it with rules of Game of Life
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
//4- As a result of point 3,
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
