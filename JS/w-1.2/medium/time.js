/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

//! We can Do it using Time

function calculateTime(n) {
  const start = new Date().getTime();
  // console.log(start);

  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  const end = new Date().getTime();
  // console.log(end);
  const time = end - start;
  console.log(time);
  console.log(time.toLocaleString());

  return sum;
}
console.log(calculateTime(10000000000));

//! We can Do it Console

/*
function calculateTime(n) {
  // Calculate time start's here
  console.time();

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  // Calculate time end's here
  console.timeEnd();
  return sum;
}
console.log(calculateTime(10000000000));
*/
