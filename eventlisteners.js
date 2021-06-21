//Event Listeners
//----------------

//Start Game of life
document.getElementById("run").addEventListener("click", drawgrid);

//Stop Game of life
document.getElementById("stop").addEventListener("click", () => {
  location.reload();
});

//Zoom in
document.getElementById("ZoomIn").addEventListener("click", () => {
  interval = interval + 1;
});

//Zoom out
document.getElementById("ZoomOut").addEventListener("click", () => {
  if (interval > 10) {
    interval = interval - 1;
  }
});

//Increase Canvas Size
document.getElementById("IncreaseCanvas").addEventListener("click", () => {
  canvas.width = canvas.width + 10;
  canvas.height = canvas.height + 10;
});

//Decrease Canvas Size
document.getElementById("DecreaseCanvas").addEventListener("click", () => {
  canvas.width = canvas.width - 10;
  canvas.height = canvas.height - 10;
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
