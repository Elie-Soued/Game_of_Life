class Canvas {
  constructor(config) {
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
}

export { Canvas };
