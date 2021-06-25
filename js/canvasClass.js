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
    this.squareColor = squareColor;
    this.gridColor = gridColor;
    this.interval = interval;
    this.element = element;
    this.element.style.backgroundColor = backgroundColor;
    this.element.width = width * this.interval;
    this.element.height = height * this.interval;
    this.cols = this.element.width;
    this.rows = this.element.height;
  }

  increaseInterval() {
    return (this.interval = this.interval + 1);
  }

  decreaseInterval() {
    return (this.interval = this.interval - 1);
  }

  increaseWidth() {
    return (this.element.width = this.element.width + 10);
  }

  increaseHeight() {
    return (this.element.height = this.element.height + 10);
  }

  decreaseWidth() {
    return (this.element.width = this.element.width - 10);
  }

  decreaseHeight() {
    return (this.element.height = this.element.height - 10);
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
}

const canvas = new Canvas(canvasHTML, "white", "black", "black", 10, 100, 40);

export { canvas };
