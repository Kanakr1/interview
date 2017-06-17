// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotaion of s1 using only one call to 
// isSubstring (e.g., 'erbottlewat' is a rotation of 'waterbottle').

let stringRotation = (s1, s2) => {
  if (!(s1.length || s2.length) || s1.length !== s2.length) {
    return false;
  } 
  let s3 = s2 + s2;
  return s3.includes(s1);
}

/* Hints: 

- If a string is a rotaion of another, then it's a rotation at a particular point. 
For exmaple, a rotation of waterbottle at character 3 means cutting waterbottle 
at character 3 and putting the right half (erbottle) before the left half (wat).

- We are essentially asking if there's a way of splitting the first string into two parts, 
x and y, such that the first string is xy and the second string is yx. For example, 
x = wat and y = erbottle. The first stirng is xy = waterbottle. The second string is yx = erbottlewat.

- Think about the earlier hint. Then think about what happens when you concatenate 
erbottlewat to itself. You get erbottlewaterbottlewat.

*/

console.assert(stringRotation('waterbottle', 'erbottlewat') === true);
console.assert(stringRotation('computer', 'tercomput') === false);
console.assert(stringRotation('coffee', 'feecof') === true);
console.assert(stringRotation('cat', 'tca') === true);
console.assert(stringRotation('concatenate', 'econcatenate') === false);
console.assert(stringRotation('concatenate', 'econctenate') === false);