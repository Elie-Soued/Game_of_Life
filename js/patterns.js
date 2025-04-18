const blinker = (grid, canvas, center) => {
  grid[center].state = 1;
  grid[center + 1 * canvas.cols].state = 1;
  grid[center + 2 * canvas.cols].state = 1;
};

const beacon = (grid, canvas, center) => {
  grid[center].state = 1;
  grid[center + 1].state = 1;
  grid[center + 1 * canvas.cols].state = 1;
  grid[center + 3 * canvas.cols + 2].state = 1;
  grid[center + 3 * canvas.cols + 3].state = 1;
  grid[center + 2 * canvas.cols + 3].state = 1;
};

const glider = (grid, canvas, center) => {
  grid[center].state = 1;
  grid[center + 2 * canvas.cols].state = 1;
  grid[center + 2 * canvas.cols + 1].state = 1;
  grid[center + 1 * canvas.cols + 1].state = 1;
  grid[center + 1 * canvas.cols + 2].state = 1;
};

const pentadecathlon = (grid, canvas, center) => {
  // First group (top section)
  grid[center - 7 * canvas.cols].state = 1;
  grid[center - 6 * canvas.cols].state = 1;
  grid[center - 5 * canvas.cols].state = 1;
  grid[center - 5 * canvas.cols - 1].state = 1;
  grid[center - 5 * canvas.cols + 1].state = 1;

  // Second group (middle-top section)
  grid[center - 2 * canvas.cols - 1].state = 1;
  grid[center - 2 * canvas.cols].state = 1;
  grid[center - 2 * canvas.cols + 1].state = 1;
  grid[center - 1 * canvas.cols].state = 1;
  grid[center].state = 1;
  grid[center + 1 * canvas.cols].state = 1;
  grid[center + 2 * canvas.cols].state = 1;
  grid[center + 3 * canvas.cols].state = 1;
  grid[center + 3 * canvas.cols - 1].state = 1;
  grid[center + 3 * canvas.cols + 1].state = 1;

  // Third group (middle-bottom section)
  grid[center + 6 * canvas.cols + 1].state = 1;
  grid[center + 6 * canvas.cols - 1].state = 1;
  grid[center + 6 * canvas.cols].state = 1;

  // Fourth group (bottom section)
  grid[center + 7 * canvas.cols].state = 1;
  grid[center + 8 * canvas.cols].state = 1;
};

const toad = (grid, canvas, center) => {
  grid[center].state = 1;
  grid[center + 1].state = 1;
  grid[center + 2].state = 1;
  grid[center + canvas.cols - 1].state = 1;
  grid[center + canvas.cols].state = 1;
  grid[center + canvas.cols + 1].state = 1;
};

const glidergun = (grid, canvas, center) => {
  // Left block - moved further right (+3)
  grid[center - 1 * canvas.cols - 17].state = 1;
  grid[center - 1 * canvas.cols - 16].state = 1;
  grid[center - 0 * canvas.cols - 17].state = 1;
  grid[center - 0 * canvas.cols - 16].state = 1;

  // Left ship/boat formation - moved further right (+3)
  grid[center - 3 * canvas.cols - 4].state = 1;
  grid[center - 3 * canvas.cols - 5].state = 1;
  grid[center - 2 * canvas.cols - 6].state = 1;
  grid[center - 1 * canvas.cols - 7].state = 1;
  grid[center - 0 * canvas.cols - 7].state = 1;
  grid[center + 1 * canvas.cols - 7].state = 1;
  grid[center + 2 * canvas.cols - 6].state = 1;
  grid[center + 3 * canvas.cols - 5].state = 1;
  grid[center + 3 * canvas.cols - 4].state = 1;

  // Middle complex pattern - moved further right (+3)
  grid[center + 0 * canvas.cols - 3].state = 1;
  grid[center + 0 * canvas.cols - 1].state = 1;
  grid[center + 0 * canvas.cols].state = 1;
  grid[center - 1 * canvas.cols - 1].state = 1;
  grid[center + 1 * canvas.cols - 1].state = 1;
  grid[center - 2 * canvas.cols - 2].state = 1;
  grid[center + 2 * canvas.cols - 2].state = 1;

  // Right structure - first vertical line - moved further right (+3)
  grid[center - 1 * canvas.cols + 3].state = 1;
  grid[center - 2 * canvas.cols + 3].state = 1;
  grid[center - 3 * canvas.cols + 3].state = 1;

  // Right structure - second vertical line - moved further right (+3)
  grid[center - 1 * canvas.cols + 4].state = 1;
  grid[center - 2 * canvas.cols + 4].state = 1;
  grid[center - 3 * canvas.cols + 4].state = 1;

  // Right structure - top and bottom points - moved further right (+3)
  grid[center - 4 * canvas.cols + 5].state = 1;
  grid[center + 0 * canvas.cols + 5].state = 1;

  // Right structure - far right top points - moved further right (+3)
  grid[center - 4 * canvas.cols + 7].state = 1;
  grid[center - 5 * canvas.cols + 7].state = 1;

  // Right structure - far right bottom points - moved further right (+3)
  grid[center + 0 * canvas.cols + 7].state = 1;
  grid[center + 1 * canvas.cols + 7].state = 1;

  // Far right block - moved further right (+3)
  grid[center - 2 * canvas.cols + 17].state = 1;
  grid[center - 2 * canvas.cols + 18].state = 1;
  grid[center - 3 * canvas.cols + 17].state = 1;
  grid[center - 3 * canvas.cols + 18].state = 1;
};

const pulsar = (grid, canvas, center) => {
  // Top-left group
  grid[center - 7 * canvas.cols - 3].state = 1;
  grid[center - 6 * canvas.cols - 3].state = 1;
  grid[center - 5 * canvas.cols - 3].state = 1;
  grid[center - 5 * canvas.cols - 2].state = 1;

  // Top-right group
  grid[center - 7 * canvas.cols + 3].state = 1;
  grid[center - 6 * canvas.cols + 3].state = 1;
  grid[center - 5 * canvas.cols + 3].state = 1;
  grid[center - 5 * canvas.cols + 2].state = 1;

  // Bottom-left group
  grid[center + 5 * canvas.cols - 3].state = 1;
  grid[center + 5 * canvas.cols - 2].state = 1;
  grid[center + 6 * canvas.cols - 3].state = 1;
  grid[center + 7 * canvas.cols - 3].state = 1;

  // Bottom-right group
  grid[center + 5 * canvas.cols + 3].state = 1;
  grid[center + 5 * canvas.cols + 2].state = 1;
  grid[center + 6 * canvas.cols + 3].state = 1;
  grid[center + 7 * canvas.cols + 3].state = 1;

  // Left far edge
  grid[center - 3 * canvas.cols - 5].state = 1;
  grid[center - 3 * canvas.cols - 6].state = 1;
  grid[center - 3 * canvas.cols - 7].state = 1;
  grid[center - 2 * canvas.cols - 5].state = 1;

  // Left bottom edge
  grid[center + 2 * canvas.cols - 5].state = 1;
  grid[center + 3 * canvas.cols - 5].state = 1;
  grid[center + 3 * canvas.cols - 6].state = 1;
  grid[center + 3 * canvas.cols - 7].state = 1;

  // Right far edge
  grid[center - 3 * canvas.cols + 7].state = 1;
  grid[center - 3 * canvas.cols + 6].state = 1;
  grid[center - 3 * canvas.cols + 5].state = 1;
  grid[center - 2 * canvas.cols + 5].state = 1;

  // Right bottom edge
  grid[center + 2 * canvas.cols + 5].state = 1;
  grid[center + 3 * canvas.cols + 5].state = 1;
  grid[center + 3 * canvas.cols + 6].state = 1;
  grid[center + 3 * canvas.cols + 7].state = 1;

  // Bottom-right inner section
  grid[center + 2 * canvas.cols + 3].state = 1;
  grid[center + 1 * canvas.cols + 3].state = 1;
  grid[center + 1 * canvas.cols + 2].state = 1;
  grid[center + 2 * canvas.cols + 1].state = 1;
  grid[center + 3 * canvas.cols + 1].state = 1;
  grid[center + 3 * canvas.cols + 2].state = 1;

  // Bottom inner section
  grid[center + 2 * canvas.cols - 1].state = 1;
  grid[center + 3 * canvas.cols - 1].state = 1;
  grid[center + 3 * canvas.cols - 2].state = 1;

  // Bottom-left inner section
  grid[center + 1 * canvas.cols - 2].state = 1;
  grid[center + 1 * canvas.cols - 3].state = 1;
  grid[center + 2 * canvas.cols - 3].state = 1;

  // Middle-left inner section
  grid[center - 1 * canvas.cols - 2].state = 1;
  grid[center - 1 * canvas.cols - 3].state = 1;
  grid[center - 2 * canvas.cols - 3].state = 1;

  // Middle-top inner section
  grid[center - 3 * canvas.cols - 2].state = 1;
  grid[center - 3 * canvas.cols - 1].state = 1;
  grid[center - 2 * canvas.cols - 1].state = 1;

  // Middle-right inner section
  grid[center - 2 * canvas.cols + 1].state = 1;
  grid[center - 3 * canvas.cols + 1].state = 1;
  grid[center - 3 * canvas.cols + 2].state = 1;
  grid[center - 1 * canvas.cols + 2].state = 1;
  grid[center - 1 * canvas.cols + 3].state = 1;
  grid[center - 2 * canvas.cols + 3].state = 1;
};

const heavyweight = (grid, canvas, center) => {
  // Top row
  grid[center - 1 * canvas.cols - 3].state = 1;
  grid[center - 1 * canvas.cols - 2].state = 1;
  grid[center - 1 * canvas.cols - 1].state = 1;
  grid[center - 1 * canvas.cols + 0].state = 1;
  grid[center - 1 * canvas.cols + 2].state = 1;
  grid[center - 1 * canvas.cols + 3].state = 1;

  // Middle row
  grid[center + 0 * canvas.cols - 3].state = 1;
  grid[center + 0 * canvas.cols - 2].state = 1;
  grid[center + 0 * canvas.cols - 1].state = 1;
  grid[center + 0 * canvas.cols + 0].state = 1;
  grid[center + 0 * canvas.cols + 1].state = 1;
  grid[center + 0 * canvas.cols + 2].state = 1;

  // Bottom row
  grid[center + 1 * canvas.cols - 2].state = 1;
  grid[center + 1 * canvas.cols - 1].state = 1;
  grid[center + 1 * canvas.cols + 0].state = 1;
  grid[center + 1 * canvas.cols + 1].state = 1;

  // Top extra cells
  grid[center - 2 * canvas.cols + 2].state = 1;
  grid[center - 2 * canvas.cols + 1].state = 1;
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
