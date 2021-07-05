import { Circle } from "./circleClass.js";
import { c } from "./constant.js";
const circleArray = [];

for (let i = 0; i < 500; i++) {
  circleArray.push(new Circle());
}

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
};

animate();
