// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

var searchInsert = function (nums, target) {
  let lo = 0,
    hi = nums.length; // we might need to inseart at the end
  while (lo < hi) {
    // breaks if lo == hi
    let mid = lo + Math.floor((hi - lo) / 2); // always gives the lower mid
    if (target > nums[mid]) {
      lo = mid + 1; // no way mid is a valid option
    } else {
      hi = mid; // it might be possibe to inseart @ mid
    }
  }
  return lo;
};
