// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  if (board.length === 0) {
    return board;
  }

  var checkNeighbors = function (row, col) {
    var score = -board[row][col];
    var r, c;
    for (r = row - 1; r <= row + 1; r++) {
      for (c = col - 1; c <= col + 1; c++) {
        if (
          typeof board[r] !== 'undefined' &&
          typeof board[r][c] !== 'undefined'
        ) {
          score += Math.abs(Math.floor(board[r][c]));
        }
      }
    }
    return score;
  };

  var r, c;
  for (r = 0; r < board.length; r++) {
    for (c = 0; c < board[0].length; c++) {
      var score = checkNeighbors(r, c);
      if (board[r][c] === 1) {
        if (score < 2 || score > 3) {
          board[r][c] = -0.5;
        }
      } else if (board[r][c] === 0) {
        if (score === 3) {
          board[r][c] = 0.5;
        }
      }
    }
  }

  for (r = 0; r < board.length; r++) {
    for (c = 0; c < board[0].length; c++) {
      board[r][c] = Math.ceil(board[r][c]);
    }
  }
};
