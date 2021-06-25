import { canvas } from "./canvasClass.js";

const canvasHTML = document.querySelector("canvas");
let gridArray = [];
let cell;

class Cell {
  constructor(x, y, canvasObject) {
    this.id = `id number ${x} - ${y}`;
    this.x = x;
    this.y = y;
    this.state = 0;
    this.c = canvasObject.c;
  }

  drawLine(init_x, init_y, final_x, final_y) {
    this.c.beginPath();
    this.c.moveTo(init_x, init_y);
    this.c.lineTo(final_x, final_y);
    this.c.strokeStyle = canvas.gridColor;
    this.c.stroke();
  }

  fillCell(x, y) {
    this.c.beginPath();
    this.c.fillStyle = canvas.squareColor;
    this.c.fillRect(x, y, canvas.interval - 0.4, canvas.interval - 0.4);
    this.c.stroke();
  }

  clearCell(x, y) {
    this.c.clearRect(x, y, canvas.interval, canvas.interval);
    this.drawLine(x, y, x + canvas.interval, y);
    this.drawLine(x, y, x, y + canvas.interval);
    this.drawLine(
      x,
      y + canvas.interval,
      x + canvas.interval,
      y + canvas.interval
    );
    this.drawLine(
      x + canvas.interval,
      y + canvas.interval,
      x + canvas.interval,
      y
    );
  }

  toggleState() {
    if (!this.state) {
      this.state = 1;
      this.fillCell(this.x, this.y);
    } else {
      this.state = 0;
      this.clearCell(this.x, this.y);
    }
  }
}

const createGridArray = () => {
  for (let i = 0; i < canvas.cols; i++) {
    for (let j = 0; j < canvas.rows; j++) {
      gridArray.push(
        new Cell(i * canvas.interval, j * canvas.interval, canvas)
      );
    }
  }
  return gridArray;
};

createGridArray();

canvasHTML.addEventListener("click", (e) => {
  const rect = e.target.getBoundingClientRect();
  const x =
    Math.floor((e.clientX - rect.left) / canvas.interval) * canvas.interval;
  const y =
    Math.floor((e.clientY - rect.top) / canvas.interval) * canvas.interval;

  for (let i = 0; i < gridArray.length; i++) {
    if (gridArray[i].x === x && gridArray[i].y === y) {
      cell = gridArray[i];
    }
  }
  cell.toggleState();
});

export { gridArray };
