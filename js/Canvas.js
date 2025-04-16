class Canvas {
  constructor(
    element,
    backgroundColor,
    squareColor,
    gridColor,
    interval,
    width,
    height
  ) {
    this.c = element.getContext("2d");
    this.squareColor = squareColor;
    this.gridColor = gridColor;
    this.interval = interval;
    this.element = element;
    this.element.style.backgroundColor = backgroundColor;
    this.element.width = width * this.interval;
    this.element.height = height * this.interval;
    this.cols = this.element.width;
    this.rows = this.element.height;
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
    if (this.element.width < 1130) {
      return (this.element.width = this.element.width + 10);
    }
  }

  increaseHeight() {
    if (this.element.height < 720) {
      return (this.element.height = this.element.height + 10);
    }
  }

  decreaseWidth() {
    if (this.element.width > 800) {
      return (this.element.width = this.element.width - 10);
    }
  }

  decreaseHeight() {
    if (this.element.height > 400) {
      return (this.element.height = this.element.height - 10);
    }
  }

  setSquareColor(squareColor) {
    this.squareColor = squareColor;
  }

  setGridColor(gridColor) {
    this.gridColor = gridColor;
  }

  setBackgroundColor(backgroundColor) {
    this.element.style.backgroundColor = backgroundColor;
  }

  pauseGameofLife() {
    this.isRunning = false;
  }

  restartGameofLife() {
    this.isRunning = true;
  }
}

export { Canvas };
