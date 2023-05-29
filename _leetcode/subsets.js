// Given an integer array nums of unique elements, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

var subsets = function (nums) {
  let res = []; // the final arr, which we will display
  let auxArr = [],
    i = 0; // global vars

  function recur(nums, i, auxArr) {
    if (i == nums.length) {
      res.push(auxArr);
      return;
    } //operation of recursion will be upto i=n-1
    // when it will hit, i==n, it will store the computed arr, in the final arr, and break(return)

    // take it
    recur(nums, i + 1, [...auxArr, nums[i]]); //or, we can use 'aux.concat(nums[i])'

    // dont take
    recur(nums, i + 1, auxArr);
  }

  recur(nums, i, auxArr); // passing the global variable declared already
  return res; // rerturn the final 2d arr
};
