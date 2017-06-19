function coinChange (n, c) {
  let memo = Array(n + 1).fill(0);
  memo[0] = 1;
  for (let i = 0; i < c.length; i++) {
    let coin = c[i];
    for (let j = 1; j < memo.length; j++) {
      if (j >= coin) {
        memo[j] += memo[j - coin];
      }
    }
  }
  return memo[n];
}

let result = coinChange(100, [1, 5, 10, 25]);
console.log(result);