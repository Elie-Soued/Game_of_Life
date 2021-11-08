import {
  toggleCell,
  stop,
  reload,
  zoomIn,
  zoomOut,
  increaseCanvas,
  decreaseCanvas,
  colorPickerBackground,
  colorPickerSquare,
  colorPickerGrid,
  fillRandomSquaresButton,
  runGameofLifeButton,
  centralPicture,
  nextPicture,
  imagesArray,
  renderRandomSquares,
  runGameofLife,
  grid 
} from "./constants.js";


import { canvas, canvasHTML } from "./canvasClass.js";

//Images at the button of the page

//Variables
//----------

let zoomInAction;
let zoomOutAction;
let increaseCanvasAction;
let decreaseCanvasAction;

//Event Listeners
//----------------

fillRandomSquaresButton.addEventListener("click", renderRandomSquares);

runGameofLifeButton.addEventListener("click", () => {
  canvas.restartGameofLife();
  runGameofLife();
});

//Stop Game of life
stop.addEventListener("click", () => {
  canvas.stopGameofLife();
});

reload.addEventListener("click", () => {
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

//---------------------------------------------------

//Change the icon under the canvas
let index = 0;
nextPicture.addEventListener("click", () => {
  if (index < imagesArray.length - 1) {
    index = index + 1;
  } else {
    index = 0;
  }
  centralPicture.src = imagesArray[index];
});

previousPicture.addEventListener("click", () => {
  if (index === 0) {
    index = imagesArray.length - 1;
  } else {
    index = index - 1;
  }
  centralPicture.src = imagesArray[index];
});



//--------------------------------------------

canvasHTML.addEventListener("click", (e) => {
  const rect = e.target.getBoundingClientRect();
  const x =Math.floor((e.clientX - rect.left) / canvas.interval) * canvas.interval;
  const y =Math.floor((e.clientY - rect.top) / canvas.interval) * canvas.interval;
  toggleCell(x, y, grid);
});