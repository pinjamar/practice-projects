// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2

var firstUniqChar = function (s) {
  for (let idx = 0; idx < s.length; idx++) {
    // If same...
    if (s.indexOf(s[idx]) === s.lastIndexOf(s[idx])) {
      // return the index of that unique character
      return idx;
    }
  }
  return -1; // If no character appeared exactly once...
};
