import { Canvas } from "./Canvas.js";
import { Cell } from "./Cell.js";

let zoomInAction;
let zoomOutAction;
let increaseCanvasAction;
let decreaseCanvasAction;

const canvas = new Canvas(
  document.querySelector("canvas"),
  "white",
  "black",
  "lightgray",
  20,
  60,
  40
);

// Game of life algorithm

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

let grid = makeFlatArray(canvas.cols, canvas.rows, canvas);

const countAliveNeighbors = (grid, x, y) => {
  let sum = 0;
  for (let j = -1; j < 2; j++) {
    for (let i = -1; i < 2; i++) {
      let col = (x + i + canvas.cols) % canvas.cols;
      let row = (y + j + canvas.rows) % canvas.rows;

      sum += grid[row * canvas.cols + col].state;
    }
  }
  sum = sum - grid[y * canvas.cols + x].state;
  return sum;
};

const buildNext = (grid, next) => {
  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      let index = j * canvas.cols + i;

      if (grid[index].state == 0 && grid[index].aliveNeighbors == 0) {
        continue;
      }

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
  let next = makeFlatArray(canvas.cols, canvas.rows, canvas);
  buildNext(grid, next);
  return next;
};

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
    canvas.interval * canvas.cols,
    canvas.interval * canvas.rows
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
  for (let j = 0; j < canvas.rows; j++) {
    for (let i = 0; i < canvas.cols; i++) {
      let x = i * canvas.interval;
      let y = j * canvas.interval;

      if (init) {
        grid[j * canvas.cols + i].state = Math.floor(Math.random() * 2);
      }

      if (grid[j * canvas.cols + i].state == 1) {
        fillSquares(x, y);
      }
    }
  }
};

const runGameofLife = () => {
  drawGrid();
  renderTheSquares(grid, false);
  grid = getNext(grid);
  if (canvas.isRunning) {
    requestAnimationFrame(runGameofLife);
  }
};

const toggleCell = (x, y, grid) => {
  for (let j = 0; j < canvas.rows; j++) {
    for (let i = 0; i < canvas.cols; i++) {
      let index = j * canvas.cols + i;
      if (grid[index].x === x && grid[index].y === y) {
        grid[index].toggleState();
      }
    }
  }
};

const blinker = () => {
  grid[10 * canvas.cols + 19].state = 1;
  grid[11 * canvas.cols + 19].state = 1;
  grid[12 * canvas.cols + 19].state = 1;
  renderTheSquares(grid, false);
};

const beacon = () => {
  grid[11 * canvas.cols + 20].state = 1;
  grid[11 * canvas.cols + 19].state = 1;
  grid[12 * canvas.cols + 19].state = 1;
  grid[14 * canvas.cols + 21].state = 1;
  grid[14 * canvas.cols + 22].state = 1;
  grid[13 * canvas.cols + 22].state = 1;
  renderTheSquares(grid, false);
};

const glider = () => {
  grid[10 * canvas.cols + 19].state = 1;
  grid[12 * canvas.cols + 19].state = 1;
  grid[12 * canvas.cols + 20].state = 1;
  grid[11 * canvas.cols + 20].state = 1;
  grid[11 * canvas.cols + 21].state = 1;
  renderTheSquares(grid, false);
};

const pentadecathlon = () => {
  grid[9 * canvas.cols + 29].state = 1;
  grid[10 * canvas.cols + 29].state = 1;
  grid[11 * canvas.cols + 29].state = 1;
  grid[11 * canvas.cols + 28].state = 1;
  grid[11 * canvas.cols + 30].state = 1;

  grid[14 * canvas.cols + 28].state = 1;
  grid[14 * canvas.cols + 29].state = 1;
  grid[14 * canvas.cols + 30].state = 1;
  grid[15 * canvas.cols + 29].state = 1;
  grid[16 * canvas.cols + 29].state = 1;
  grid[17 * canvas.cols + 29].state = 1;
  grid[18 * canvas.cols + 29].state = 1;
  grid[19 * canvas.cols + 29].state = 1;
  grid[19 * canvas.cols + 28].state = 1;
  grid[19 * canvas.cols + 30].state = 1;

  grid[22 * canvas.cols + 30].state = 1;
  grid[22 * canvas.cols + 28].state = 1;
  grid[22 * canvas.cols + 29].state = 1;

  grid[23 * canvas.cols + 29].state = 1;
  grid[24 * canvas.cols + 29].state = 1;

  renderTheSquares(grid, false);
};

const toad = () => {
  grid[9 * canvas.cols + 29].state = 1;
  grid[9 * canvas.cols + 30].state = 1;
  grid[9 * canvas.cols + 31].state = 1;
  grid[10 * canvas.cols + 28].state = 1;
  grid[10 * canvas.cols + 29].state = 1;
  grid[10 * canvas.cols + 30].state = 1;
  renderTheSquares(grid, false);
};

const glidergun = () => {
  console.log("canvas.cols :>> ", canvas.cols);
  grid[19 * canvas.cols + 5].state = 1;
  grid[19 * canvas.cols + 6].state = 1;
  grid[20 * canvas.cols + 5].state = 1;
  grid[20 * canvas.cols + 6].state = 1;

  grid[17 * canvas.cols + 17].state = 1;
  grid[17 * canvas.cols + 16].state = 1;
  grid[18 * canvas.cols + 15].state = 1;
  grid[19 * canvas.cols + 14].state = 1;
  grid[20 * canvas.cols + 14].state = 1;
  grid[21 * canvas.cols + 14].state = 1;
  grid[22 * canvas.cols + 15].state = 1;
  grid[23 * canvas.cols + 16].state = 1;
  grid[23 * canvas.cols + 17].state = 1;

  grid[20 * canvas.cols + 18].state = 1;
  grid[20 * canvas.cols + 20].state = 1;
  grid[20 * canvas.cols + 21].state = 1;
  grid[19 * canvas.cols + 20].state = 1;
  grid[21 * canvas.cols + 20].state = 1;
  grid[18 * canvas.cols + 19].state = 1;
  grid[22 * canvas.cols + 19].state = 1;

  grid[19 * canvas.cols + 24].state = 1;
  grid[18 * canvas.cols + 24].state = 1;
  grid[17 * canvas.cols + 24].state = 1;

  grid[19 * canvas.cols + 25].state = 1;
  grid[18 * canvas.cols + 25].state = 1;
  grid[17 * canvas.cols + 25].state = 1;

  grid[16 * canvas.cols + 26].state = 1;
  grid[20 * canvas.cols + 26].state = 1;

  grid[16 * canvas.cols + 28].state = 1;
  grid[15 * canvas.cols + 28].state = 1;

  grid[20 * canvas.cols + 28].state = 1;
  grid[21 * canvas.cols + 28].state = 1;

  grid[18 * canvas.cols + 38].state = 1;
  grid[18 * canvas.cols + 39].state = 1;
  grid[17 * canvas.cols + 38].state = 1;
  grid[17 * canvas.cols + 39].state = 1;

  renderTheSquares(grid, false);
};

const pulsar = () => {
  grid[6 * canvas.cols + 19].state = 1;
  grid[7 * canvas.cols + 19].state = 1;
  grid[8 * canvas.cols + 19].state = 1;
  grid[9 * canvas.cols + 19].state = 1;

  grid[8 * canvas.cols + 24].state = 1;
  grid[9 * canvas.cols + 24].state = 1;
  grid[7 * canvas.cols + 25].state = 1;
  grid[6 * canvas.cols + 25].state = 1;

  grid[10 * canvas.cols + 15].state = 1;
  grid[10 * canvas.cols + 16].state = 1;
  grid[10 * canvas.cols + 17].state = 1;
  grid[11 * canvas.cols + 17].state = 1;

  grid[15 * canvas.cols + 17].state = 1;
  grid[15 * canvas.cols + 18].state = 1;
  grid[15 * canvas.cols + 19].state = 1;
  grid[15 * canvas.cols + 20].state = 1;

  grid[18 * canvas.cols + 19].state = 1;
  grid[18 * canvas.cols + 20].state = 1;
  grid[19 * canvas.cols + 19].state = 1;
  grid[20 * canvas.cols + 19].state = 1;

  grid[18 * canvas.cols + 24].state = 1;
  grid[18 * canvas.cols + 25].state = 1;
  grid[19 * canvas.cols + 25].state = 1;
  grid[20 * canvas.cols + 25].state = 1;

  grid[16 * canvas.cols + 17].state = 1;
  grid[16 * canvas.cols + 18].state = 1;
  grid[16 * canvas.cols + 19].state = 1;
  grid[15 * canvas.cols + 27].state = 1;

  grid[11 * canvas.cols + 27].state = 1;
  grid[10 * canvas.cols + 27].state = 1;
  grid[10 * canvas.cols + 28].state = 1;
  grid[10 * canvas.cols + 29].state = 1;

  grid[10 * canvas.cols + 20].state = 1;
  grid[10 * canvas.cols + 21].state = 1;
  grid[11 * canvas.cols + 21].state = 1;
  grid[12 * canvas.cols + 20].state = 1;
  grid[12 * canvas.cols + 19].state = 1;
  grid[11 * canvas.cols + 19].state = 1;

  grid[10 * canvas.cols + 23].state = 1;
  grid[10 * canvas.cols + 24].state = 1;
  grid[11 * canvas.cols + 23].state = 1;
  grid[12 * canvas.cols + 24].state = 1;
  grid[12 * canvas.cols + 25].state = 1;
  grid[11 * canvas.cols + 25].state = 1;

  grid[14 * canvas.cols + 19].state = 1;
  grid[14 * canvas.cols + 20].state = 1;
  grid[15 * canvas.cols + 19].state = 1;
  grid[16 * canvas.cols + 20].state = 1;
  grid[16 * canvas.cols + 21].state = 1;
  grid[15 * canvas.cols + 21].state = 1;

  grid[15 * canvas.cols + 23].state = 1;
  grid[15 * canvas.cols + 24].state = 1;
  grid[16 * canvas.cols + 23].state = 1;
  grid[14 * canvas.cols + 24].state = 1;
  grid[14 * canvas.cols + 25].state = 1;
  grid[15 * canvas.cols + 25].state = 1;

  renderTheSquares(grid, false);
};

const heavyweight = () => {
  grid[6 * canvas.cols + 19].state = 1;
  grid[6 * canvas.cols + 20].state = 1;
  grid[6 * canvas.cols + 21].state = 1;
  grid[6 * canvas.cols + 22].state = 1;
  grid[6 * canvas.cols + 24].state = 1;
  grid[6 * canvas.cols + 25].state = 1;
  grid[7 * canvas.cols + 19].state = 1;
  grid[7 * canvas.cols + 20].state = 1;
  grid[7 * canvas.cols + 21].state = 1;
  grid[7 * canvas.cols + 22].state = 1;
  grid[7 * canvas.cols + 23].state = 1;
  grid[7 * canvas.cols + 24].state = 1;
  grid[8 * canvas.cols + 20].state = 1;
  grid[8 * canvas.cols + 21].state = 1;
  grid[8 * canvas.cols + 22].state = 1;
  grid[8 * canvas.cols + 23].state = 1;
  grid[5 * canvas.cols + 24].state = 1;
  grid[5 * canvas.cols + 23].state = 1;
  renderTheSquares(grid, false);
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
  blinker();
});

document.getElementById("beacon").addEventListener("click", () => {
  beacon();
});

document.getElementById("glider").addEventListener("click", () => {
  glider();
});

document.getElementById("pulsar").addEventListener("click", () => {
  pulsar();
});

document.getElementById("heavyweight").addEventListener("click", () => {
  heavyweight();
});

document.getElementById("pentadecathlon").addEventListener("click", () => {
  pentadecathlon();
});

document.getElementById("toad").addEventListener("click", () => {
  toad();
});

document.getElementById("glidergun").addEventListener("click", () => {
  glidergun();
});

drawGrid();
