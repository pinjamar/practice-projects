// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

// Example 1:

// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  generateCombinations(1, n, k, [], result);
  return result;
};

function generateCombinations(start, n, k, combination, result) {
  if (k === 0) {
    result.push([...combination]);
    return;
  }
  for (let i = start; i <= n; ++i) {
    combination.push(i);
    generateCombinations(i + 1, n, k - 1, combination, result);
    combination.pop();
  }
}
