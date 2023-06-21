// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Runtime: 64 ms, faster than 92.88% of JavaScript online submissions for Invert Binary Tree.
var invertTree = function (root) {
  // Base case...
  if (root == null) {
    return root;
  }
  // Call the function recursively for the left subtree...
  invertTree(root.left);
  // Call the function recursively for the right subtree...
  invertTree(root.right);
  // swapping process...
  const curr = root.left;
  root.left = root.right;
  root.right = curr;
  return root; // Return the root...
};
