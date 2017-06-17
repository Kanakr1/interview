// Write a method to replace all spaces in a string with '%20.' 
// You may assume taht the string has sufficient space at the end to hold 
// the adiditional characters, and that you are given the 'true' length of the string.

let URLify = (string) => {
  let url = string.split('');
  url.forEach((char, i, a) => {
    if (char === ' ') {
      a[i] = '%20';
    }
  })

  url = url.join('');
  return url;
}

let string = 'Mr John Smith';
console.assert(URLify(string) === 'Mr%20John%20Smith');

/*

Hints:

- It's often easiest to modify a string by going from the end of the string to the beginning
- You might find you need to know the number of spaces. Can you just count them?

*/