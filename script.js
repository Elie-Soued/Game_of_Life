var canvas = document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


var c = canvas.getContext ('2d');
c.strokeStyle='black';
c.lineWidth=2;
;


/*
  for (i=0; i<=innerWidth; i=i+100){
    for(j=0; j<=innerHeight; j=j+100){
      c.beginPath();
      c.fillRect(i,j,50,50)
      c.stroke();
      console.log(canvas);
    }
      c.beginPath();
      c.fillRect(i,300,50,50)
      c.stroke();
      console.log(canvas);
      }
*/

/*

      for (i=0; i<=innerWidth; i=i+50){
        c.beginPath();
        c.moveTo(i,0);
        c.lineTo(i,innerHeight);
        c.stroke();
        console.log(canvas);
        }

        for (j=0; j<=innerHeight; j=j+50){
          c.beginPath();
          c.moveTo(0,j);
          c.lineTo(innerWidth,j);
          c.stroke();
          console.log(canvas);
          }

          */






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

/*

          for (i=0;i<200;i++){
            var x = Math.random() * window.innerWidth;
            var y= Math.random() * window.innerHeight;
            c.beginPath();
            c.arc(x,y,30,0,Math.PI*2,false);
            c.fill();
          }
*/
