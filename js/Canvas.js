class Canvas {
  constructor(config, gridArray) {
    const {
      HTMLelement,
      backgroundColor,
      gridColor,
      squareColor,
      interval,
      cols,
      rows,
      maxWidth,
      maxHeight,
      minWidth,
      minHeight,
    } = config;

    this.gridArray = gridArray;
    this.c = HTMLelement.getContext("2d");
    this.squareColor = squareColor;
    this.gridColor = gridColor;
    this.interval = interval;
    this.HTMLelement = HTMLelement;
    this.HTMLelement.style.backgroundColor = backgroundColor;
    this.HTMLelement.width = cols * this.interval;
    this.HTMLelement.height = rows * this.interval;
    this.minHeight = minHeight;
    this.minWidth = minWidth;
    this.maxHeight = maxHeight;
    this.maxWidth = maxWidth;
    this.rows = rows;
    this.cols = cols;
    this.isRunning = true;
    this.centerOfGrid =
      (this.rows / 2) * (this.cols * this.interval) -
      this.cols * this.interval +
      this.cols / 2 -
      1;
  }

  increaseInterval() {
    return (this.interval = this.interval + 1);
  }

  decreaseInterval() {
    if (this.interval > 2) {
      return (this.interval = this.interval - 1);
    }
  }

  increaseWidth() {
    if (this.HTMLelement.width < this.maxWidth) {
      return (this.HTMLelement.width = this.HTMLelement.width + 10);
    }
  }

  increaseHeight() {
    if (this.HTMLelement.height < this.maxHeight) {
      return (this.HTMLelement.height = this.HTMLelement.height + 10);
    }
  }

  decreaseWidth() {
    if (this.HTMLelement.width > this.minWidth) {
      return (this.HTMLelement.width = this.HTMLelement.width - 10);
    }
  }

  decreaseHeight() {
    if (this.HTMLelement.height > this.minHeight) {
      return (this.HTMLelement.height = this.HTMLelement.height - 10);
    }
  }

  setSquareColor(squareColor) {
    this.squareColor = squareColor;
  }

  setGridColor(gridColor) {
    this.gridColor = gridColor;
  }

  setBackgroundColor(backgroundColor) {
    this.HTMLelement.style.backgroundColor = backgroundColor;
  }

  pauseGameofLife() {
    this.isRunning = false;
  }

  restartGameofLife() {
    this.isRunning = true;
  }

  drawLine(init_x, init_y, final_x, final_y) {
    this.c.beginPath();
    this.c.moveTo(init_x, init_y);
    this.c.lineTo(final_x, final_y);
    this.c.strokeStyle = this.gridColor;
    this.c.stroke();
  }

  drawGrid() {
    this.c.clearRect(
      0,
      0,
      this.interval * this.HTMLelement.width,
      this.interval * this.HTMLelement.height
    );
    for (let i = 0; i <= this.HTMLelement.width; i = i + this.interval) {
      for (let j = 0; j <= this.HTMLelement.height; j = j + this.interval) {
        this.drawLine(0, j, this.HTMLelement.width, j);
      }
      this.drawLine(i, 0, i, this.HTMLelement.height);
    }
  }

  fillSquares(x, y) {
    this.c.beginPath();
    this.c.fillStyle = this.squareColor;
    this.c.fillRect(x, y, this.interval - 1, this.interval - 1);
    this.c.strokeStyle = this.gridColor;
    this.c.stroke();
  }

  renderTheSquares(grid, init, cols, rows) {
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        let x = i * this.interval;
        let y = j * this.interval;

        if (init) {
          grid[j * cols + i].state = Math.floor(Math.random() * 2);
        }

        if (grid[j * cols + i].state == 1) {
          this.fillSquares(x, y);
        }
      }
    }
  }

  // toggleCell(x, y) {
  //   for (let j = 0; j < this.HTMLelement.height; j++) {
  //     for (let i = 0; i < this.HTMLelement.width; i++) {
  //       let index = j * this.HTMLelement.width + i;
  //       if (this.gridArray[index].x === x && grid[index].y === y) {
  //         this.gridArray[index].toggleState();
  //       }
  //     }
  //   }
  // }

  blinker(grid) {
    grid[this.centerOfGrid].state = 1;
    grid[this.centerOfGrid + 1 * this.cols * this.interval].state = 1;
    grid[this.centerOfGrid + 2 * this.cols * this.interval].state = 1;
  }

  beacon(grid) {
    grid[this.centerOfGrid].state = 1;
    grid[this.centerOfGrid + 1].state = 1;
    grid[this.centerOfGrid + 1 * this.cols * this.interval].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval + 2].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval + 3].state = 1;
    grid[this.centerOfGrid + 2 * this.cols * this.interval + 3].state = 1;
  }

  glider(grid) {
    grid[this.centerOfGrid].state = 1;
    grid[this.centerOfGrid + 2 * this.cols * this.interval].state = 1;
    grid[this.centerOfGrid + 2 * this.cols * this.interval + 1].state = 1;
    grid[this.centerOfGrid + 1 * this.cols * this.interval + 1].state = 1;
    grid[this.centerOfGrid + 1 * this.cols * this.interval + 2].state = 1;
  }

  pentadecathlon(grid) {
    // First group (top section)
    grid[this.centerOfGrid - 7 * this.cols * this.interval].state = 1;
    grid[this.centerOfGrid - 6 * this.cols * this.interval].state = 1;
    grid[this.centerOfGrid - 5 * this.cols * this.interval].state = 1;
    grid[this.centerOfGrid - 5 * this.cols * this.interval - 1].state = 1;
    grid[this.centerOfGrid - 5 * this.cols * this.interval + 1].state = 1;

    // Second group (middle-top section)
    grid[this.centerOfGrid - 2 * this.cols * this.interval - 1].state = 1;
    grid[this.centerOfGrid - 2 * this.cols * this.interval].state = 1;
    grid[this.centerOfGrid - 2 * this.cols * this.interval + 1].state = 1;
    grid[this.centerOfGrid - 1 * this.cols * this.interval].state = 1;
    grid[this.centerOfGrid].state = 1;
    grid[this.centerOfGrid + 1 * this.cols * this.interval].state = 1;
    grid[this.centerOfGrid + 2 * this.cols * this.interval].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval - 1].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval + 1].state = 1;

    // Third group (middle-bottom section)
    grid[this.centerOfGrid + 6 * this.cols * this.interval + 1].state = 1;
    grid[this.centerOfGrid + 6 * this.cols * this.interval - 1].state = 1;
    grid[this.centerOfGrid + 6 * this.cols * this.interval].state = 1;

    // Fourth group (bottom section)
    grid[this.centerOfGrid + 7 * this.cols * this.interval].state = 1;
    grid[this.centerOfGrid + 8 * this.cols * this.interval].state = 1;
  }

  toad(grid) {
    grid[this.centerOfGrid].state = 1;
    grid[this.centerOfGrid + 1].state = 1;
    grid[this.centerOfGrid + 2].state = 1;
    grid[this.centerOfGrid + this.cols * this.interval - 1].state = 1;
    grid[this.centerOfGrid + this.cols * this.interval].state = 1;
    grid[this.centerOfGrid + this.cols * this.interval + 1].state = 1;
  }

  glidergun(grid) {
    // Left block - moved further right (+3)
    grid[this.centerOfGrid - 1 * this.cols * this.interval - 17].state = 1;
    grid[this.centerOfGrid - 1 * this.cols * this.interval - 16].state = 1;
    grid[this.centerOfGrid - 0 * this.cols * this.interval - 17].state = 1;
    grid[this.centerOfGrid - 0 * this.cols * this.interval - 16].state = 1;

    // Left ship/boat formation - moved further right (+3)
    grid[this.centerOfGrid - 3 * this.cols * this.interval - 4].state = 1;
    grid[this.centerOfGrid - 3 * this.cols * this.interval - 5].state = 1;
    grid[this.centerOfGrid - 2 * this.cols * this.interval - 6].state = 1;
    grid[this.centerOfGrid - 1 * this.cols * this.interval - 7].state = 1;
    grid[this.centerOfGrid - 0 * this.cols * this.interval - 7].state = 1;
    grid[this.centerOfGrid + 1 * this.cols * this.interval - 7].state = 1;
    grid[this.centerOfGrid + 2 * this.cols * this.interval - 6].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval - 5].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval - 4].state = 1;

    // Middle complex pattern - moved further right (+3)
    grid[this.centerOfGrid + 0 * this.cols * this.interval - 3].state = 1;
    grid[this.centerOfGrid + 0 * this.cols * this.interval - 1].state = 1;
    grid[this.centerOfGrid + 0 * this.cols * this.interval].state = 1;
    grid[this.centerOfGrid - 1 * this.cols * this.interval - 1].state = 1;
    grid[this.centerOfGrid + 1 * this.cols * this.interval - 1].state = 1;
    grid[this.centerOfGrid - 2 * this.cols * this.interval - 2].state = 1;
    grid[this.centerOfGrid + 2 * this.cols * this.interval - 2].state = 1;

    // Right structure - first vertical line - moved further right (+3)
    grid[this.centerOfGrid - 1 * this.cols * this.interval + 3].state = 1;
    grid[this.centerOfGrid - 2 * this.cols * this.interval + 3].state = 1;
    grid[this.centerOfGrid - 3 * this.cols * this.interval + 3].state = 1;

    // Right structure - second vertical line - moved further right (+3)
    grid[this.centerOfGrid - 1 * this.cols * this.interval + 4].state = 1;
    grid[this.centerOfGrid - 2 * this.cols * this.interval + 4].state = 1;
    grid[this.centerOfGrid - 3 * this.cols * this.interval + 4].state = 1;

    // Right structure - top and bottom points - moved further right (+3)
    grid[this.centerOfGrid - 4 * this.cols * this.interval + 5].state = 1;
    grid[this.centerOfGrid + 0 * this.cols * this.interval + 5].state = 1;

    // Right structure - far right top points - moved further right (+3)
    grid[this.centerOfGrid - 4 * this.cols * this.interval + 7].state = 1;
    grid[this.centerOfGrid - 5 * this.cols * this.interval + 7].state = 1;

    // Right structure - far right bottom points - moved further right (+3)
    grid[this.centerOfGrid + 0 * this.cols * this.interval + 7].state = 1;
    grid[this.centerOfGrid + 1 * this.cols * this.interval + 7].state = 1;

    // Far right block - moved further right (+3)
    grid[this.centerOfGrid - 2 * this.cols * this.interval + 17].state = 1;
    grid[this.centerOfGrid - 2 * this.cols * this.interval + 18].state = 1;
    grid[this.centerOfGrid - 3 * this.cols * this.interval + 17].state = 1;
    grid[this.centerOfGrid - 3 * this.cols * this.interval + 18].state = 1;
  }

  pulsar(grid) {
    // Top-left group

    grid[this.centerOfGrid - 7 * this.cols * this.interval - 3].state = 1;
    grid[this.centerOfGrid - 6 * this.cols * this.interval - 3].state = 1;
    grid[this.centerOfGrid - 5 * this.cols * this.interval - 3].state = 1;
    grid[this.centerOfGrid - 5 * this.cols * this.interval - 2].state = 1;

    // Top-right group
    grid[this.centerOfGrid - 7 * this.cols * this.interval + 3].state = 1;
    grid[this.centerOfGrid - 6 * this.cols * this.interval + 3].state = 1;
    grid[this.centerOfGrid - 5 * this.cols * this.interval + 3].state = 1;
    grid[this.centerOfGrid - 5 * this.cols * this.interval + 2].state = 1;

    // Bottom-left group
    grid[this.centerOfGrid + 5 * this.cols * this.interval - 3].state = 1;
    grid[this.centerOfGrid + 5 * this.cols * this.interval - 2].state = 1;
    grid[this.centerOfGrid + 6 * this.cols * this.interval - 3].state = 1;
    grid[this.centerOfGrid + 7 * this.cols * this.interval - 3].state = 1;

    // Bottom-right group
    grid[this.centerOfGrid + 5 * this.cols * this.interval + 3].state = 1;
    grid[this.centerOfGrid + 5 * this.cols * this.interval + 2].state = 1;
    grid[this.centerOfGrid + 6 * this.cols * this.interval + 3].state = 1;
    grid[this.centerOfGrid + 7 * this.cols * this.interval + 3].state = 1;

    // Left far edge
    grid[this.centerOfGrid - 3 * this.cols * this.interval - 5].state = 1;
    grid[this.centerOfGrid - 3 * this.cols * this.interval - 6].state = 1;
    grid[this.centerOfGrid - 3 * this.cols * this.interval - 7].state = 1;
    grid[this.centerOfGrid - 2 * this.cols * this.interval - 5].state = 1;

    // Left bottom edge
    grid[this.centerOfGrid + 2 * this.cols * this.interval - 5].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval - 5].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval - 6].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval - 7].state = 1;

    // Right far edge
    grid[this.centerOfGrid - 3 * this.cols * this.interval + 7].state = 1;
    grid[this.centerOfGrid - 3 * this.cols * this.interval + 6].state = 1;
    grid[this.centerOfGrid - 3 * this.cols * this.interval + 5].state = 1;
    grid[this.centerOfGrid - 2 * this.cols * this.interval + 5].state = 1;

    // Right bottom edge
    grid[this.centerOfGrid + 2 * this.cols * this.interval + 5].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval + 5].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval + 6].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval + 7].state = 1;

    // Bottom-right inner section
    grid[this.centerOfGrid + 2 * this.cols * this.interval + 3].state = 1;
    grid[this.centerOfGrid + 1 * this.cols * this.interval + 3].state = 1;
    grid[this.centerOfGrid + 1 * this.cols * this.interval + 2].state = 1;
    grid[this.centerOfGrid + 2 * this.cols * this.interval + 1].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval + 1].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval + 2].state = 1;

    // Bottom inner section
    grid[this.centerOfGrid + 2 * this.cols * this.interval - 1].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval - 1].state = 1;
    grid[this.centerOfGrid + 3 * this.cols * this.interval - 2].state = 1;

    // Bottom-left inner section
    grid[this.centerOfGrid + 1 * this.cols * this.interval - 2].state = 1;
    grid[this.centerOfGrid + 1 * this.cols * this.interval - 3].state = 1;
    grid[this.centerOfGrid + 2 * this.cols * this.interval - 3].state = 1;

    // Middle-left inner section
    grid[this.centerOfGrid - 1 * this.cols * this.interval - 2].state = 1;
    grid[this.centerOfGrid - 1 * this.cols * this.interval - 3].state = 1;
    grid[this.centerOfGrid - 2 * this.cols * this.interval - 3].state = 1;

    // Middle-top inner section
    grid[this.centerOfGrid - 3 * this.cols * this.interval - 2].state = 1;
    grid[this.centerOfGrid - 3 * this.cols * this.interval - 1].state = 1;
    grid[this.centerOfGrid - 2 * this.cols * this.interval - 1].state = 1;

    // Middle-right inner section
    grid[this.centerOfGrid - 2 * this.cols * this.interval + 1].state = 1;
    grid[this.centerOfGrid - 3 * this.cols * this.interval + 1].state = 1;
    grid[this.centerOfGrid - 3 * this.cols * this.interval + 2].state = 1;
    grid[this.centerOfGrid - 1 * this.cols * this.interval + 2].state = 1;
    grid[this.centerOfGrid - 1 * this.cols * this.interval + 3].state = 1;
    grid[this.centerOfGrid - 2 * this.cols * this.interval + 3].state = 1;
  }

  heavyweight(grid) {
    // Top row
    grid[this.centerOfGrid - 1 * this.cols * this.interval - 3].state = 1;
    grid[this.centerOfGrid - 1 * this.cols * this.interval - 2].state = 1;
    grid[this.centerOfGrid - 1 * this.cols * this.interval - 1].state = 1;
    grid[this.centerOfGrid - 1 * this.cols * this.interval + 0].state = 1;
    grid[this.centerOfGrid - 1 * this.cols * this.interval + 2].state = 1;
    grid[this.centerOfGrid - 1 * this.cols * this.interval + 3].state = 1;

    // Middle row
    grid[this.centerOfGrid + 0 * this.cols * this.interval - 3].state = 1;
    grid[this.centerOfGrid + 0 * this.cols * this.interval - 2].state = 1;
    grid[this.centerOfGrid + 0 * this.cols * this.interval - 1].state = 1;
    grid[this.centerOfGrid + 0 * this.cols * this.interval + 0].state = 1;
    grid[this.centerOfGrid + 0 * this.cols * this.interval + 1].state = 1;
    grid[this.centerOfGrid + 0 * this.cols * this.interval + 2].state = 1;

    // Bottom row
    grid[this.centerOfGrid + 1 * this.cols * this.interval - 2].state = 1;
    grid[this.centerOfGrid + 1 * this.cols * this.interval - 1].state = 1;
    grid[this.centerOfGrid + 1 * this.cols * this.interval + 0].state = 1;
    grid[this.centerOfGrid + 1 * this.cols * this.interval + 1].state = 1;

    // Top extra cells
    grid[this.centerOfGrid - 2 * this.cols * this.interval + 2].state = 1;
    grid[this.centerOfGrid - 2 * this.cols * this.interval + 1].state = 1;
  }
}

export { Canvas };
