// Write a method to return all subsets of a set.

let powerSet = (set) => {
  let result = [];
  for (let i = 0; i < set.length; i++) {
    let n = result.length;
    for (let j = 0; j < n; j++) {
      result.push(result[j] + set[i]);
    }
    result.push(set[i]);
  }

  return result;
}

let powerRecurse = (set, result = []) => {
  if (set.length === 0) { // if it's an empty set
    return result;
  }

  let n = result.length;
  let next = set.pop();
  for (let i = 0; i < n; i++) {
    result.push(result[i] + next);
  }

  result.push(next);
  return powerRecurse(set, result);
}

let set = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
console.time('DP');
let result = powerSet(set);
console.timeEnd('DP');
// console.log(result);

console.time('Recurse');
let recurse = powerRecurse(set);
console.timeEnd('Recurse');
// console.log(recurse);