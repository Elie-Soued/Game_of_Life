var canvas = document.querySelector('canvas');
canvas.width=480;
canvas.height=480;
console.log(canvas);

var c = canvas.getContext('2d');
c.strokeStyle='black';
c.lineWidth=1;








for (i=0; i<=innerWidth; i=i+60){
c.beginPath();
c.moveTo(i,0);
c.lineTo(i,innerWidth);
c.stroke();
console.log(canvas);

}

for (j=0; j<=innerWidth; j=j+60){
c.beginPath();
c.moveTo(0,j);
c.lineTo(innerWidth,j);
c.stroke();
console.log(canvas);

}



function blink(){
c.fillRect(240,300,0,0);
  setTimeout("appear()",500);
}



function appear(){
  c.fillRect(240,300,60,60);
  setTimeout("blink()",500);
}














/*
function blink()
{
  document.getElementById("logo").style.opacity= 0;
  setTimeout("appear()",500);
}

console.log(blink);


function appear(){
  document.getElementById("logo").style.opacity= 100;
  setTimeout("blink()",500);

}
console.log(appear);
*/
