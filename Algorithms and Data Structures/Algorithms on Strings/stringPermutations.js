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

let s = 'hello';
// for (let i = 0; i < s.length; i++) {
  // console.log(s.substring(0, i));
  // console.log(s.substring(i + 1, s.length));  
//   console.log(s.substring(0, i) + s.substring(i + 1, s.length));  
// }

// let result = stringPermutations(s);
// console.log(result.sort());

let stringIterative = (k, string) => {
  let result = [string];
  let s = string.split('');
  for(let i = 1; i < s.length; i++) {
    swap(s, k % (i + 1), i); 
    result.push(s.join(''))
    k = k / (i + 1);
  }
  return result;
}

function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

function swap (a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

let k = factorialize(s.length);
let iterativeResult = stringIterative(k, s);
console.log(iterativeResult.sort());


