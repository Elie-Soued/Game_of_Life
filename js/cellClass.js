import { canvas } from "./canvasClass.js";

const canvasHTML = document.querySelector("canvas");
let gridArray = [];
let cell;

class Cell {
  constructor(x, y, canvasObject) {
    this.x = x;
    this.y = y;
    this.state = 0;
    this.canvas = canvasObject;
    this.c = canvasObject.c;
  }

  drawLine(init_x, init_y, final_x, final_y) {
    this.c.beginPath();
    this.c.moveTo(init_x, init_y);
    this.c.lineTo(final_x, final_y);
    this.c.strokeStyle = this.canvas.gridColor;
    this.c.stroke();
  }

  fillCell(x, y) {
    this.c.beginPath();
    this.c.fillStyle = this.canvas.squareColor;
    this.c.fillRect(
      x,
      y,
      this.canvas.interval - 0.4,
      this.canvas.interval - 0.4
    );
    this.c.stroke();
  }

  clearCell(x, y) {
    this.c.clearRect(x, y, this.canvas.interval, this.canvas.interval);
    this.drawLine(x, y, x + this.canvas.interval, y);
    this.drawLine(x, y, x, y + this.canvas.interval);
    this.drawLine(
      x,
      y + this.canvas.interval,
      x + this.canvas.interval,
      y + this.canvas.interval
    );
    this.drawLine(
      x + this.canvas.interval,
      y + this.canvas.interval,
      x + this.canvas.interval,
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

//--------------end of Cell Class ----------------------------

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

//Get the x and y of the location I clicked on the canvas and assign a cell in the gridArray that has these specs.
//Once we found the cell, toggle its state
//for a state === 1 : fill the square, for a state === 0 : clear the cell.
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
