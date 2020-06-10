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



          for(i=Math.random()* 400; i<=400; i=i+100){
            for(j=Math.random()* 400 ;j<=350; j=j+100){

              c.beginPath();
              c.fillRect(i,j,50,50)
              c.fillRect(i-50,j-50,50,50)
              c.fillRect(i-50,350,50,50)
              c.stroke();


            }
          }



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



        /*


          for (i=0;i<200;i++){
            var x = Math.random() * window.innerWidth;
            var y= Math.random() * window.innerHeight;
            c.beginPath();
            c.arc(x,y,30,0,Math.PI*2,false);
            c.fill();
          }

          */
