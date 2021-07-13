class Traverser {
  constructor(canvas, executedFunction, grid) {
    this.canvas = canvas;
    this.executedFunction = executedFunction;
    this.grid = grid;
  }

  iterate() {
    for (let i = 0; i < this.canvas.cols; i++) {
      for (let j = 0; j < this.canvas.rows; j++) {
        this.executedFunction(i, j);
      }
    }
  }
}

export { Traverser };
