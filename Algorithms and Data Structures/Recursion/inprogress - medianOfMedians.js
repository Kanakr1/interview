let medianOfMedians = (unsortedArray, k) => {
  if (unsortedArray.length === 1) { 
    return unsortedArray[0]; 
  }
  k = k || Math.floor(unsortedArray.length / 2);
  let left = []; 
  let right = [];
  let midIndex = Math.floor(unsortedArray.length / 2);
  unsortedArray.forEach((number) => {
    if (number < unsortedArray[midIndex]) {
      left.push(number);
    } else {
      right.push(number);
    }
  });

  if (left.length === k) {
    return unsortedArray[midIndex];
  }
  if (left.length > k) {
    return medianOfMedians(left, k);
  } else {
    return medianOfMedians(right, k - left.length + 1);
  }
};

let array = [1, 2, 6, 4];
// let result = array.length;
let result = medianOfMedians(array);
console.log(result);