// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]

var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) result.push('FizzBuzz');
    else if (i % 3 === 0) result.push('Fizz');
    else if (i % 5 === 0) result.push('Buzz');
    else result.push(i.toString());
  }
  return result;
};

//ALTERNATIVE SOLUTION

var fizzBuzz = function (n) {
  var multipleOf = function (i, k) {
    return i % k == 0;
  };

  var fizzBuzz = function (n) {
    let output = [];

    for (let i = 1; i <= n; i++) {
      if (multipleOf(i, 3) && multipleOf(i, 5)) {
        output.push('FizzBuzz');
      } else if (multipleOf(i, 3)) {
        output.push('Fizz');
      } else if (multipleOf(i, 5)) {
        output.push('Buzz');
      } else {
        output.push(i.toString(10));
      }
    }

    return output;
  };
};
