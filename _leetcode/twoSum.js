// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const n = nums.length;
  const a = [...nums];

  //sort array in ascending order
  nums.sort((a, b) => a - b);

  //pointer to the first element of the array
  let x = 0;

  //pointer to the last element of the array
  let y = n - 1;

  while (x < y) {
    const sum = nums[x] + nums[y];

    if (sum === target) {
      break;
    } else if (sum > target) {
      y--;
    } else {
      x++;
    }
  }

  //vector pointing to the indexes of the 2 coordinates of our nums elements that we need
  const v = [];

  for (let i = 0; i < n; i++) {
    if (nums[x] === a[i]) {
      v.push(i);
    } else if (nums[y] === a[i]) {
      v.push(i);
    }
  }
  return v;
};

//ALTERNATIVE SOLUTION!!!
/**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     const comp = {};
//     for(let i=0; i<nums.length; i++) {

//         if (comp[nums[i]]>=0){
//             return [comp[nums[i]], i]
//         }
//         comp[target-nums[i]] = i;
//     }
// };
