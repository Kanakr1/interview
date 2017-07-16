function trapWater(heights){
  if (heights.length < 3) { return 0; }
  
  // Inefficient solution (own)
  // let i = 0;
  // let j = 1;
  // let result = 0;
  // let temp = [];
  // while (i < heights.length - 1) {
  
  //   if (j === heights.length) {
  //     let maxIndex = 0;
  //     temp.forEach((index) => {
  //       if (heights[maxIndex] < heights[index]) { maxIndex = index; }
  //     });
      
  //     for (let k = i + 1; k <= maxIndex; k++) {
  //       result += heights[maxIndex] - heights[k];
  //     }

  //     temp = [];
  //     i = maxIndex;
  //     j = i + 1;
  //   }

  //   if (heights[i] > heights[j]) {
  //     temp.push(j);
  //     j++;
  //   } else {
  //     while (temp.length) {
  //       result += heights[i] - heights[temp.pop()];
  //     }
  //     i = j;
  //     j = i + 1;
  //   }
  // }
  // return result;
  
  // ***************************
  // Geeks for Geeks solution that doesn't work
  // let left = right = [];
  // let water = 0;
  // left[0] = heights[0];
  // for (let i = 0; i < heights.length; i++) {
  //   left[i] = Math.max(left[i - 1], heights[i]);
  // }

  // right[heights.length - 1] = heights[heights.length - 1];
  // for (let i = heights.length - 2; i >= 0; i--) {
  //   right[i] = Math.max(right[i + 1], heights[i]);
  // }

  // for (let i = 0; i < heights.length; i++) {
  //   water += Math.min(left[i], right[i]) - heights[i];
  // }

  // return water;

  // ************************
  // Leet code solution - works
  let left = 0; 
  let right = heights.length - 1;
  let water = 0;
  let maxLeft = maxRight = 0;

  while (left <= right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) { 
        maxLeft = heights[left]; 
      } else { 
        water += maxLeft - heights[left]; 
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        water += maxRight - heights[right];
      }
      right--;
    }
  }
  return water;

  // ************************
  // Staging day answer - calls slice over and over again - uses more time/memory 
  // function findMax(array) {
  //   return Math.max.apply(null, array);
  // }

  // return heights.reduce(function(totalWaterHeight, middleTower, i, heights) {
  //   var tallestLeft = findMax(heights.slice(0, i));
  //   var tallestRight = findMax(heights.slice(i));
  //   var waterHeight = Math.min(tallestLeft, tallestRight) - middleTower;
  //   return totalWaterHeight + Math.max(waterHeight, 0);
  // }, 0);
}

let h = [37,9,61,94,65,70,51,57,88,46,79,50,35,58,60]; // 207
// let h = [0,1,0,2,1,0,1,3,2,1,2,1]; // 6
let water = trapWater(h);
console.log(water); 





