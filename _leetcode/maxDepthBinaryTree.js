// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while (queue.length !== 0) {
    depth++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
    queue.splice(0, len);
  }
  return depth;
};

//ALTERNATIVE SOLUTION

var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

///ANOTHER
var maxDepth = function (root) {
  // Base case...
  // If the subtree is empty i.e. root is NULL, return depth as 0...
  if (root == null) return 0;
  // if root is not NULL, call the same function recursively for its left child and right child...
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  // When the two child function return its depth...
  // Pick the maximum out of these two subtrees and return this value after adding 1 to it...
  return Math.max(leftDepth, rightDepth) + 1; // Adding 1 is the current node which is the parent of the two subtrees...
};
