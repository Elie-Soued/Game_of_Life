const blinker = (grid, gridCols, center) => {
  grid[center].state = 1;
  grid[center + 1 * gridCols].state = 1;
  grid[center + 2 * gridCols].state = 1;
};

const beacon = (grid, gridCols, center) => {
  grid[center].state = 1;
  grid[center + 1].state = 1;
  grid[center + 1 * gridCols].state = 1;
  grid[center + 3 * gridCols + 2].state = 1;
  grid[center + 3 * gridCols + 3].state = 1;
  grid[center + 2 * gridCols + 3].state = 1;
};

const glider = (grid, gridCols, center) => {
  grid[center].state = 1;
  grid[center + 2 * gridCols].state = 1;
  grid[center + 2 * gridCols + 1].state = 1;
  grid[center + 1 * gridCols + 1].state = 1;
  grid[center + 1 * gridCols + 2].state = 1;
};

const pentadecathlon = (grid, gridCols, center) => {
  // First group (top section)
  grid[center - 7 * gridCols].state = 1;
  grid[center - 6 * gridCols].state = 1;
  grid[center - 5 * gridCols].state = 1;
  grid[center - 5 * gridCols - 1].state = 1;
  grid[center - 5 * gridCols + 1].state = 1;

  // Second group (middle-top section)
  grid[center - 2 * gridCols - 1].state = 1;
  grid[center - 2 * gridCols].state = 1;
  grid[center - 2 * gridCols + 1].state = 1;
  grid[center - 1 * gridCols].state = 1;
  grid[center].state = 1;
  grid[center + 1 * gridCols].state = 1;
  grid[center + 2 * gridCols].state = 1;
  grid[center + 3 * gridCols].state = 1;
  grid[center + 3 * gridCols - 1].state = 1;
  grid[center + 3 * gridCols + 1].state = 1;

  // Third group (middle-bottom section)
  grid[center + 6 * gridCols + 1].state = 1;
  grid[center + 6 * gridCols - 1].state = 1;
  grid[center + 6 * gridCols].state = 1;

  // Fourth group (bottom section)
  grid[center + 7 * gridCols].state = 1;
  grid[center + 8 * gridCols].state = 1;
};

const toad = (grid, gridCols, center) => {
  grid[center].state = 1;
  grid[center + 1].state = 1;
  grid[center + 2].state = 1;
  grid[center + gridCols - 1].state = 1;
  grid[center + gridCols].state = 1;
  grid[center + gridCols + 1].state = 1;
};

const glidergun = (grid, gridCols, center) => {
  // Left block - moved further right (+3)
  grid[center - 1 * gridCols - 17].state = 1;
  grid[center - 1 * gridCols - 16].state = 1;
  grid[center - 0 * gridCols - 17].state = 1;
  grid[center - 0 * gridCols - 16].state = 1;

  // Left ship/boat formation - moved further right (+3)
  grid[center - 3 * gridCols - 4].state = 1;
  grid[center - 3 * gridCols - 5].state = 1;
  grid[center - 2 * gridCols - 6].state = 1;
  grid[center - 1 * gridCols - 7].state = 1;
  grid[center - 0 * gridCols - 7].state = 1;
  grid[center + 1 * gridCols - 7].state = 1;
  grid[center + 2 * gridCols - 6].state = 1;
  grid[center + 3 * gridCols - 5].state = 1;
  grid[center + 3 * gridCols - 4].state = 1;

  // Middle complex pattern - moved further right (+3)
  grid[center + 0 * gridCols - 3].state = 1;
  grid[center + 0 * gridCols - 1].state = 1;
  grid[center + 0 * gridCols].state = 1;
  grid[center - 1 * gridCols - 1].state = 1;
  grid[center + 1 * gridCols - 1].state = 1;
  grid[center - 2 * gridCols - 2].state = 1;
  grid[center + 2 * gridCols - 2].state = 1;

  // Right structure - first vertical line - moved further right (+3)
  grid[center - 1 * gridCols + 3].state = 1;
  grid[center - 2 * gridCols + 3].state = 1;
  grid[center - 3 * gridCols + 3].state = 1;

  // Right structure - second vertical line - moved further right (+3)
  grid[center - 1 * gridCols + 4].state = 1;
  grid[center - 2 * gridCols + 4].state = 1;
  grid[center - 3 * gridCols + 4].state = 1;

  // Right structure - top and bottom points - moved further right (+3)
  grid[center - 4 * gridCols + 5].state = 1;
  grid[center + 0 * gridCols + 5].state = 1;

  // Right structure - far right top points - moved further right (+3)
  grid[center - 4 * gridCols + 7].state = 1;
  grid[center - 5 * gridCols + 7].state = 1;

  // Right structure - far right bottom points - moved further right (+3)
  grid[center + 0 * gridCols + 7].state = 1;
  grid[center + 1 * gridCols + 7].state = 1;

  // Far right block - moved further right (+3)
  grid[center - 2 * gridCols + 17].state = 1;
  grid[center - 2 * gridCols + 18].state = 1;
  grid[center - 3 * gridCols + 17].state = 1;
  grid[center - 3 * gridCols + 18].state = 1;
};

const pulsar = (grid, gridCols, center) => {
  // Top-left group

  grid[center - 7 * gridCols - 3].state = 1;
  grid[center - 6 * gridCols - 3].state = 1;
  grid[center - 5 * gridCols - 3].state = 1;
  grid[center - 5 * gridCols - 2].state = 1;

  // Top-right group
  grid[center - 7 * gridCols + 3].state = 1;
  grid[center - 6 * gridCols + 3].state = 1;
  grid[center - 5 * gridCols + 3].state = 1;
  grid[center - 5 * gridCols + 2].state = 1;

  // Bottom-left group
  grid[center + 5 * gridCols - 3].state = 1;
  grid[center + 5 * gridCols - 2].state = 1;
  grid[center + 6 * gridCols - 3].state = 1;
  grid[center + 7 * gridCols - 3].state = 1;

  // Bottom-right group
  grid[center + 5 * gridCols + 3].state = 1;
  grid[center + 5 * gridCols + 2].state = 1;
  grid[center + 6 * gridCols + 3].state = 1;
  grid[center + 7 * gridCols + 3].state = 1;

  // Left far edge
  grid[center - 3 * gridCols - 5].state = 1;
  grid[center - 3 * gridCols - 6].state = 1;
  grid[center - 3 * gridCols - 7].state = 1;
  grid[center - 2 * gridCols - 5].state = 1;

  // Left bottom edge
  grid[center + 2 * gridCols - 5].state = 1;
  grid[center + 3 * gridCols - 5].state = 1;
  grid[center + 3 * gridCols - 6].state = 1;
  grid[center + 3 * gridCols - 7].state = 1;

  // Right far edge
  grid[center - 3 * gridCols + 7].state = 1;
  grid[center - 3 * gridCols + 6].state = 1;
  grid[center - 3 * gridCols + 5].state = 1;
  grid[center - 2 * gridCols + 5].state = 1;

  // Right bottom edge
  grid[center + 2 * gridCols + 5].state = 1;
  grid[center + 3 * gridCols + 5].state = 1;
  grid[center + 3 * gridCols + 6].state = 1;
  grid[center + 3 * gridCols + 7].state = 1;

  // Bottom-right inner section
  grid[center + 2 * gridCols + 3].state = 1;
  grid[center + 1 * gridCols + 3].state = 1;
  grid[center + 1 * gridCols + 2].state = 1;
  grid[center + 2 * gridCols + 1].state = 1;
  grid[center + 3 * gridCols + 1].state = 1;
  grid[center + 3 * gridCols + 2].state = 1;

  // Bottom inner section
  grid[center + 2 * gridCols - 1].state = 1;
  grid[center + 3 * gridCols - 1].state = 1;
  grid[center + 3 * gridCols - 2].state = 1;

  // Bottom-left inner section
  grid[center + 1 * gridCols - 2].state = 1;
  grid[center + 1 * gridCols - 3].state = 1;
  grid[center + 2 * gridCols - 3].state = 1;

  // Middle-left inner section
  grid[center - 1 * gridCols - 2].state = 1;
  grid[center - 1 * gridCols - 3].state = 1;
  grid[center - 2 * gridCols - 3].state = 1;

  // Middle-top inner section
  grid[center - 3 * gridCols - 2].state = 1;
  grid[center - 3 * gridCols - 1].state = 1;
  grid[center - 2 * gridCols - 1].state = 1;

  // Middle-right inner section
  grid[center - 2 * gridCols + 1].state = 1;
  grid[center - 3 * gridCols + 1].state = 1;
  grid[center - 3 * gridCols + 2].state = 1;
  grid[center - 1 * gridCols + 2].state = 1;
  grid[center - 1 * gridCols + 3].state = 1;
  grid[center - 2 * gridCols + 3].state = 1;
};

const heavyweight = (grid, gridCols, center) => {
  // Top row
  grid[center - 1 * gridCols - 3].state = 1;
  grid[center - 1 * gridCols - 2].state = 1;
  grid[center - 1 * gridCols - 1].state = 1;
  grid[center - 1 * gridCols + 0].state = 1;
  grid[center - 1 * gridCols + 2].state = 1;
  grid[center - 1 * gridCols + 3].state = 1;

  // Middle row
  grid[center + 0 * gridCols - 3].state = 1;
  grid[center + 0 * gridCols - 2].state = 1;
  grid[center + 0 * gridCols - 1].state = 1;
  grid[center + 0 * gridCols + 0].state = 1;
  grid[center + 0 * gridCols + 1].state = 1;
  grid[center + 0 * gridCols + 2].state = 1;

  // Bottom row
  grid[center + 1 * gridCols - 2].state = 1;
  grid[center + 1 * gridCols - 1].state = 1;
  grid[center + 1 * gridCols + 0].state = 1;
  grid[center + 1 * gridCols + 1].state = 1;

  // Top extra cells
  grid[center - 2 * gridCols + 2].state = 1;
  grid[center - 2 * gridCols + 1].state = 1;
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
