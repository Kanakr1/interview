// Given a list of characters, return all palindromes that can be made using all characters in the input list
// So given [a, a, b, b, c] returns [‘abcba’, ‘bacab’]

let palindromeGenerator = (array) => {
  let half = {};
  let mid;
  array.forEach((char) => {
    half[char] = half[char] || 0;
    half[char]++;
  });

  let halfString = '';
  for (let char in half) {
    if (half[char] % 2 === 1) {
      mid = char;
      half[char]--;
    }
    let numChars = half[char] / 2;
    for (let i = 0; i < numChars; i++) {
      halfString += char;
    }
  }

  let pairTable = stringPairs(halfString);
  let result = [];
  for (let pair in pairTable) {
    let palindrome = pair;
    if (mid) {
      palindrome += mid;
    }
    palindrome += pairTable[pair];
    result.push(palindrome);
  }

  return result;
}

let stringPairs = (s, p = '', pairTable = {}) => {
  if (!s) {
    pairTable[p] = reverseString(p);
    return;
  }

  for (let i = 0; i < s.length; i++) {
    stringPairs(s.substring(0, i) + s.substring(i + 1, s.length), p + s[i], pairTable);
  }
  return pairTable;
}

let reverseString = (string) => {
  let stringArray = string.split('');
  let j = stringArray.length - 1;
  for (let i = 0; i < string.length / 2; i++) {
    let temp = stringArray[i];
    stringArray[i] = stringArray[j];
    stringArray[j] = temp;
    j--;
  }

  return stringArray.join('');
}

let s = ['a', 'a', 'a', 'a', 'b', 'b', 'c', 'c'];

let permutations = palindromeGenerator(s);
console.log(permutations);










