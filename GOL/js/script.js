//Imports and variable declaration
import { canvas, canvasHTML } from "./canvasClass.js";
import { Cell } from "./cellClass.js";
import { drawGrid, make2DArray, countAliveNeighbors } from "./constants.js";

//1-Create a 2D Array called Grid and fill it with empty cells
let grid = make2DArray(canvas.cols, canvas.rows);
for (let i = 0; i < canvas.cols; i++) {
  for (let j = 0; j < canvas.rows; j++) {
    grid[i][j] = new Cell(i * canvas.interval, j * canvas.interval, canvas);
  }
}

//2-getnext will create a 2D Array called Next based on Grid and on the Rules of GOL
const getnext = () => {
  let next = make2DArray(canvas.cols, canvas.rows);
  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      next[i][j] = new Cell(i * canvas.interval, j * canvas.interval, canvas);
    }
  }

  //3- Here we check the state of the grid cells + numb of living neighbors
  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      let aliveNeighbors = countAliveNeighbors(grid, i, j);
      //4- these are the GOL Rules
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

//5- renderSquares colors the living cells
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

//6- renderRandomSquares gives the grid cells a random value of 1 or 0
const renderRandomSquares = () => {
  drawGrid();
  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      grid[i][j].state = Math.floor(Math.random() * 2);
    }
  }
  renderSquares();
};

//7-runGameOflife runs or stops the GOL Algorithm depending on the value of isRunning
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
