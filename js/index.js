import { Canvas } from "./Canvas.js";

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

const cols = config.cols * config.interval;
const rows = config.rows * config.interval;

let startGameOfLife = false;

const makeFlatArray = (cols, rows) => {
  let arr = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      arr[j * cols + i] = { x: i, y: j, state: 0 };
    }
  }

  return arr;
};

let grid = makeFlatArray(cols, rows);

const countAliveNeighbors = (grid, x, y) => {
  let sum = 0;
  for (let j = -1; j < 2; j++) {
    for (let i = -1; i < 2; i++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;

      sum += grid[row * cols + col].state;
    }
  }
  sum = sum - grid[y * cols + x].state;
  return sum;
};

const buildNext = (grid, next) => {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let index = j * cols + i;

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

const createNextGeneration = (grid) => {
  let next = makeFlatArray(cols, rows, canvas);
  buildNext(grid, next);
  return next;
};

const runGameofLife = () => {
  canvas.drawGrid();
  canvas.renderTheSquares(grid, cols, rows);
  grid = createNextGeneration(grid);
  if (startGameOfLife) {
    requestAnimationFrame(runGameofLife);
  }
};

document
  .getElementById("fillRandomSquaresButton")
  .addEventListener("click", () =>
    canvas.renderTheSquares(grid, cols, rows, true)
  );

document.getElementById("runGameofLifeButton").addEventListener("click", () => {
  startGameOfLife = true;
  runGameofLife();
});

document.getElementById("pause").addEventListener("click", () => {
  startGameOfLife = false;
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
    (Math.floor((e.clientX - rect.left) / canvas.interval) * canvas.interval) /
    canvas.interval;
  const y =
    (Math.floor((e.clientY - rect.top) / canvas.interval) * canvas.interval) /
    canvas.interval;
  canvas.toggleCell(x, y, grid, cols);
  canvas.drawGrid();
  canvas.renderTheSquares(grid, cols, rows);
});

document.getElementById("blinker").addEventListener("click", () => {
  canvas.blinker(grid, cols);
  canvas.renderTheSquares(grid, cols, rows);
});

document.getElementById("beacon").addEventListener("click", () => {
  canvas.beacon(grid, cols);
  canvas.renderTheSquares(grid, cols, rows);
});

document.getElementById("glider").addEventListener("click", () => {
  canvas.glider(grid, cols);
  canvas.renderTheSquares(grid, cols, rows);
});

document.getElementById("pulsar").addEventListener("click", () => {
  canvas.pulsar(grid, cols);
  canvas.renderTheSquares(grid, cols, rows);
});

document.getElementById("heavyweight").addEventListener("click", () => {
  canvas.heavyweight(grid, cols);
  canvas.renderTheSquares(grid, cols, rows);
});

document.getElementById("pentadecathlon").addEventListener("click", () => {
  canvas.pentadecathlon(grid, cols);
  canvas.renderTheSquares(grid, cols, rows);
});

document.getElementById("toad").addEventListener("click", () => {
  canvas.toad(grid, cols);
  canvas.renderTheSquares(grid, cols, rows);
});

document.getElementById("glidergun").addEventListener("click", () => {
  canvas.glidergun(grid, cols);
  canvas.renderTheSquares(grid, cols, rows);
});

canvas.drawGrid();
