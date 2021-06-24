//Defining the dimensions

let interval = 10;
let width = 100;
let height = 40;
let c = canvas.getContext("2d");
let grid;
canvas.width = width * interval;
canvas.height = height * interval;
let cols = canvas.width;
let rows = canvas.height;
let gridColor = "black";
let squareColor = "black";

//Declaring grid

//Game of life Logic

//Drawing the lines of the grid
function drawLine(init_x, init_y, final_x, final_y) {
  c.beginPath();
  c.moveTo(init_x, init_y);
  c.lineTo(final_x, final_y);
  c.strokeStyle = gridColor;
  c.stroke();
}

//Clear the cells while maintening the grid
function cleargrid() {
  c.clearRect(0, 0, interval * cols, interval * rows);
  for (let i = 0; i <= canvas.width; i = i + interval) {
    for (let j = 0; j <= canvas.height; j = j + interval) {
      drawLine(0, j, canvas.width, j);
    }
    drawLine(i, 0, i, canvas.height);
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

// drawgrid the grid
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
        c.fillStyle = squareColor;
        c.fillRect(x, y, interval - 1, interval - 1);
        c.strokeStyle = gridColor;
        c.stroke();
      }
    }
  }
  grid = getnext();
  requestAnimationFrame(drawgrid);
}
