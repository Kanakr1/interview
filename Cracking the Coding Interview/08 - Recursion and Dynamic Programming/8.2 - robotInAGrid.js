// Imagine a robot sitting on the upper left corner of a grid with r rows and c columns. 
// The robot can only move in two directions, right and down, but certain cells are 'off limits' 
// such that the robot cannot step on them. Design an algorithm to find a path for the robot from 
// the top left to the bottom right.

// let robotInAGrid = (grid, memo, rowPos = 0, colPos = 0) => {
//   let n = grid.length - 1;
//   if (rowPos === n && colPos === n) {
//     // memo[lastRow][lastCol] = 1;
//     console.log('in here');
//     return 1;
//   }

//   console.log(rowPos, colPos);

//   if (rowPos > n || colPos > n || grid[rowPos][colPos] === 0) { // out of bounds or not allowed
//     return 0;
//   }

//   let paths = robotInAGrid(grid, memo, ++rowPos, colPos) + robotInAGrid(grid, memo, rowPos, ++colPos);
//   return paths;
// }

// The memo must be passed in as well (not ideal) 
// Should just be a grid passed as a parameter

// TODO: create the memo inside the function
let robotInAGrid = (grid, memo) => {
  let n = grid.length - 2;
  for (let i = n; i >= 0; i--) {
    for (let j = n; j >=0; j--) {
      if (!grid[i][j]) {
        memo[i][j] = 0;
      } else {
        memo[i][j] = memo[i + 1][j] + memo[i][j + 1];
      }
    }
  }
  return memo[0][0];
}

let n = 10
let matrix = [];
let memo = [];

for (let i = 0; i < n; i++) {
  matrix[i] = [];
  memo[i] = [];
  for (let j = 0; j < n; j++) {
    matrix[i][j] = 1;
    if (i === n - 1 || j === n - 1) {
      memo[i][j] = 1;
    } else {
      memo[i][j] = 0;
    }
  }
}

memo[n - 1][n - 1] = 1;

matrix[0][4] = 0;
matrix[2][7] = 0;
matrix[3][3] = 0;
matrix[4][1] = 0;
matrix[4][9] = 0;
matrix[6][4] = 0;
matrix[6][7] = 0;
matrix[7][9] = 0;
matrix[8][5] = 0;
matrix[9][2] = 0;

let result = robotInAGrid(matrix, memo);
console.log(result);

let four = [];
let fourMemo = [];
for (let i = 0; i < 4; i++) {
  four[i] = [];
  fourMemo[i] = [];
  for (let j = 0; j < 4; j++) {
    four[i][j] = 1;
    if (i === 3 || j === 3) {
      fourMemo[i][j] = 1;
    } else {
      fourMemo[i][j] = 0;
    }
  }
}

four[1][1] = 0;
let fourResult = robotInAGrid(four, fourMemo);
console.log(fourResult);

/* Hints

- For the robot to reach the last cell, it must find a path to the second to last cells. For it to find a path to 
the second to last cells, it must find a path to the third to last cells.
- Simplify this problem a bit by first figuring out if there's a path. Then, modify your algorithm to track the path.
- Think again about the efficiency of your algorithm. Can you optimize it?

*/



