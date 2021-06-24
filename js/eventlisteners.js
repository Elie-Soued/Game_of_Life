import {
  run,
  stop,
  zoomIn,
  zoomOut,
  increaseCanvas,
  decreaseCanvas,
  colorPickerBackground,
  colorPickerSquare,
  colorPickerGrid,
} from "./constants.js";

let zoomInAction;
let zoomOutAction;
let increaseCanvasAction;
let decreaseCanvasAction;

//Event Listeners
//----------------

//Start Game of life
run.addEventListener("click", drawgrid);

//Stop Game of life
stop.addEventListener("click", () => {
  location.reload();
});

//--------------------------------------------------------------------

//Zoom in
//********/
zoomIn.addEventListener("mousedown", () => {
  zoomInAction = setInterval(() => {
    interval = interval + 1;
    console.log(interval);
  }, 100);
});

zoomIn.addEventListener("click", () => {
  interval = interval + 1;
  console.log(interval);
});

zoomIn.addEventListener("mouseup", () => {
  clearInterval(zoomInAction);
});

//----------------------------------------------------------------------

//Zoom out
//********/
zoomOut.addEventListener("mousedown", () => {
  zoomOutAction = setInterval(() => {
    interval = interval - 1;
  }, 100);
});

zoomOut.addEventListener("click", () => {
  interval = interval - 1;
  console.log(interval);
});

zoomOut.addEventListener("mouseup", () => {
  clearInterval(zoomOutAction);
});

//----------------------------------------------------------------------

//Increase Canvas Size
//*********************/
increaseCanvas.addEventListener("mousedown", () => {
  increaseCanvasAction = setInterval(() => {
    canvas.width = canvas.width + 10;
    canvas.height = canvas.height + 10;
  }, 100);
});

increaseCanvas.addEventListener("click", () => {
  canvas.width = canvas.width + 10;
  canvas.height = canvas.height + 10;
});

increaseCanvas.addEventListener("mouseup", () => {
  clearInterval(increaseCanvasAction);
});

//----------------------------------------------------------------------

//Decrease Canvas Size
//********************/
decreaseCanvas.addEventListener("mousedown", () => {
  decreaseCanvasAction = setInterval(() => {
    canvas.width = canvas.width - 10;
    canvas.height = canvas.height - 10;
  }, 100);
});

decreaseCanvas.addEventListener("click", () => {
  canvas.width = canvas.width - 10;
  canvas.height = canvas.height - 10;
});

decreaseCanvas.addEventListener("mouseup", () => {
  clearInterval(decreaseCanvasAction);
});
//----------------------------------------------------------------------

//Change background

colorPickerBackground.addEventListener("input", () => {
  canvas.style.backgroundColor = colorPickerBackground.value;
});

//Change grid

colorPickerGrid.addEventListener("input", () => {
  gridColor = colorPickerGrid.value;
});

//Change square

colorPickerSquare.addEventListener("input", () => {
  squareColor = colorPickerSquare.value;
});
