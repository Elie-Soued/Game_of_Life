                                                          // Elie Soued//
                                                          // July 2020//


                // Game of Life//


//I-Introduction
// The Game of Life, also known simply as Life, is a cellular automaton created by the
// British mathematician John Horton Conway in 1970.[1] It is a zero-player game, meaning that its evolution is determined by its initial state,
// requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.
// In the grid, a cell can have 2 states : Dead or alive, black or white, 0 or 1.

//II-What are The Rules?
//  a dead cell can come to life if it has 3 live neighbors.
//  a living cell dies if it has less than 2 living neighbors (underpopulation).
//  a living cell dies if it has more than 3 living neighbors (overpopulation).


//III-Action plan

// a-Part 1
//1- Create a Canvas
//2- Create a Grid inside
//3- Create a 2D Array and call it Grid
//4- For every element of this array, randomly assign either the value 1 or  0.
//5- If the value of the element is 1, draw a black square.

// b-Part 2
// 1-I need to evaluate the state of every cell before applying the GOL rules.
// therefore I need to create a Second 2D Array where the GOL rules will play out.
// 2-Evaluate the state of every cell1
// 3- Count the living neighbors of 1every cell
// 4- Have the GOL rules play out


// Let´s go!

// Part 1

//Setting up the canvas
var canvas=document.querySelector('canvas');
canvas.width=400;
canvas.height=400;
var c=canvas.getContext('2d');
c.strokeStyle='black';
c.lineWidth=2;
;
// Declaring global variables
let interval=20;
let grid;
let cols=interval;
let rows=interval;
//The Grid
for (i=0; i<=innerWidth; i=i+interval){
  for (j=0; j<=innerWidth; j=j+interval){
        c.beginPath();
        c.moveTo(0,j);
        c.lineTo(innerWidth,j);
        c.stroke();
  }
        c.beginPath();
        c.moveTo(i,0);
        c.lineTo(i,innerWidth);
        c.stroke();
}

//Creating an empty 2D Array called grid
function make2DArray(cols,rows){
  let arr=new Array(cols);
    for (let i=0; i<arr.length; i++) {
      arr[i]=new Array(rows);
    }
    return arr;
}
grid = make2DArray(cols,rows);
// Randomly filling Grid with 0s and 1s
for (let i =0; i<cols; i++){
    for (let j =0; j<rows; j++){
          grid[i][j] = Math.floor(Math.random() * Math.floor(2));
    }
}
// Turning 1s into black squares

function gameoflife(){
  function loopit(gameoflife){
    for (let i= 0; i<cols; i++){
        for (let j= 0; j<rows; j++){
              let x= i*interval;
              let y= j*interval;
                if (grid[i][j]==1){
                    c.beginPath();
                    c.fillRect(x,y,interval-1,interval-1);
                    c.stroke();
                }
         }
     }
    }
    grid=next;
  }


//Part 2

// Creating the new 2D array and replacing grid[i][j] by state
let next = make2DArray(cols,rows);
for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
          let state= grid[i][j];
// Counting the neighbors of a cell grid [i][j]
            function countNeighbors(grid,x,y){
              let sum =0;
              for(let i=-1; i<2; i++){
                for(let j=-1; j<2;j++){
                  let col = (x+i)%cols;
                  let row = (y+j)%rows;
                  sum+=grid[col][row];
                }
              }
                sum= sum-grid[x][y];
                return sum;
            }

    }
}

  //Populate next using the rules of game of life
    let neighbors = countNeighbors(grid,i,j);
      if(state == 0 && neighbors ==3){
          next[i][j]= 1;
      }else if(state == 1 && (neighbors<2 ||neighbors>3)){
          next[i][j]=0;
            }else{
            next[i][j]=state;
            }
