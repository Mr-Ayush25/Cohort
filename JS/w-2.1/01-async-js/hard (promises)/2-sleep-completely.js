/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const start = Date.now();
  let now = start;

  while (now - start < seconds) {
    // Continue executing code (no blocking)
    console.log("first");
    now = Date.now();
  }
}

console.log("Start");
sleep(5);

console.log("End");
