/*

Game of Life (Med)
  https://leetcode.com/problems/game-of-life/

According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular
automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell
interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules
(taken from the above Wikipedia article):

  - Any live cell with fewer than two live neighbors dies, as if caused by under-population.
  - Any live cell with two or three live neighbors lives on to the next generation.
  - Any live cell with more than three live neighbors dies, as if by over-population.
  - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

Write a function to compute the next state (after one update) of the board given its current state.
The next state is created by applying the above rules simultaneously to every cell in the current state,
where births and deaths occur simultaneously.

Example:

  Input: 
    [
      [0,1,0],
      [0,0,1],
      [1,1,1],
      [0,0,0]
    ]
  Output: 
    [
      [0,0,0],
      [1,0,1],
      [0,1,1],
      [0,1,0]
    ]

*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  // Record previous state of board
  let prevState = [];
  for (const cell of board) {
    let copy = [...cell];
    prevState.push(copy);
  }

  // Func to calculate next cell state
  function generation(cellX, cellY, state) {
    let isAlive = state[cellX][cellY];
    // Func to view and add neighbors state
    function neighborCount(x, y) {
      let count = 0;
      if (isFilled(x - 1, y - 1)) count++; // top left
      if (isFilled(x - 1, y)) count++; // top
      if (isFilled(x - 1, y + 1)) count++; // top right
      if (isFilled(x, y - 1)) count++; // left
      if (isFilled(x, y + 1)) count++; // right
      if (isFilled(x + 1, y - 1)) count++; // bottom left
      if (isFilled(x + 1, y)) count++; // bottom
      if (isFilled(x + 1, y + 1)) count++; // bottom right
      return count;
    }
    // Boolean helper to keep neighborCount cleaner
    function isFilled(x, y) {
      return state[x] && state[x][y];
    }
    let aliveNeighbors = neighborCount(cellX, cellY);
    // Rules of conways game of life
    // 1. Any live cell with fewer than two live neighbors dies, as if caused by under-population.
    if (isAlive && aliveNeighbors < 2) return 0;
    // 2. Any live cell with two or three live neighbors lives on to the next generation.
    if (isAlive && (aliveNeighbors === 2 || aliveNeighbors === 3)) return 1;
    // 3. Any live cell with more than three live neighbors dies, as if by over-population.
    if (isAlive && aliveNeighbors > 3) return 0;
    // 4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
    if (!isAlive && aliveNeighbors === 3) return 1;
    // default case: dead
    return 0;
  }
  // Iterate over board
  for (let x = 0; x < board.length; x++) {
    // Pass each cell into generation func, along with prev state
    for (let y = 0; y < board[x].length; y++) {
      // Update cell in place
      board[x][y] = generation(x, y, prevState);
    }
  }
};

const test = {
  input: [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]],
  output: [[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]]
};

console.log(gameOfLife(test.input));
