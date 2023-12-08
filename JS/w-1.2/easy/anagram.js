/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  //   To generate the hasmap of number
  function generateMap(data) {
    let anagramList = {};
    for (let i = 0; i < data.length; i++) {
      anagramList[data[i]] = (anagramList[data[i]] || 0) + 1;
    }
    return anagramList;
  }

  // In Lowercase to adjust case-sensitive situation
  const list1 = generateMap(str1.toLowerCase());
  const list2 = generateMap(str2.toLowerCase());

  //   Comparing those hasmaps
  //   By length
  if (Object.keys(list1).length !== Object.keys(list2).length) return false;

  //   By Value
  for (let vals in list1) {
    if (list1[vals] !== list2[vals]) {
      return false;
    }
  }
  //   or we can
  //   for (let vals of str2) {
  //     if (!list1[vals]) return false;
  //     list1[vals] = list1[vals] - 1;
  //   }

  return true;
}

// Function call
console.log(isAnagram("shaely", "ashley"));

module.exports = isAnagram;
