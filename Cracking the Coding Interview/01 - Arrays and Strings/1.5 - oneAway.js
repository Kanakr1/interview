// There are three types of edits that can be perfomed on strings: 
// - insert a character
// - remove a character
// - replace a character
// Given two strings, write a function to tell if they are one edit (or zero edits) away

// Example
// pale, ple // true
// pales, pale // true
// pale, bale // true
// pale, bake // false

let oneAway = (s1, s2) => {
  let s1Table = {};

  let diffFlag = false;
  if (s1.length === s2.length) {
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        if (diffFlag === true) { return false; }
        diffFlag = true;
      }
    }
  } else {
    let shorterString, longerString;
    if (Math.abs(s1.length - s2.length) > 1) { 
      return false;
    } else if (s1.length < s2.length) {
      shorterString = s1;
      longerString = s2;
    } else {
      shorterString = s2;
      longerString = s1;
    }

    let j = 0;
    for (let i = 0; i < shorterString.length; i++) {
      if (longerString[j] !== shorterString[i]) {
        if (diffFlag === true) { return false; }
        diffFlag = true;
        j++;
      }
      j++;
    }
  }
  return true;
}

console.assert(oneAway('pale', 'bale') === true);
console.assert(oneAway('pale', 'bake') === false);
console.assert(oneAway('pale', 'ple') === true);
console.assert(oneAway('pale', 'pales') === true);
console.assert(oneAway('pale', 'impales') === false);
console.assert(oneAway('bird', 'birdsong') === false);
console.assert(oneAway('cat', 'scat') === true);

/* Hints

- Start with the easy thing. Can you check for each of the conditions separately?
- What is the relationship between the 'insert characater' and 'remove character' option? Do these need to be separate checks?
- Can you do all three checks in a single pass?

*/
