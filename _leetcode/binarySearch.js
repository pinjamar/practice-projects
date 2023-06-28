// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

var search = function (nums, target) {
  let low = 0,
    hi = nums.length - 1;
  while (low < hi) {
    let mid = low + Math.floor((hi - low + 1) / 2);
    if (target < nums[mid]) {
      hi = mid - 1;
    } else {
      low = mid;
    }
  }
  return nums[low] == target ? low : -1;
};
