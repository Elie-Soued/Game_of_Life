//imports

import {
  stop,
  zoomIn,
  zoomOut,
  increaseCanvas,
  decreaseCanvas,
  colorPickerBackground,
  colorPickerSquare,
  colorPickerGrid,
  fillRandomSquaresButton,
  runRandomSquaresButton,
  runDrawnSquaresButton,
  stopDrawing,
} from "./constants.js";

import { renderDrawnSquares } from "./clickAndFill.js";
import { canvas } from "./canvasClass.js";
import { renderRandomSquares, runRandomSquares } from "./GOLrandom.js";

//Variables
//----------

let zoomInAction;
let zoomOutAction;
let increaseCanvasAction;
let decreaseCanvasAction;

//Event Listeners
//----------------

fillRandomSquaresButton.addEventListener("click", renderRandomSquares);

runRandomSquaresButton.addEventListener("click", runRandomSquares);

runDrawnSquaresButton.addEventListener("click", renderDrawnSquares);

//Stop Game of life
stop.addEventListener("click", () => {
  location.reload();
});

stopDrawing.addEventListener("click", () => {
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
  console.log(canvas.interval);
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
