// Given a string, write a function to check if it is a permutation of a palindrome. 
// A palindrome is a word or phrase that is the same forwards and backwards. A 
// permutation is a rearrangement of letters. The palindrome does not need to be 
// limited to just dictionary words.

// Input: Tact Coa
// Output: true (permutations: 'taco cat', 'atco cta', etc.)

let palindromePermutation = (string) => {
  let charTable = {};

  string = string.toLowerCase();
  for (let char of string) {
    if (char === ' ') { continue; }
    charTable[char] = charTable[char] || 0;
    charTable[char]++;
  }

  let pairFlag = false;
  for (let char in charTable) {
    if (charTable[char] % 2 !== 0) {
      if (pairFlag === true) { return false; }
      pairFlag = true;
    }
  }

  return true;
}

console.assert(palindromePermutation('Tact Coa') === true);
console.assert(palindromePermutation('Blah HLABC') === true);
console.assert(palindromePermutation('BlahH HLABC') === false);
console.assert(palindromePermutation('Mr Owl ate my metal worm') === true);
