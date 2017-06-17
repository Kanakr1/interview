// O(n^2)
let longestIncreasingSubsequence = (array) => {
  let dp = new Array(array.length).fill(1);

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] < array[i]) {          
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  let max = dp.reduce((acc, val) => {
    return Math.max(acc, val);
  });

  console.log(dp);
  console.log(max);
  return max;
}

// O(nLogn)
// let longestIncreasingSubsequence = (array) => {
  
// }

let a = [1, -5, 7, 4, -2, 4, 2, 8, 10, -100, -500];
// let a = [3, 4, -1, 0, 6, 2, 3];
longestIncreasingSubsequence(a);