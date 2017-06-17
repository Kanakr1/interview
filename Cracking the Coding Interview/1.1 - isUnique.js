// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 

let isUnique = (string) => {

  // Using a Hash Table: 
  // let charTable = {};

  // for (let char of string) {
  //   if (charTable.hasOwnProperty(char)) {
  //     return false;
  //   } else {
  //     charTable[char] = char;
  //   }
  // }

  // return true;

  // Using an array (??)
  let charArray = string.split('').sort();
  let unique = true;
  for (let i = 1; i < charArray.length; i++) {
    if (charArray[i - 1] === charArray[i]) {
      unique = false;
      break;
    }
  }
  return unique;
}

let falsyStrings = ['hello', 'goodbye', '??', 'tiffany'];
let truthyStrings = ['sam', 'blah', 'wrong', 'what'];
falsyStrings.forEach((word) => {
  assert(isUnique(word) === false, 'Should return falsy for words with doubled letters');
});

truthyStrings.forEach((word) => {
  assert(isUnique(word) === true, 'Should return true for all unique character words');
});

function assert(expectedBehavior, description){
  if (!expectedBehavior) {
    console.log(description)
  } else {
    console.log('test passed!')
  }
}

/* Hints

- Try using a hash table
- Could a bit vector be useful? (But wouldn't that be an additional data structure?)
- Can you solve it in O(N log N) time? What might a solution like that look like?

*/
