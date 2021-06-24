import { canvas } from "./class.js";

//Declaring grid
let grid;

//Game of life Logic

//Drawing the lines of the grid
function drawLine(init_x, init_y, final_x, final_y) {
  canvas.c.beginPath();
  canvas.c.moveTo(init_x, init_y);
  canvas.c.lineTo(final_x, final_y);
  canvas.c.strokeStyle = canvas.gridColor;
  canvas.c.stroke();
}

//Clear the cells while maintening the grid
function cleargrid() {
  canvas.c.clearRect(
    0,
    0,
    canvas.interval * canvas.cols,
    canvas.interval * canvas.rows
  );
  for (let i = 0; i <= canvas.width; i = i + canvas.interval) {
    for (let j = 0; j <= canvas.height; j = j + canvas.interval) {
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
grid = make2DArray(canvas.cols, canvas.rows);

// Randomly fill grid with 0s and 1s
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
  requestAnimationFrame(drawgrid);
}

export { drawgrid };