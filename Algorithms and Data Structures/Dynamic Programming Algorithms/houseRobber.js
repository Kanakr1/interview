// You have n houses with certain amount of money stashed in each house. You can not steal any adjacent houses. 
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum 
// amount of money you can steal.

let houseRobber = (houses) => {
  let memo = [0];
  let j = 1;
  for (let i = 0; i < houses.length; i++) {
    let twoHomesAgo = memo[j - 2] || 0;
    memo[j] = Math.max(memo[j - 1], twoHomesAgo + houses[i]);
    j++;
  }

  return memo.reduce((acc, val) => {
    return Math.max(acc, val);
  });
};

let houses = [20, 8, 4, 10, 15, 6];
let houses2 = [1000000, 0, 0, 4000000, 100];

let result = houseRobber(houses);
let result2 = houseRobber(houses2);

console.log(result, result2);
