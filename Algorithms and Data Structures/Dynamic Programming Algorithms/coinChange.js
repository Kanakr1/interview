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

// initialize memo[0] to 1 (there is only 1 way to make 0)
// 1 - coin(1) = 0;
// memo[1] += memo[0];

// 2 - coin(1) = 1;
// memo[2] += memo[1];
// 3 - coin(1) = 2;
// memo[3] += memo[2];

// ...

// 5 - coin(5) = 0;
// memo[5] += memo[0]; // memo[5] = 1;
// 5 - coin(1) = 4;
// memo[5] += memo[4]; // memo[5] = 2;
// There are two ways to make 5 cents with the given coins: 
// 1 + 1 + 1 + 1 + 1
// 5
