let stringPermutations = (s, p = '', result = []) => {
  if (s === '') {
    result.push(p);
    return;
  }

  for (let i = 0; i < s.length; i++) {
    stringPermutations(s.substring(0, i) + s.substring(i + 1, s.length), p + s[i], result);
  }

  return result;
}

let s = 'ab';
// for (let i = 0; i < s.length; i++) {
  // console.log(s.substring(0, i));
  // console.log(s.substring(i + 1, s.length));  
//   console.log(s.substring(0, i) + s.substring(i + 1, s.length));  
// }

let result = stringPermutations(s);
console.log(result.sort());

let stringIterative = (string) => {
  
}