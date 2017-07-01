// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
// write a method to rotate the image by 90 degrees. Can you do this in place?

// Book solution
let rotateMatrix = (matrix) => {
  /* Pseudo code
  for i = 0 to n
    temp = top[i]
    top[i] = left[i]
    left[i] = bottom[i]
    bottom[i] = right[i]
    right[i] = temp
  */
  if (matrix.length === 0 || matrix.length !== matrix[0].length) { return false; }
  let n = matrix.length;
  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i]; // save top
      // left -> top
      matrix[first][i] = matrix[last - offset][first];
      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset];
      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];
      // top -> right 
      matrix[i][last] = top; // right <- saved top
    }
  }
}


// let rotateMatrix = (matrix) => {

//   // O(N^2) time (but twice)
//   flipMatrix(matrix);
//   positiveDiagonalFlip(matrix);

//   // come back to this and redo it with the book's solution  
// }

// let flipMatrix = (matrix) => {
//   for (let i = 0; i < matrix.length; i++) {
//     let k = matrix[i].length - 1;
//     for (let j = 0; j < matrix[i].length / 2; j++) {
//       let temp = matrix[i][j];
//       matrix[i][j] = matrix[i][k];
//       matrix[i][k] = temp;
//       k--;
//     }
//   }
// }

// let positiveDiagonalFlip = (matrix) => {
//   let n = matrix.length - 1;
//   let startRow = 0;
//   let startCol = n - 1;
//   while (startRow < n) {
//     for (let i = startCol; i >= 0; i--) {
//       let swapRow = n - i;
//       let swapCol = n - startRow;
//       let temp = matrix[startRow][i];
//       matrix[startRow][i] = matrix[swapRow][swapCol];
//       matrix[swapRow][swapCol] = temp;
//     }
//     startRow++;
//     startCol--;
//   }
// }

let m = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15, 16 ] ];
rotateMatrix(m);
console.log(m);