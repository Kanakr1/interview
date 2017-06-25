// A magic index in an array A[0.... n - 1] is defined to an index such that A[i] = i. Given a sorted array of 
// distinct integers, write a method to find a magic index, if one exists, in array A.

// FOLLOW UP
// What if the values are not distinct?
let magicIndex = (array, start = 0, end = array.length - 1) => {
  let mid = Math.floor((end + start) / 2);
  if (array[mid] === mid) {
    return mid;
  }

  if (start > end) {
    return null;
  }

  if (array[mid] < mid) {
    return magicIndex(array, mid + 1, end);
  } else {
    return magicIndex(array, start, mid - 1);
  }
}

let sortedArray = [-1, 0, 1, 2, 3, 5, 9];
let result = magicIndex(sortedArray);
console.log(result);
let otherExample = [-10, -9, -8, 1, 4, 199, 200];
let otherResult = magicIndex(otherExample);
console.log(otherResult);

let exampleTwo = [-10, 1, 5, 10, 22, 121, 500];
let resultTwo = magicIndex(exampleTwo);
console.log(resultTwo);
