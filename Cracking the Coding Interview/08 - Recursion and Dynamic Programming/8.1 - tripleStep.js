// A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at at time. 
// Implement a method to count how many possible ways the child can run up the stairs.

let tripleStep = (n, total = 0, numWays = [0]) => {
  if (total > n) {
    return;
  }

  if (total === n) {
    return numWays[0]++;
  }

  for (let i = 1; i <= 3; i++) {
    tripleStep(n, total + i, numWays);
  }
  return numWays[0];
}

let tripleMemo = (n, memo = []) => {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else if (memo[n] > -1) {
    return memo[n];
  } else {
    memo[n] = tripleMemo(n - 1, memo) + tripleMemo(n - 2, memo) + tripleMemo(n - 3, memo);
    return memo[n];
  }
}

function getWays(n, c, memo = []){
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 0;
  } else if (memo[n] > -1) {
    return memo[n];
  } else {
    let total = 0
    for (let i = 0; i < c.length; i++) {
      total += getWays(n - c[i], c, memo);
    }
    memo[n] = total;
    return memo[n];
  }
}

/* Hints

- Approach this from the top down. What is the very last hop the child made?
- If we knew the number of paths to each of the steps before step 100, could we compute the number of steps to 100?
- We can compute the number of steps to 100 by the number of steps to 99, 98, and 97. This corresponds to 
the child hopping 1, 2, or 3 steps at the end. Do we add those or multiply them? That is: Is it 
f(100) = f(99) + f(98) + f(97) or f(100) = f(99) + f(98) + f(97)?
- We multiply the values when it's 'we do this then this.' We add them we it's 'we do this or this.'
- What is the runtime of this method? Think carefully. Can you optimize it?
- Try memoization as a way to optimize an inefficient recursive program.

*/
let n = 4;


console.time('recurse');
let result = tripleStep(n);
console.timeEnd('recurse');
// console.log(result);

console.time('memo');
let memo = tripleMemo(n);
console.timeEnd('memo');
console.log(memo);

console.log(getWays(n, [1, 2, 3]));