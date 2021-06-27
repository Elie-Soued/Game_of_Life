class Cell {
  constructor(x, y, canvasObject) {
    this.x = x;
    this.y = y;
    this.state = 0;
    this.canvas = canvasObject;
    this.c = canvasObject.c;
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
}

export { Cell };
