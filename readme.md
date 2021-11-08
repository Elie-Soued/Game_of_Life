# Conway´s Game of Life with Javascript

=======================================

## Introduction

---

To understand the Game of life algorithm, checkout the below wikipedia page :
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

### My short summary:

Game of life was created in 1970 by the British matematician John Conway.
He divided a grid into cells.
Each cell had a state :
It could be dead or alive.
Black or white.
1 or 0.
In addition to having a state, cells had also 8 neigbors.
Rules of the Game
If a living cell has 2 or 3 neighbors, it lives on to the next generation.
If a living cell has less than 2 neighbors, it dies of underpopulation.
If a living cell has more than 3 neigbors, it dies of overpopulation.
If a dead cell has exactly 3 living neigbors. it comes back to life.

## The Project Structure

---

The project is basically composed of 2 sections:

- Animation of the landing page.
- The Game of life algorithm

### I-Landing page Animation

1- Circle.js (Class)
2- constant.js
3- eventListener.js

### II-Game of Life Algorithm

1-Canvas.js (class)
2-Cell.js (class)
3-constants.js
4-eventListener.js
