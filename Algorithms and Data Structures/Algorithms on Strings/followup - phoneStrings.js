// Implement an iterative version of the following:
// Given a number, return all the possible strings that could be created by this number using a phone pad

let digitChars = {
  1: '',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
  0: '',
}

let phoneStrings = (number, s = '', a = []) => {
  if (!number) {
    a.push(s);
    return a;
  }

  let digit = number[0];
  let chars = digitChars[digit];

  for (let i = 0; i < chars.length; i++) {
    phoneStrings(number.slice(1), s + chars[i], a);
  }

  if (!chars) {
    phoneStrings(number.slice(1), s, a);
  }

  return a;
}

let result = phoneStrings('9237');
console.log(result);

let phoneIterative = (number) => {
  let result = [];
  let digits = number.split('');

  while(digits.length) {
    let d = digits.shift();
    let chars = digitChars[d];
    for (let i = 0; i < chars.length; i++) {
      result.push(chars[i]);
    }
  }

  return result;
}

// console.log(phoneIterative('23'));


