// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

var sortColors = function (arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  let k = i;
  for (let m = 0; m < arr.length; m++) {
    if (arr[m] == 1) {
      [arr[m], arr[k]] = [arr[k], arr[m]];
      k++;
    }
  }
};

//ALTERNATIVE SOLUTION

var sortColors = function (arr) {
  let one = 0,
    zero = 0,
    two = 0;

  // step1
  for (let elem of arr) {
    if (elem == 0) zero++;
    else if (elem == 1) one++;
  }

  // step2
  two = arr.length - zero - one;

  // step3
  arr.length = 0;

  // step4
  for (let i = 0; i < zero; i++) arr.push(0);
  for (let i = 0; i < one; i++) arr.push(1);
  for (let i = 0; i < two; i++) arr.push(2);
};
