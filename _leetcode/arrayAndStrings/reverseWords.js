// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"

function reverseWords(s) {
  const ret = [];
  let word = [];
  for (let i = 0; i < s.length; ++i) {
    if (s.charAt(i) === ' ') {
      // We found the space, put word in front (if there is any)
      word.length > 0 && ret.unshift(word.join(''));
      // Reset the current word
      word = [];
    } else {
      // Add characters to the current word
      word.push(s.charAt(i));
    }
  }
  // If there is current word exists, add it in front
  word.length > 0 && ret.unshift(word.join(''));
  return ret.join(' ');
}
