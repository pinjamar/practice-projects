// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  var freq = new Array(26).fill(0);
  for (var i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  for (var i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) {
      return false;
    }
  }

  return true;
};

//ALTERNATIVE SOLUTION

var isAnagram = function (s, t) {
  // To count freq we make an array of size 26...
  const counter = new Array(26).fill(0);
  // Traverse all elements through a loop...
  for (let idx = 0; idx < s.length; idx++) {
    counter[s.charCodeAt(idx) - 97]++;
  }
  for (let idx = 0; idx < t.length; idx++) {
    counter[t.charCodeAt(idx) - 97]--;
  }
  // Above iteration provides us with count array having all values to zero then we can say we found an anagram.
  // Every element of count has to be equal to 0.
  // If it is greater than 0 it means s has a character whose occurrence is greater than its occurrence in t.
  // And if its less than 0 then, s has a character whose occurrence is smaller than its occurrence in t.
  for (let idx = 0; idx < 26; idx++) {
    if (counter[idx] != 0) return false;
  }
  return true;
};
