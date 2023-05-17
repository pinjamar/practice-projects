// Given an integer array nums where the elements are sorted in ascending order, convert it to a
// height-balanced
//  binary search tree.

//  Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  // subtrees are BSTs as well
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};
