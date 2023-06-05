// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

var intersect = function (nums1, nums2) {
  let a1 = nums1.sort((a, b) => a - b);
  let a2 = nums2.sort((a, b) => a - b);
  let result = [];
  while (a1.length && a2.length) {
    if (a1[0] === a2[0]) {
      result.push(a1.shift());
      a2.shift();
    } else if (a1[0] > a2[0]) {
      a2.shift();
    } else {
      a1.shift();
    }
  }
  return result;
};
