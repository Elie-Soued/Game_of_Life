#### Conway´s Game of Life


checkout the below wikipedia page :https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

##### Introduction
The Game of Life, also known as Conway's Game of Life or simply Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.  
It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.  
One interacts with the Game of Life by creating an initial configuration and observing how it evolves.  
It is Turing complete and can simulate a universal constructor or any other Turing machine.



##### Rules of the Game
Imagine a grid with a number of cells.
Each cell had a state, which could be dead or alive, Black or white, 1 or 0. 
In a grid a cell has 8 neighbors.
If a living cell has 2 or 3 living neighbors, it lives on to the next generation.  
If a living cell has less than 2 living neighbors, it dies of underpopulation.  
If a living cell has more than 3 living neigbors, it dies of overpopulation.  
If a dead cell has exactly 3 living neigbors, it comes back to life.  



##### Explore
To truly appreciate the power and beauty of Conway’s Game of Life, it's helpful to see it in action.  
There are countless interesting patterns that emerge from simple starting states — some stable, some oscillating, and some even capable of moving or replicating.  

Here are a few notable patterns:  

1. Still Lifes: Patterns that don’t change over generations (e.g., Block, Beehive).

2. Oscillators: Patterns that repeat in a cycle (e.g., Blinker, Toad, Pulsar).

3. Spaceships: Patterns that move across the grid (e.g., Glider, Lightweight spaceship).

Guns and Replicators: Patterns like the Gosper Glider Gun can create infinite streams of gliders, proving the game’s Turing completeness.  