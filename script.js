var canvas = document.querySelector('canvas');
canvas.width=400;
canvas.height=400;


var c = canvas.getContext ('2d');
c.strokeStyle='black';
c.lineWidth=2;
;


/*
          c.beginPath();
          c.font= "20px Calibri";
          c.fillText("1", 20, 30);
          c.fillText("2", 20, 80);
          c.fillText("3", 20, 130);
          c.fillText("4", 20, 180);
          c.fillText("5", 20, 230);
          c.fillText("6", 20, 280);
          c.fillText("7", 20, 330);
          c.fillText("8", 20, 380);

          c.fillText("a", 70, 420);
          c.fillText("b", 120, 420);
          c.fillText("c", 170, 420);
          c.fillText("d", 220, 420);
          c.fillText("e", 270, 420);
          c.fillText("f", 320, 420);
          c.fillText("g", 370, 420);
          c.fillText("h", 420, 420);

*/
          // Chess Board

/*

          for(i=50; i<=400; i=i+100){
            for(j=0 ;j<=350; j=j+100){


              c.beginPath();
             c.fillRect(i,j,50,50)
              c.fillRect(i-50,j-50,50,50)
              c.fillRect(i-50,350,50,50)
              c.stroke();


            }
          }


*/



// Grid using objects (Not elegantly :) )



class Cell{

  constructor(x,y){
  this.x=x;
  this.y=y;
  this.i=50;
  this.j=50;
  }

  show(){
    c.beginPath();
    c.fillRect(this.x*this.i,this.y*this.j,50,50)
    c.stroke();

  }
  }


let cellA1;
let cellA3;
let cellA5;
let cellA7;
let cellB2;
let cellB4;
let cellB6;
let cellB8;
let cellC1;
let cellC3;
let cellC5;
let cellC7;
let cellD2;
let cellD4;
let cellD6;
let cellD8;
let cellE1;
let cellE3;
let cellE5;
let cellE7;
let cellF2;
let cellF4;
let cellF6;
let cellF8;
let cellG1;
let cellG3;
let cellG5;
let cellG7;
let cellH2;
let cellH4;
let cellH6;
let cellH8;



cellA1=new Cell(0,0);
cellA3=new Cell(2,0);
cellA5=new Cell(4,0);
cellA7=new Cell(6,0);
cellB2=new Cell(1,1);
cellB4=new Cell(3,1);
cellB6=new Cell(5,1);
cellB8=new Cell(7,1);
cellC1=new Cell(0,2);
cellC3=new Cell(2,2);
cellC5=new Cell(4,2);
cellC7=new Cell(6,2);
cellD2=new Cell(1,3);
cellD4=new Cell(3,3);
cellD6=new Cell(5,3);
cellD8=new Cell(7,3);
cellE1=new Cell(0,4);
cellE3=new Cell(2,4);
cellE5=new Cell(4,4);
cellE7=new Cell(6,4);
cellF2=new Cell(1,5);
cellF4=new Cell(3,5);
cellF6=new Cell(5,5);
cellF8=new Cell(7,5);
cellG1=new Cell(0,6);
cellG3=new Cell(2,6);
cellG5=new Cell(4,6);
cellG7=new Cell(6,6);
cellH2=new Cell(1,7);
cellH4=new Cell(3,7);
cellH6=new Cell(5,7);
cellH8=new Cell(7,7);


cellA1.show();
cellA3.show();
cellA5.show();
cellA7.show();
cellB2.show();
cellB4.show();
cellB6.show();
cellB8.show();
cellC1.show();
cellC3.show();
cellC5.show();
cellC7.show();
cellD2.show();
cellD4.show();
cellD6.show();
cellD8.show();
cellE1.show();
cellE3.show();
cellE5.show();
cellE7.show();
cellF2.show();
cellF4.show();
cellF6.show();
cellF8.show();
cellG1.show();
cellG3.show();
cellG5.show();
cellG7.show();
cellH2.show();
cellH4.show();
cellH6.show();
cellH8.show();






// Calling individual cell with using a string as an argument

/*
function draw_this_square(pilou){

  var i = 50;
  var j = 50;

  x = pilou[0];
  y=parseInt(pilou[1]);

  var the_x_columns =['a','b','c','d','e','f','g','h'];
  x = the_x_columns.indexOf(x);
  c.beginPath();
  c.fillRect(x*i,y*j,50,50)
  c.stroke();

}

draw_this_square('a0');


*/





    // Blinking square

    /*

    function addsquare(){
    c.fillRect(100,0,50,50);
          }
    setInterval("addsquare()",500)

    function removesquare(){
    c.clearRect(101,1,48,48);
          }
    setInterval("removesquare()",1000)

    */



  // moving square animation

    /*

      var x = 0;

    function moving_square(){
    requestAnimationFrame(moving_square);
    if(x<350){

    c.clearRect(x-1,51,49,48)
    c.beginPath();
    c.fillRect(x,50,50,50);
    c.stroke();

    x= x+1;

      }

      }


      */




/*
    var w = 50;
    var x = 0;

    for(x=0;x<400; x = x+w){

    function addsquare(){
    c.fillRect(x+w,300,w,50);
          }
    setInterval("addsquare()",1000)

  function removesquare(){
  c.clearRect(x-w,301,48,48);
          }
  setInterval("removesquare()",1500)
                }
*/

    // This is the ball animation bouncing on the border
/*


          var x =Math.random()* 400;
          var y=Math.random()* 400;
          var dx= (Math.random()-0.5)*8;
          var dy=(Math.random()-0.5)*8;
          var radius=30;

          function animate(){
            requestAnimationFrame(animate);
            c.clearRect(0,0,400,400);
            c.beginPath();
            c.arc(x,y,radius,0,Math.PI*2,false);
            c.strokeStyle='blue';
            c.stroke();

            if(x+radius>400||x-radius<0){
              dx= -dx;
            }
            if(y+radius>400 || y-radius<0){

              dy=-dy;
            }
            x +=dx;
            y+=dy;
            }

            animate();

*/


/*


          for (i=0;i<200;i++){
            var x = Math.random() * window.innerWidth;
            var y= Math.random() * window.innerHeight;
            c.beginPath();
            c.arc(x,y,30,0,Math.PI*2,false);
            c.fill();
          }
*/
