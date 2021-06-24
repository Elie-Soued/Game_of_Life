let canvasHTML = document.querySelector("canvas");

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
    this.element = element;
    this.element.backgroundColor = backgroundColor;
    this.squareColor = squareColor;
    this.gridColor = gridColor;
    this.interval = interval;
    this.width = this.interval * width;
    this.height = this.interval * height;
    this.cols = this.width;
    this.rows = this.height;
  }

  increaseInterval() {
    return (this.interval = this.interval + 1);
  }

  decreaseInterval() {
    return (this.interval = this.interval - 1);
  }

  increaseWidth() {
    return (this.width = this.width + 10);
  }

  increaseHeight() {
    return (this.height = this.height + 10);
  }

  decreaseWidth() {
    return (this.width = this.width - 10);
  }

  decreaseHeight() {
    return (this.height = this.height - 10);
  }

  setSquareColor(squareColor) {
    this.squareColor = squareColor;
  }

  setGridColor(gridColor) {
    this.gridColor = gridColor;
  }

  setBackgroundColor(backgroundColor) {
    this.element.backgroundColor = backgroundColor;
  }
}

const canvas = new Canvas(canvasHTML, "white", "black", "black", 10, 100, 40);

export { canvas };
