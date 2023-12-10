let counter = 0;
// Update the counter every second (1000 milliseconds)
const intervalId = setInterval(() => {
  counter++;
  console.log(counter);
}, 1000);

// Clear the TimeInterval
setTimeout(() => {
  clearInterval(intervalId);
}, 5035);
