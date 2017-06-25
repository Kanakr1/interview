// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0

let zeroMatrix = (matrix) => {
  let indices = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        indices.push([i, j]);
      }
    }
  }

  for (let index = 0; index < indices.length; index++) {
    let i = indices[index][0];
    let j = indices[index][1];
    let length = matrix[i].length;
    matrix[i] = Array(length).fill(0);
    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][j]) {
        matrix[k][j] = 0;
      }
    }
  }
}

let m = [
  [ 1, 2, 3, 4, 5, 6 ],
  [ 7, 8, 0, 9, 1, 1, 2 ],
  [ 5, 0 ],
  [ 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0 ],
  [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ]
];

zeroMatrix(m);
console.log(m);