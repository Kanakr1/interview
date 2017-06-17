// Given two strings, write a method to decide if one is a permutation of the other.

let checkPermutation = (a, b) => {
  let aTable = {};

  for (let char of a) {
    aTable[char] = aTable[char] || 0;
    aTable[char]++;
  }

  for (let char of b) {
    if (aTable.hasOwnProperty(char)) {
      if (aTable[char] < 1) {
        return false; 
      }
      aTable[char]--;
    } else {
      return false;
    }
  }

  return true;
}

console.assert(checkPermutation('hello', 'blah') === false);
console.assert(checkPermutation('yoyoyo', 'yyyooo') === true);
