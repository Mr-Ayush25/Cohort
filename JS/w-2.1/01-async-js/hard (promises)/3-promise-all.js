/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hi");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hi2");
    }, 5000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hi3");
    }, 3000);
  });
}

function calculateTime() {
  console.time();

  const promises = [];
  promises.push(waitOneSecond());
  promises.push(waitTwoSecond());
  promises.push(waitThreeSecond());
  console.timeEnd();

  Promise.all(promises)
    .then((results) => {
      console.log("All promises resolved:", results);
    })
    .catch((error) => {
      console.error("One of the promises rejected:", error);
    });
}
calculateTime();
