// Write a function called that accepts a number n and returns the nth number in the Fibonacci sequence

//1,1,2,3,5,8,13........

//Non recursive

function fib(n) {
  if (n < 3) return 1;

  let prev = 1;
  let curr = 1;

  for (let i = 2; i < n; i++) {
    const next = prev + curr;

    prev = curr;
    curr = next;
  }
  return curr;
}

//RECURSIVE SOLUTION

function fib(n) {
  if (n < 1) return null;
  if (1 < n < 3) return 1;
  return fib(n - 1) + fib(n - 2);
}
