// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

var kthSmallest = function (root, k) {
  let vals = [];
  (function dfs(node) {
    if (vals.length != k) {
      //no need to keep going after reach k-th number
      if (node.left) dfs(node.left); //go left first
      vals.push(node.val); //finished going left, now start adding values
      if (node.right) dfs(node.right); //if have right, go there and repeat process
    }
  })(root); // IFFE Immediately Invoking Function Expression, starting from root.
  return vals[k - 1]; //return element, but as i mentioned in the descript, don't need this full array, just the k-th elm
};
