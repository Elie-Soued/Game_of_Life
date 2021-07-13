import { canvasHTML } from "./constants";

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
    if (this.element.width < window.innerWidth) {
      return (this.element.width = this.element.width + 10);
    }
  }

  increaseHeight() {
    if (this.element.height < window.innerHeight) {
      return (this.element.height = this.element.height + 10);
    }
  }

  decreaseWidth() {
    if (this.element.width > this.interval) {
      return (this.element.width = this.element.width - 10);
    }
  }

  decreaseHeight() {
    if (this.element.height > this.interval) {
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

  stopGameofLife() {
    this.isRunning = false;
  }

  restartGameofLife() {
    this.isRunning = true;
  }
}

const canvas = new Canvas(canvasHTML, "black", "white", "black", 20, 40, 20);

export { canvas, Canvas };
