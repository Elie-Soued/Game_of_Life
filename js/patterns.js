const blinker = (grid, canvas) => {
  grid[19 * canvas.cols + 34].state = 1;
  grid[20 * canvas.cols + 34].state = 1;
  grid[21 * canvas.cols + 34].state = 1;
};

const beacon = (grid, canvas) => {
  grid[19 * canvas.cols + 30].state = 1;
  grid[19 * canvas.cols + 29].state = 1;
  grid[20 * canvas.cols + 29].state = 1;
  grid[22 * canvas.cols + 31].state = 1;
  grid[22 * canvas.cols + 32].state = 1;
  grid[21 * canvas.cols + 32].state = 1;
};

const glider = (grid, canvas) => {
  grid[20 * canvas.cols + 29].state = 1;
  grid[22 * canvas.cols + 29].state = 1;
  grid[22 * canvas.cols + 30].state = 1;
  grid[21 * canvas.cols + 30].state = 1;
  grid[21 * canvas.cols + 31].state = 1;
};

const pentadecathlon = (grid, canvas) => {
  grid[11 * canvas.cols + 34].state = 1;
  grid[12 * canvas.cols + 34].state = 1;
  grid[13 * canvas.cols + 34].state = 1;
  grid[13 * canvas.cols + 33].state = 1;
  grid[13 * canvas.cols + 35].state = 1;

  grid[16 * canvas.cols + 33].state = 1;
  grid[16 * canvas.cols + 34].state = 1;
  grid[16 * canvas.cols + 35].state = 1;
  grid[17 * canvas.cols + 34].state = 1;
  grid[18 * canvas.cols + 34].state = 1;
  grid[19 * canvas.cols + 34].state = 1;
  grid[20 * canvas.cols + 34].state = 1;
  grid[21 * canvas.cols + 34].state = 1;
  grid[21 * canvas.cols + 33].state = 1;
  grid[21 * canvas.cols + 35].state = 1;

  grid[24 * canvas.cols + 35].state = 1;
  grid[24 * canvas.cols + 33].state = 1;
  grid[24 * canvas.cols + 34].state = 1;

  grid[25 * canvas.cols + 34].state = 1;
  grid[26 * canvas.cols + 34].state = 1;
};

const toad = (grid, canvas) => {
  grid[19 * canvas.cols + 29].state = 1;
  grid[19 * canvas.cols + 30].state = 1;
  grid[19 * canvas.cols + 31].state = 1;
  grid[20 * canvas.cols + 28].state = 1;
  grid[20 * canvas.cols + 29].state = 1;
  grid[20 * canvas.cols + 30].state = 1;
};

const glidergun = (grid, canvas) => {
  grid[(19 - 10) * canvas.cols + 2].state = 1;
  grid[(19 - 10) * canvas.cols + 3].state = 1;
  grid[(20 - 10) * canvas.cols + 2].state = 1;
  grid[(20 - 10) * canvas.cols + 3].state = 1;

  grid[(17 - 10) * canvas.cols + 15].state = 1;
  grid[(17 - 10) * canvas.cols + 14].state = 1;
  grid[(18 - 10) * canvas.cols + 13].state = 1;
  grid[(19 - 10) * canvas.cols + 12].state = 1;
  grid[(20 - 10) * canvas.cols + 12].state = 1;
  grid[(21 - 10) * canvas.cols + 12].state = 1;
  grid[(22 - 10) * canvas.cols + 13].state = 1;
  grid[(23 - 10) * canvas.cols + 14].state = 1;
  grid[(23 - 10) * canvas.cols + 15].state = 1;

  grid[(20 - 10) * canvas.cols + 16].state = 1;
  grid[(20 - 10) * canvas.cols + 18].state = 1;
  grid[(20 - 10) * canvas.cols + 19].state = 1;
  grid[(19 - 10) * canvas.cols + 18].state = 1;
  grid[(21 - 10) * canvas.cols + 18].state = 1;
  grid[(18 - 10) * canvas.cols + 17].state = 1;
  grid[(22 - 10) * canvas.cols + 17].state = 1;

  grid[(19 - 10) * canvas.cols + 22].state = 1;
  grid[(18 - 10) * canvas.cols + 22].state = 1;
  grid[(17 - 10) * canvas.cols + 22].state = 1;

  grid[(19 - 10) * canvas.cols + 23].state = 1;
  grid[(18 - 10) * canvas.cols + 23].state = 1;
  grid[(17 - 10) * canvas.cols + 23].state = 1;

  grid[(16 - 10) * canvas.cols + 24].state = 1;
  grid[(20 - 10) * canvas.cols + 24].state = 1;

  grid[(16 - 10) * canvas.cols + 26].state = 1;
  grid[(15 - 10) * canvas.cols + 26].state = 1;

  grid[(20 - 10) * canvas.cols + 26].state = 1;
  grid[(21 - 10) * canvas.cols + 26].state = 1;

  grid[(18 - 10) * canvas.cols + 36].state = 1;
  grid[(18 - 10) * canvas.cols + 37].state = 1;
  grid[(17 - 10) * canvas.cols + 36].state = 1;
  grid[(17 - 10) * canvas.cols + 37].state = 1;
};

const pulsar = (grid, canvas) => {
  grid[14 * canvas.cols + 30].state = 1;
  grid[15 * canvas.cols + 30].state = 1;
  grid[16 * canvas.cols + 30].state = 1;
  grid[16 * canvas.cols + 31].state = 1;

  grid[14 * canvas.cols + 36].state = 1;
  grid[15 * canvas.cols + 36].state = 1;
  grid[16 * canvas.cols + 36].state = 1;
  grid[16 * canvas.cols + 35].state = 1;

  grid[26 * canvas.cols + 30].state = 1;
  grid[26 * canvas.cols + 31].state = 1;
  grid[27 * canvas.cols + 30].state = 1;
  grid[28 * canvas.cols + 30].state = 1;

  grid[26 * canvas.cols + 36].state = 1;
  grid[26 * canvas.cols + 35].state = 1;
  grid[27 * canvas.cols + 36].state = 1;
  grid[28 * canvas.cols + 36].state = 1;

  grid[18 * canvas.cols + 28].state = 1;
  grid[18 * canvas.cols + 27].state = 1;
  grid[18 * canvas.cols + 26].state = 1;
  grid[19 * canvas.cols + 28].state = 1;

  grid[23 * canvas.cols + 28].state = 1;
  grid[24 * canvas.cols + 28].state = 1;
  grid[24 * canvas.cols + 27].state = 1;
  grid[24 * canvas.cols + 26].state = 1;

  grid[18 * canvas.cols + 40].state = 1;
  grid[18 * canvas.cols + 39].state = 1;
  grid[18 * canvas.cols + 38].state = 1;
  grid[19 * canvas.cols + 38].state = 1;

  grid[23 * canvas.cols + 38].state = 1;
  grid[24 * canvas.cols + 38].state = 1;
  grid[24 * canvas.cols + 39].state = 1;
  grid[24 * canvas.cols + 40].state = 1;

  grid[23 * canvas.cols + 36].state = 1;
  grid[22 * canvas.cols + 36].state = 1;
  grid[22 * canvas.cols + 35].state = 1;
  grid[23 * canvas.cols + 34].state = 1;
  grid[24 * canvas.cols + 34].state = 1;
  grid[24 * canvas.cols + 35].state = 1;

  grid[23 * canvas.cols + 32].state = 1;
  grid[24 * canvas.cols + 32].state = 1;
  grid[24 * canvas.cols + 31].state = 1;

  grid[22 * canvas.cols + 31].state = 1;
  grid[22 * canvas.cols + 30].state = 1;
  grid[23 * canvas.cols + 30].state = 1;

  grid[20 * canvas.cols + 31].state = 1;
  grid[20 * canvas.cols + 30].state = 1;
  grid[19 * canvas.cols + 30].state = 1;

  grid[18 * canvas.cols + 31].state = 1;
  grid[18 * canvas.cols + 32].state = 1;
  grid[19 * canvas.cols + 32].state = 1;

  grid[19 * canvas.cols + 34].state = 1;
  grid[18 * canvas.cols + 34].state = 1;
  grid[18 * canvas.cols + 35].state = 1;
  grid[20 * canvas.cols + 35].state = 1;
  grid[20 * canvas.cols + 36].state = 1;
  grid[19 * canvas.cols + 36].state = 1;
};

const heavyweight = (grid, canvas) => {
  grid[6 * canvas.cols + 19].state = 1;
  grid[6 * canvas.cols + 20].state = 1;
  grid[6 * canvas.cols + 21].state = 1;
  grid[6 * canvas.cols + 22].state = 1;
  grid[6 * canvas.cols + 24].state = 1;
  grid[6 * canvas.cols + 25].state = 1;
  grid[7 * canvas.cols + 19].state = 1;
  grid[7 * canvas.cols + 20].state = 1;
  grid[7 * canvas.cols + 21].state = 1;
  grid[7 * canvas.cols + 22].state = 1;
  grid[7 * canvas.cols + 23].state = 1;
  grid[7 * canvas.cols + 24].state = 1;
  grid[8 * canvas.cols + 20].state = 1;
  grid[8 * canvas.cols + 21].state = 1;
  grid[8 * canvas.cols + 22].state = 1;
  grid[8 * canvas.cols + 23].state = 1;
  grid[5 * canvas.cols + 24].state = 1;
  grid[5 * canvas.cols + 23].state = 1;
};

export {
  heavyweight,
  pulsar,
  glidergun,
  toad,
  pentadecathlon,
  glider,
  beacon,
  blinker,
};
