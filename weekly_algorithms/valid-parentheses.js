/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [],
    parens = "(){}[]";
  for (let i = 0; i < s.length; i++) {
    let bracketLocation = parens.indexOf(s[i]);

    if (bracketLocation % 2 === 0) {
      stack.push(bracketLocation + 1);
    } else {
      if (stack.pop() !== bracketLocation) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// References:
// https://levelup.gitconnected.com/solving-balanced-brackets-in-javascript-with-stacks-edbc52a57309
