/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let largestValue = numbers[0];

  for (let values of numbers) {
    if (largestValue < values) {
      largestValue = values;
    }
  }

  return largestValue;
}

console.log(findLargestElement([3, 7, 2, 9, 1]));

module.exports = isAnagram = findLargestElement;
