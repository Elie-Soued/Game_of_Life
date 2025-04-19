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

const gridCols = config.cols * config.interval;
const gridRows = config.rows * config.interval;

const makeFlatArray = (cols, rows) => {
  let arr = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      arr[j * cols + i] = { x: i, y: j, state: 0 };
    }
  }

  return arr;
};

let grid = makeFlatArray(gridCols, gridRows);

const canvas = new Canvas(config, grid);

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
  canvas.drawGrid();
  canvas.renderTheSquares(grid, false, gridCols, gridRows);
  grid = getNext(grid);
  if (canvas.isRunning) {
    requestAnimationFrame(runGameofLife);
  }
};

document
  .getElementById("fillRandomSquaresButton")
  .addEventListener("click", () =>
    canvas.renderTheSquares(grid, true, gridCols, gridRows)
  );

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

document.getElementById("blinker").addEventListener("click", () => {
  canvas.blinker(grid);
  canvas.renderTheSquares(grid, false, gridCols, gridRows);
});

document.getElementById("beacon").addEventListener("click", () => {
  canvas.beacon(grid);
  canvas.renderTheSquares(grid, false, gridCols, gridRows);
});

document.getElementById("glider").addEventListener("click", () => {
  canvas.glider(grid);
  canvas.renderTheSquares(grid, false, gridCols, gridRows);
});

document.getElementById("pulsar").addEventListener("click", () => {
  canvas.pulsar(grid);
  canvas.renderTheSquares(grid, false, gridCols, gridRows);
});

document.getElementById("heavyweight").addEventListener("click", () => {
  canvas.heavyweight(grid);
  canvas.renderTheSquares(grid, false, gridCols, gridRows);
});

document.getElementById("pentadecathlon").addEventListener("click", () => {
  canvas.pentadecathlon(grid);
  canvas.renderTheSquares(grid, false, gridCols, gridRows);
});

document.getElementById("toad").addEventListener("click", () => {
  canvas.toad(grid);
  canvas.renderTheSquares(grid, false, gridCols, gridRows);
});

document.getElementById("glidergun").addEventListener("click", () => {
  canvas.glidergun(grid);
  canvas.renderTheSquares(grid, false, gridCols, gridRows);
});

canvas.drawGrid();
