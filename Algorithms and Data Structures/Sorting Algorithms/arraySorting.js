let swap = (array, i, j) => {
  let temp = array[i];
  array[i] = a[j];
  array[j] = temp;
};

let bubbleSort = (array) => {
  let end = array.length;
  let sortOccured;
  do {
    sortOccured = false;
    for (let i = 1; i < end; i++) {
      if (array[i - 1] > array[i]) {
        swap(array, i - 1, i);
        sortOccured = true;
      }
    }
    end--;
  } while (sortOccured);
};

let selectionSort = (array) => {
  let begin = 0;
  while (begin < array.length) {
    let minIndex = begin;
    for (let i = begin; i < array.length; i++) {
      if (array[minIndex] > array[i]) {
        minIndex = i;
      }
    }
    if (array[begin] > array[minIndex]) {
      swap(array, begin, minIndex);
    }
    begin++;
  }
};

let insertionSort = (array) => {
  let sortDown = (index) => {
    if (array[index] < array[index - 1]) {
      swap(array, index, index - 1);
      sortDown(index - 1);
    }
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      sortDown(j);
    }
  }
};

let a = [];
for (let i = 0; i < 20; i++) {
  a.push(Math.floor(Math.random() * 100));
}
console.log('Begin: ', a);
// bubbleSort(a);
// selectionSort(a);
insertionSort(a);
console.log('End: ', a);
