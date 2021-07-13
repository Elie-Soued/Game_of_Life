import { Circle } from "./circleClass.js";

//Variables
let maxRadius = 40;
let colorArray = ["#2b2d42", "#8d99ae", "#edf2f4", "#ef233c"];
let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
let circleArray = [];

//Functions
const init = () => {
  circleArray = [];
  for (let i = 0; i < 900; i++) {
    circleArray.push(new Circle());
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
};

export { maxRadius, colorArray, canvas, c, init, animate };
