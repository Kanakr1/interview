var uniqueInOrder = function(iterable){
  //your code here - remember iterable can be a string or an array
  let result = [];
  for (let i = 0; i < iterable.length; i++) {
    let unique = iterable[i];
    result.push(unique);
    for (let j = i; j < iterable.length; j++) {
      if (iterable[j] === unique) { continue; }
      i = j - 1;
      break;
    }
  }
  return result;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));

var reverse = function(string) {
  if (!string) {
    return string;
  }
  return reverse(string.slice(1)) + string[0];

  // string = string.split('');
  // let j = string.length - 1;
  // for (let i = 0; i < string.length / 2; i++) {
  //   let temp = string[i];
  //   string[i] = string[j];
  //   string[j] = temp;
  //   j--;
  // }
  // return string.join('');
}

let s = '';
for (let i = 0; i < 1000; i++) {
  s += Math.floor(Math.random() * i);
}

console.time('reverse');
// for (let i = 0; i < 10000; i++) {
  reverse(s);
// }
console.timeEnd('reverse');