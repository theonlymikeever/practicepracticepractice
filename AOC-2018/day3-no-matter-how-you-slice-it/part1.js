/* 

  DAY 3 - Part 1

  The Elves managed to locate the chimney-squeeze prototype fabric for Santa's suit (thanks to someone who helpfully 
    wrote its box IDs on the wall of the warehouse in the middle of the night). Unfortunately, anomalies are still 
    affecting them - nobody can even agree on how to cut the fabric.

  The whole piece of fabric they're working on is a very large square - at least 1000 inches on each side.

  Each Elf has made a claim about which area of fabric would be ideal for Santa's suit. All claims have an ID and 
  consist of a single rectangle with edges parallel to the edges of the fabric. Each claim's rectangle is defined 
  as follows:

      The number of inches between the left edge of the fabric and the left edge of the rectangle.
      The number of inches between the top edge of the fabric and the top edge of the rectangle.
      The width of the rectangle in inches.
      The height of the rectangle in inches.

  A claim like #123 @ 3,2: 5x4 means that claim ID 123 specifies a rectangle 3 inches from the left edge, 2 inches 
  from the top edge, 5 inches wide, and 4 inches tall. Visually, it claims the square inches of fabric represented 
  by # (and ignores the square inches of fabric represented by .) in the diagram below:

  ...........
  ...........
  ...#####...
  ...#####...
  ...#####...
  ...#####...
  ...........
  ...........
  ...........

  The problem is that many of the claims overlap, causing two or more claims to cover part of the same areas. For 
  example, consider the following claims:

  #1 @ 1,3: 4x4
  #2 @ 3,1: 4x4
  #3 @ 5,5: 2x2

  Visually, these claim the following areas:

  ........
  ...2222.
  ...2222.
  .11XX22.
  .11XX22.
  .111133.
  .111133.
  ........

  The four square inches marked with X are claimed by both 1 and 2. (Claim 3, while adjacent to the others, does not 
    overlap either of them.)

  If the Elves all proceed with their own plans, none of them will have enough fabric. How many square inches of fabric 
  are within two or more claims?

*/

const {input} = require('./input');

// Grid @ 1000x1000 was too small! Says at LEAST 1000
const createGrid = (width = 1000, height = 1000) => {
  // Map out a H x W array
  return Array.from({ length: height }, () =>
    Array.from({ length: width }, () => 0)
  );
};

const fillGrid = (info, grid) => {
  console.log(`filling claim ${info.claim}`)
  for (let i = 0; i < info.height; i++) {
    for (let x = 0; x < info.width; x++) {
      grid[i + info.top][x + info.left] += 1;
    }
  }
};

const computeFilledArea = grid => {
  return grid.reduce((a, b) => {
    const rowTotal = b.filter(item => item >= 2);
    return a + rowTotal.length;
  }, 0);
};

const findCorrectCut = () => {
  // Initiate paper!!
  let sheetOfPaper = createGrid();
  // fill the sheet
  input.forEach(info => fillGrid(info, sheetOfPaper));
  // find the overlap
  return computeFilledArea(sheetOfPaper);
};

console.log('\nTotal surface area:', findCorrectCut()); // 112378
