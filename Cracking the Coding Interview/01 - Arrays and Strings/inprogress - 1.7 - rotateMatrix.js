// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
// write a method to rotate the image by 90 degrees. Can you do this in place?

let rotateMatrix = (matrix) => {

  // O(N^2) time (but twice)
  flipMatrix(matrix);
  positiveDiagonalFlip(matrix);

  // come back to this and redo it with the book's solution  
}

let flipMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    let k = matrix[i].length - 1;
    for (let j = 0; j < matrix[i].length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][k];
      matrix[i][k] = temp;
      k--;
    }
  }
}

let positiveDiagonalFlip = (matrix) => {
  let n = matrix.length - 1;
  let startRow = 0;
  let startCol = n - 1;
  while (startRow < n) {
    for (let i = startCol; i >= 0; i--) {
      let swapRow = n - i;
      let swapCol = n - startRow;
      let temp = matrix[startRow][i];
      matrix[startRow][i] = matrix[swapRow][swapCol];
      matrix[swapRow][swapCol] = temp;
    }
    startRow++;
    startCol--;
  }
}

let m = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15, 16 ] ];
rotateMatrix(m);
console.log(m);