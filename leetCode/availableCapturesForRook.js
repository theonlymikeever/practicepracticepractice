/* 
  Available Captures For Rook
  https://leetcode.com/problems/available-captures-for-rook/

  On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, 
  white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 
  p' respectively. Uppercase characters represent white pieces, and lowercase 
  characters represent black pieces.

  The rook moves as in the rules of Chess: it chooses one of four cardinal directions
  (north, east, west, and south), then moves in that direction until it chooses to 
  stop, reaches the edge of the board, or captures an opposite colored pawn by moving 
  to the same square it occupies.  Also, rooks cannot move into the same square as 
  other friendly bishops.

  Return the number of pawns the rook can capture in one move.
  
  Example 1
    Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
    Output: 3
    Explanation: In this example the rook is able to capture all the pawns.

  Example 2
    Input:[[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
    Output: 0
    Explanation: Bishops are blocking the rook to capture any pawn.  

  Note:
    - board.length == board[i].length == 8
    - board[i][j] is either 'R', '.', 'B', or 'p'
    - There is exactly one cell with board[i][j] == 'R'  
 */

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  // First we'll find the position of the rook
  let r1, r2;
  for (let i = 0; i < board.length; i++) {
    let rookIndex = board[i].indexOf('R');
    if (rookIndex >= 0){
      r1 = i;
      r2 = rookIndex;
      i = board.length; // stop early once found
    }
  }
  // Count Cardinal North/South/East/West, removing whitespace
  let nS1 = board.map(t => t[r2]).slice(0, r1).filter(f => f !== '.').reverse();
  let nS2 = board.map(t => t[r2]).slice(r1 + 1).filter(f => f !== '.');
  let eW1 = board[r1].slice(0, r2).filter(f => f !== '.').reverse();
  let eW2 = board[r1].slice(r2 +1 ).filter(f => f !== '.');
  // Send back Pawns not obscured by Bishops
  return [nS1, nS2, eW1, eW2].reduce((acc, curr) => {
    return curr[0] && curr[0] !== 'B' ? acc + 1 : acc;
  }, 0);
};

const testCases = [
  {
    input: [
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', 'p', '.', '.', '.', '.'],
      ['.', '.', '.', 'R', '.', '.', '.', 'p'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', 'p', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.']
    ],
    output: 3
  },
  {
    input: [
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
      ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
      ['.', 'p', 'B', 'R', 'B', 'p', '.', '.'],
      ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
      ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.']
    ],
    output: 0
  }
];

testCases.forEach(({input, output}) => {
  console.log(numRookCaptures(input) === output);
});
