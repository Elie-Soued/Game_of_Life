class Traverser {
  constructor(canvas, iterator, grid) {
    this.canvas = canvas;
    this.iterator = iterator;
    this.grid = grid;
  }

  iterate() {
    for (let i = 0; i < this.canvas.cols; i++) {
      for (let j = 0; j < this.canvas.rows; j++) {
        this.iterator(i, j);
      }
    }
  }
}

export { Traverser };
