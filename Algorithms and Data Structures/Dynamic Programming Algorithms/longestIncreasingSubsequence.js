// O(n^2)
let longestIncreasingSubsequence = (array) => {
  let dp = new Array(array.length).fill(1);

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] < array[i]) {
        // if the dp[val] at j would be bigger than the current dp value at i
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
// Three cases: 
// 1. If A[i] is smallest among all end 
//    candidates of active lists, we will start 
//    new active list of length 1.
// 2. If A[i] is largest among all end candidates of 
//   active lists, we will clone the largest active 
//   list, and extend it by A[i].

// 3. If A[i] is in between, we will find a list with 
//   largest end element that is smaller than A[i]. 
//   Clone and extend this list by A[i]. We will discard all
//   other lists of same length as that of this modified list.
let longestIncreasingSubsequence = (array) => {
  
}

let a = [1, -5, 7, 4, -2, 4, 2, 8, 10, -100, -500];
// let a = [3, 4, -1, 0, 6, 2, 3];
longestIncreasingSubsequence(a);