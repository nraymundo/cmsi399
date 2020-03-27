/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i].match(/^[a-zA-Z]*$/)) {
      count++;
    }
    if (s[i].match(/\s/) && (i === 0 || count > 0)) {
      return count;
    }
  }
  return count;
};
