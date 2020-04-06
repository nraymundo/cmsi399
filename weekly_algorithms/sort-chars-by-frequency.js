/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let letters = {};
  count = 0;
  let sortedObj = [];
  let result = "";
  for (let i = 0; i < s.length; i++) {
    count = letters[s[i]];
    letters[s[i]] = count ? count + 1 : 1;
  }
  for (let char in letters) {
    sortedObj.push([char, letters[char]]);
  }
  sortedObj.sort(function (a, b) {
    return a[1] - b[1];
  });
  for (let i = sortedObj.length - 1; i >= 0; i--) {
    let numOfOccur = sortedObj[i][1];
    while (numOfOccur > 0) {
      result += sortedObj[i][0];
      numOfOccur--;
    }
  }
  return result;
};
