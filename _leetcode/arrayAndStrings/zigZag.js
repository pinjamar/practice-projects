// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
  // return original string if can't zigzag
  if (numRows === 1 || s.length < numRows) return s;

  let rows = [];
  let converted = '';
  let reverse = false;
  let count = 0;

  // prepare rows
  for (let i = 0; i < numRows; i++) rows[i] = [];
  // reverse the push flow when reaching turning points
  for (let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;
    if (count === numRows - 1 || count === 0) reverse = !reverse;
  }
  // put together converted string
  return rows.reduce((converted, cur) => converted + cur.join(''), '');
};
