let zoomIn;
let zoomOut;
let increaseCanvas;
let decreaseCanvas;

//Event Listeners
//----------------

//Start Game of life
document.getElementById("run").addEventListener("click", drawgrid);

//Stop Game of life
document.getElementById("stop").addEventListener("click", () => {
  location.reload();
});

//Zoom in
document.getElementById("ZoomIn").addEventListener("mousedown", () => {
  zoomIn = setInterval(() => {
    interval = interval + 1;
    console.log(interval);
  }, 100);
});

document.getElementById("ZoomIn").addEventListener("mouseup", () => {
  if (zoomIn) {
    clearInterval(zoomIn);
  }
});

//Zoom out
document.getElementById("ZoomOut").addEventListener("mousedown", () => {
  zoomOut = setInterval(() => {
    interval = interval - 1;
    console.log(interval);
  }, 100);
});

document.getElementById("ZoomOut").addEventListener("mouseup", () => {
  if (zoomOut) {
    clearInterval(zoomOut);
  }
});

//Increase Canvas Size
document.getElementById("IncreaseCanvas").addEventListener("mousedown", () => {
  increaseCanvas = setInterval(() => {
    canvas.width = canvas.width + 10;
    canvas.height = canvas.height + 10;
  }, 100);
});

document.getElementById("IncreaseCanvas").addEventListener("mouseup", () => {
  if (increaseCanvas) {
    clearInterval(increaseCanvas);
  }
});

//Decrease Canvas Size
document.getElementById("DecreaseCanvas").addEventListener("mousedown", () => {
  decreaseCanvas = setInterval(() => {
    canvas.width = canvas.width - 10;
    canvas.height = canvas.height - 10;
  }, 100);
});

document.getElementById("DecreaseCanvas").addEventListener("mouseup", () => {
  if (decreaseCanvas) {
    clearInterval(decreaseCanvas);
  }
});

//Change background
let colorPickerBackground = document.getElementById("colorPickerBackground");
colorPickerBackground.addEventListener("input", () => {
  canvas.style.backgroundColor = colorPickerBackground.value;
});

//Change grid
let colorPickerGrid = document.getElementById("colorPickerGrid");
colorPickerGrid.addEventListener("input", () => {
  gridColor = colorPickerGrid.value;
});

//Change square
let colorPickerSquare = document.getElementById("colorPickerSquare");
colorPickerSquare.addEventListener("input", () => {
  squareColor = colorPickerSquare.value;
});
