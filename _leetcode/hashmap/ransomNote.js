// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = {};
  for (let letter of magazine) {
    if (!map[letter]) {
      map[letter] = 0;
    }
    map[letter]++;
  }

  for (let letter of ransomNote) {
    if (!map[letter]) {
      return false;
    }
    map[letter]--;
  }
  return true;
};

//ALTERNATIVE SOLUTION

var canConstruct = function (ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, '');
  }

  if (!ransomNote) return true;
  else return false;
};
