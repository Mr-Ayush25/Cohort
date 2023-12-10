/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((res) => {
    setTimeout(() => res("Hello"), n * 1000);
  });
}
wait(5).then((d) => console.log(d));
