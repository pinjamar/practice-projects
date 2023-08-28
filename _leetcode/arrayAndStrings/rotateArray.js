// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

var rotate = function (nums, k) {
  k %= nums.length; // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }; // suppose  ----->--->
  reverse(0, nums.length - 1); // reverse   <--<------
  reverse(0, k - 1); // reverse first part ---><----
  reverse(k, nums.length - 1); // reverse second part --->----->
};
