// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
var titleToNumber = function (s) {
  const charCodeBase = 'A'.charCodeAt(0) - 1;
  const n = s.length;
  let number = 0;

  /*
   * Think of it as base 26. For example,
   * Column number of "AB" = 1 * 26^1 + 2 * 26^0
   */
  for (let i = 0; i < n; i++)
    number += (s.charCodeAt(i) - charCodeBase) * Math.pow(26, n - i - 1);

  return number;
};
