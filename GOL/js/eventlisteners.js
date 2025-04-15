import {
  toggleCell,
  pause,
  reload,
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
  grid,
  canvasHTML,
  canvas,
} from "./constants.js";

// import { canvas, canvasHTML } from "./Canvas.js";

//Local Variables
//***************/
let zoomInAction;
let zoomOutAction;
let increaseCanvasAction;
let decreaseCanvasAction;

//Event Listeners
//************************************************************************************/

//Fill the grid ramdomly
//*********************/
fillRandomSquaresButton.addEventListener("click", renderRandomSquares);

//Start Game of life
//*****************/
runGameofLifeButton.addEventListener("click", () => {
  canvas.restartGameofLife();
  runGameofLife();
});

//Pause Game of life
//*****************/
pause.addEventListener("click", () => {
  canvas.pauseGameofLife();
});

//Reload the page
//***************/
reload.addEventListener("click", () => {
  location.reload();
});
//************************************************************************************/

//Zoom in
//********/

const zoomInButtons = document.querySelectorAll(".ZoomIn");
zoomInButtons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    zoomInAction = setInterval(() => {
      canvas.increaseInterval();
    }, 100);
  });

  button.addEventListener("click", () => {
    canvas.increaseInterval();
  });

  button.addEventListener("mouseup", () => {
    clearInterval(zoomInAction);
  });
});

//************************************************************************************/

//Zoom out
//********/

const zoomOutButtons = document.querySelectorAll(".ZoomOut");
zoomOutButtons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    zoomOutAction = setInterval(() => {
      canvas.decreaseInterval();
    }, 100);
  });

  button.addEventListener("click", () => {
    canvas.decreaseInterval();
  });

  button.addEventListener("mouseup", () => {
    clearInterval(zoomOutAction);
  });
});

//************************************************************************************/

//Increase Canvas Size
//********************/
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

//************************************************************************************/

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

//************************************************************************************/
//Change background color
//********************/

colorPickerBackground.addEventListener("input", () => {
  canvas.setBackgroundColor(colorPickerBackground.value);
});

//Change grid color
//*******************/
colorPickerGrid.addEventListener("input", () => {
  canvas.setGridColor(colorPickerGrid.value);
});

//Change square color
//******************/
colorPickerSquare.addEventListener("input", () => {
  canvas.setSquareColor(colorPickerSquare.value);
});

//************************************************************************************/

//Change the icon under the canvas
//********************************/
let index = 0;
// nextPicture.addEventListener("click", () => {
//   if (index < imagesArray.length - 1) {
//     index = index + 1;
//   } else {
//     index = 0;
//   }
//   centralPicture.src = imagesArray[index];
// });

// previousPicture.addEventListener("click", () => {
//   if (index === 0) {
//     index = imagesArray.length - 1;
//   } else {
//     index = index - 1;
//   }
//   centralPicture.src = imagesArray[index];
// });

//************************************************************************************/

//Toggle cell´s state onclick
//********************************/
canvasHTML.addEventListener("click", (e) => {
  const rect = e.target.getBoundingClientRect();
  const x =
    Math.floor((e.clientX - rect.left) / canvas.interval) * canvas.interval;
  const y =
    Math.floor((e.clientY - rect.top) / canvas.interval) * canvas.interval;
  toggleCell(x, y, grid);
});
