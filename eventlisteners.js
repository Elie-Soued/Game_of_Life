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
document.getElementById("background").addEventListener("click", () => {
  canvas.style.backgroundColor = randomColors();
});

//Change grid
document.getElementById("grid").addEventListener("click", () => {
  gridColor = randomColors();
});

//Change square
document.getElementById("square").addEventListener("click", () => {
  squareColor = randomColors();
});

const randomColors = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
