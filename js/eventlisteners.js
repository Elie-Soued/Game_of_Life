//imports

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

import { renderSquares } from "./script.js";

import { canvas } from "./canvasClass.js";

//Variables
//----------

let zoomInAction;
let zoomOutAction;
let increaseCanvasAction;
let decreaseCanvasAction;

//Event Listeners
//----------------

//Start Game of life
run.addEventListener("click", renderSquares);

//Stop Game of life
stop.addEventListener("click", () => {
  location.reload();
});

//--------------------------------------------------------------------

//Zoom in
//********/
zoomIn.addEventListener("mousedown", () => {
  zoomInAction = setInterval(() => {
    canvas.increaseInterval();
  }, 100);
});

zoomIn.addEventListener("click", () => {
  canvas.increaseInterval();
});

zoomIn.addEventListener("mouseup", () => {
  clearInterval(zoomInAction);
});

//----------------------------------------------------------------------

//Zoom out
//********/
zoomOut.addEventListener("mousedown", () => {
  zoomOutAction = setInterval(() => {
    canvas.decreaseInterval();
  }, 100);
});

zoomOut.addEventListener("click", () => {
  canvas.decreaseInterval();
});

zoomOut.addEventListener("mouseup", () => {
  clearInterval(zoomOutAction);
});

//----------------------------------------------------------------------

//Increase Canvas Size
//*********************/
increaseCanvas.addEventListener("mousedown", () => {
  increaseCanvasAction = setInterval(() => {
    canvas.increaseWidth();
    canvas.increaseHeight();
  }, 100);
});

increaseCanvas.addEventListener("click", () => {
  canvas.increaseWidth();
  canvas.increaseHeight();
});

increaseCanvas.addEventListener("mouseup", () => {
  clearInterval(increaseCanvasAction);
});

//----------------------------------------------------------------------

//Decrease Canvas Size
//********************/
decreaseCanvas.addEventListener("mousedown", () => {
  decreaseCanvasAction = setInterval(() => {
    canvas.decreaseWidth();
    canvas.decreaseHeight();
  }, 100);
});

decreaseCanvas.addEventListener("click", () => {
  canvas.decreaseWidth();
  canvas.decreaseHeight();
});

decreaseCanvas.addEventListener("mouseup", () => {
  clearInterval(decreaseCanvasAction);
});
//----------------------------------------------------------------------

//Change background color
colorPickerBackground.addEventListener("input", () => {
  canvas.setBackgroundColor(colorPickerBackground.value);
});

//Change grid color
colorPickerGrid.addEventListener("input", () => {
  canvas.setGridColor(colorPickerGrid.value);
});

//Change square color
colorPickerSquare.addEventListener("input", () => {
  canvas.setSquareColor(colorPickerSquare.value);
});
