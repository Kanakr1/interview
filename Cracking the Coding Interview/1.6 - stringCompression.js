// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string
// aabcccccaaa would become a2b1c5a3. If the 'compressed' string would not become smaller than the original string, your 
// method should return the original string. You can assume the string has only uppercase and lowercase letters(a - z).

let stringCompression = (string) => {
  let result = '';
  let counter = 0;
  let currentChar = string[0];

  for (let char of string) {
    if (char === currentChar) {
      counter++;
    } else {
      result += currentChar + counter;
      currentChar = char;
      counter = 1;
    }
  }
  result += currentChar + counter;
  return result.length < string.length ? result : string;
}

console.assert(stringCompression('aabcccccaaa') === 'a2b1c5a3');
console.assert(stringCompression('aabbcdd') === 'aabbcdd');
console.assert(stringCompression('AaAAAbbBBzzzEEEffffg') === 'A1a1A3b2B2z3E3f4g1');