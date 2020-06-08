var canvas = document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


var c = canvas.getContext ('2d');
c.strokeStyle='black';
c.lineWidth=2;
;

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


  // This is a nested for loop that draw square on all i and all j



/*

  for (i=50; i<=350; i=i+100){
    for(j=0; j<=350; j=j+100){
      c.beginPath();
      c.fillRect(i,j,50,50)
      c.stroke();
      console.log(canvas);
    }

      }

*/



      // This is the grid



      for (i=50; i<=450; i=i+50){
        c.beginPath();
        c.moveTo(i,0);
        c.lineTo(i,400);
        c.stroke();
        console.log(canvas);
        }

        for (j=0; j<=400; j=j+50){
          c.beginPath();
          c.moveTo(50,j);
          c.lineTo(450,j);
          c.stroke();
          console.log(canvas);
          }


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


// Chess Board



          for(i=100; i<=400; i=i+100){
            for(j=0 ;j<=350; j=j+100){

              c.beginPath();
              c.fillRect(i,j,50,50)
              c.stroke();
            }
          }


          for(i=50; i<=400; i=i+100){
            for(j=50 ;j<=400; j=j+100){

              c.beginPath();
              c.fillRect(i,j,50,50)
              c.stroke();
            }
          }



/*


        function draw() {

            x = something_x();
            y = something_y();
            c.fillRect(x,y,50,50);
            c.beginPath();
            c.stroke();
        }

        draw();


        function something_x() {
          return 150;

        }

        function something_y() {
             return 150;
        }



*/




































// Message to Joe
//In the function something_x(h8), I am returning a value of 400 and for the function something_y(h8) I am returning
//a value of 350.
// When I call the draw function and give it the argument h8, the two values (400,350) are read and the square
//is drawn in this specific location.
// I wanted to do the same to all the squares (write their something function to have all the square´s x and y defined)
//but realized that it would not work.
// If I want to activate a cell I need to create its something function ( = defining its location) than call it
// in the draw function.











          // moving square animation


// What do we need:

// to move the square we need to give the order of printing a square with specific x,y,w and H.
// for every loop we need to add w to // X
// we need to erase



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

                moving_square();

                // This has to be done on every iteration
                //I need to draw a square at a specific x+w,y,w,h
                // I need to erase the square on at x-w,y ,w,h
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







/*


          // This is the ball animation bouncing on the border

          var x =Math.random()* innerWidth;
          var y=Math.random()* innerHeight;
          var dx= (Math.random()-0.5)*8;
          var dy=(Math.random()-0.5)*8;
          var radius=30;

          function animate(){
            requestAnimationFrame(animate);
            c.clearRect(0,0,innerWidth,innerHeight);
            c.beginPath();
            c.arc(x,y,radius,0,Math.PI*2,false);
            c.strokeStyle='blue';
            c.stroke();

            if(x+radius>innerWidth||x-radius<0){
              dx= -dx;
            }
            if(y+radius>innerHeight || y-radius<0){

              dy=-dy;
            }
            x +=dx;
            y+=dy;
            }

            animate();
*/
            //******************************************



            /*


          for (i=0;i<200;i++){
            var x = Math.random() * window.innerWidth;
            var y= Math.random() * window.innerHeight;
            c.beginPath();
            c.arc(x,y,30,0,Math.PI*2,false);
            c.fill();
          }

*/
