/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let totlaVowels = 0;
  const vowelList = {};

  //   Method 1
  for (let value of str) {
    if (vowels.includes(value)) {
      vowelList[value] = (vowelList[value] || 0) + 1;
      totlaVowels++;
    }
  }

  // Method2
  //   for (let i = 0; i < str.length; i++) {
  //     if (vowels.indexOf(str[i]) !== -1) {
  //       vowelList[str[i]] = (vowelList[str[i]] || 0) + 1;
  //       totlaVowels = totlaVowels + 1;
  //     }
  //   }

  return totlaVowels;
  //   List of the vowels how many time they have occured
  //   return vowelList;
}
console.log(countVowels("MousesAnou eg"));

export { countVowels };
