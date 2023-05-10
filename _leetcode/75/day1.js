// RUNNING SUM OF 1D ARRAY

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]

// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

var runningSum = function (nums) {
  let sum = new Array(nums.length);

  sum[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }
  return sum;
};

//ALTERNATIVE SOLUTION

const runningSum = (nums) => {
  nums.reduce(
    (accumulator, current, index, sourceArr) => (sourceArr[i] += accumulator)
  );
  return nums;
};

///////////////////////////////////////////////

// FIND PIVOT INDEX

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

function Accumulation(arr) {
  return arr.reduce((a, b) => a + b);
}

var pivotIndex = function (nums) {
  // Initialization:
  // Left hand side be empty, and
  // Right hand side holds all weights.

  let totalWeightOnLeft = 0;
  let totalWeightOnRight = Accumulation(nums);

  for (let i = 0; i < nums.length; i++) {
    let currentWeight = nums[i];

    totalWeightOnRight -= currentWeight;

    if (totalWeightOnLeft == totalWeightOnRight) {
      // balance is met on both sides
      return i;
    }

    totalWeightOnLeft += currentWeight;
  }

  return -1;
};
