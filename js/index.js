import { Canvas } from "./Canvas.js";
import { Cell } from "./Cell.js";
import {
  heavyweight,
  pulsar,
  glidergun,
  toad,
  pentadecathlon,
  glider,
  beacon,
  blinker,
} from "./patterns.js";

const config = {
  HTMLelement: document.querySelector("canvas"),
  backgroundColor: "white",
  gridColor: "lightgray",
  squareColor: "black",
  interval: 20,
  cols: 40,
  rows: 20,
  maxWidth: 1130,
  maxHeight: 720,
  minWidth: 800,
  minHeight: 400,
};

const canvas = new Canvas(config);

// Functions related to the drawing of the canvas

const drawLine = (init_x, init_y, final_x, final_y) => {
  canvas.c.beginPath();
  canvas.c.moveTo(init_x, init_y);
  canvas.c.lineTo(final_x, final_y);
  canvas.c.strokeStyle = canvas.gridColor;
  canvas.c.stroke();
};

const drawGrid = () => {
  canvas.c.clearRect(
    0,
    0,
    canvas.interval * gridCols,
    canvas.interval * gridRows
  );
  for (let i = 0; i <= canvas.HTMLelement.width; i = i + canvas.interval) {
    for (let j = 0; j <= canvas.HTMLelement.height; j = j + canvas.interval) {
      drawLine(0, j, canvas.HTMLelement.width, j);
    }
    drawLine(i, 0, i, canvas.HTMLelement.height);
  }
};

const fillSquares = (x, y) => {
  canvas.c.beginPath();
  canvas.c.fillStyle = canvas.squareColor;
  canvas.c.fillRect(x, y, canvas.interval - 1, canvas.interval - 1);
  canvas.c.strokeStyle = canvas.gridColor;
  canvas.c.stroke();
};

const renderTheSquares = (grid, init) => {
  for (let j = 0; j < gridRows; j++) {
    for (let i = 0; i < gridCols; i++) {
      let x = i * canvas.interval;
      let y = j * canvas.interval;

      if (init) {
        grid[j * gridCols + i].state = Math.floor(Math.random() * 2);
      }

      if (grid[j * gridCols + i].state == 1) {
        fillSquares(x, y);
      }
    }
  }
};

const toggleCell = (x, y, grid) => {
  for (let j = 0; j < gridRows; j++) {
    for (let i = 0; i < gridCols; i++) {
      let index = j * gridCols + i;
      if (grid[index].x === x && grid[index].y === y) {
        grid[index].toggleState();
      }
    }
  }
};

// Functions related to the Game of life algorithm

const gridCols = canvas.cols * canvas.interval;
const gridRows = canvas.rows * canvas.interval;

const makeFlatArray = (cols, rows, canvas) => {
  let arr = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      arr[j * cols + i] = new Cell(
        i * canvas.interval,
        j * canvas.interval,
        canvas
      );
    }
  }

  return arr;
};

let grid = makeFlatArray(gridCols, gridRows, canvas);

const countAliveNeighbors = (grid, x, y) => {
  let sum = 0;
  for (let j = -1; j < 2; j++) {
    for (let i = -1; i < 2; i++) {
      let col = (x + i + gridCols) % gridCols;
      let row = (y + j + gridRows) % gridRows;

      sum += grid[row * gridCols + col].state;
    }
  }
  sum = sum - grid[y * gridCols + x].state;
  return sum;
};

const buildNext = (grid, next) => {
  for (let i = 0; i < gridCols; i++) {
    for (let j = 0; j < gridRows; j++) {
      let index = j * gridCols + i;

      let aliveNeighbors = countAliveNeighbors(grid, i, j);

      if (grid[index].state == 0 && aliveNeighbors == 3) {
        next[index].state = 1;
        next[index].aliveNeighbors = 3;
      } else if (
        grid[index].state == 1 &&
        (aliveNeighbors < 2 || aliveNeighbors > 3)
      ) {
        next[index].state = 0;
        next[index].aliveNeighbors = aliveNeighbors;
      } else {
        next[index].state = grid[index].state;
        next[index].aliveNeighbors = aliveNeighbors;
      }
    }
  }
};

const getNext = (grid) => {
  let next = makeFlatArray(gridCols, gridRows, canvas);
  buildNext(grid, next);
  return next;
};

const runGameofLife = () => {
  drawGrid();
  renderTheSquares(grid, false);
  grid = getNext(grid);
  if (canvas.isRunning) {
    requestAnimationFrame(runGameofLife);
  }
};

// Adding functionalities to the icons

document
  .getElementById("fillRandomSquaresButton")
  .addEventListener("click", () => renderTheSquares(grid, true));

document.getElementById("runGameofLifeButton").addEventListener("click", () => {
  canvas.restartGameofLife();
  runGameofLife();
});

document.getElementById("pause").addEventListener("click", () => {
  canvas.pauseGameofLife();
});

document.getElementById("reload").addEventListener("click", () => {
  location.reload();
});

const zoomInButtons = document.querySelectorAll(".ZoomIn");
zoomInButtons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    zoomInAction = setInterval(() => {
      canvas.increaseInterval();
    }, 100);
  });

  button.addEventListener("click", () => {
    canvas.increaseInterval();
  });

  button.addEventListener("mouseup", () => {
    clearInterval(zoomInAction);
  });
});

const zoomOutButtons = document.querySelectorAll(".ZoomOut");
zoomOutButtons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    zoomOutAction = setInterval(() => {
      canvas.decreaseInterval();
    }, 100);
  });

  button.addEventListener("click", () => {
    canvas.decreaseInterval();
  });

  button.addEventListener("mouseup", () => {
    clearInterval(zoomOutAction);
  });
});

const increaseCanvas = document.getElementById("IncreaseCanvas");

let zoomInAction;
let zoomOutAction;
let increaseCanvasAction;
let decreaseCanvasAction;

increaseCanvas.addEventListener("mousedown", () => {
  increaseCanvasAction = setInterval(() => {
    canvas.increaseWidth();
    canvas.increaseHeight();
  }, 100);
});

increaseCanvas.addEventListener("click", () => {
  canvas.increaseWidth();
  canvas.increaseHeight();
});

increaseCanvas.addEventListener("mouseup", () => {
  clearInterval(increaseCanvasAction);
});

const decreaseCanvas = document.getElementById("DecreaseCanvas");

decreaseCanvas.addEventListener("mousedown", () => {
  decreaseCanvasAction = setInterval(() => {
    canvas.decreaseWidth();
    canvas.decreaseHeight();
  }, 100);
});

decreaseCanvas.addEventListener("click", () => {
  canvas.decreaseWidth();
  canvas.decreaseHeight();
});

decreaseCanvas.addEventListener("mouseup", () => {
  clearInterval(decreaseCanvasAction);
});

document
  .getElementById("colorPickerBackground")
  .addEventListener("input", () => {
    canvas.setBackgroundColor(colorPickerBackground.value);
  });

document.getElementById("colorPickerGrid").addEventListener("input", () => {
  canvas.setGridColor(colorPickerGrid.value);
  drawGrid();
});

document.getElementById("colorPickerSquare").addEventListener("input", () => {
  canvas.setSquareColor(colorPickerSquare.value);
});

canvasHTML.addEventListener("click", (e) => {
  const rect = e.target.getBoundingClientRect();
  const x =
    Math.floor((e.clientX - rect.left) / canvas.interval) * canvas.interval;
  const y =
    Math.floor((e.clientY - rect.top) / canvas.interval) * canvas.interval;
  toggleCell(x, y, grid);
});

const centerOfGrid =
  (canvas.rows / 2) * gridCols - gridCols + canvas.cols / 2 - 1;

document.getElementById("blinker").addEventListener("click", () => {
  blinker(grid, gridCols, centerOfGrid);
  renderTheSquares(grid, false);
});

document.getElementById("beacon").addEventListener("click", () => {
  beacon(grid, gridCols, centerOfGrid);
  renderTheSquares(grid, false);
});

document.getElementById("glider").addEventListener("click", () => {
  glider(grid, gridCols, centerOfGrid);
  renderTheSquares(grid, false);
});

document.getElementById("pulsar").addEventListener("click", () => {
  pulsar(grid, gridCols, centerOfGrid);
  renderTheSquares(grid, false);
});

document.getElementById("heavyweight").addEventListener("click", () => {
  heavyweight(grid, gridCols, centerOfGrid);
  renderTheSquares(grid, false);
});

document.getElementById("pentadecathlon").addEventListener("click", () => {
  pentadecathlon(grid, gridCols, centerOfGrid);
  renderTheSquares(grid, false);
});

document.getElementById("toad").addEventListener("click", () => {
  toad(grid, gridCols, centerOfGrid);
  renderTheSquares(grid, false);
});

document.getElementById("glidergun").addEventListener("click", () => {
  glidergun(grid, gridCols, centerOfGrid);
  renderTheSquares(grid, false);
});

drawGrid();
