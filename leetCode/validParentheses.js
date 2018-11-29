/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = [...s];
  if (!arr.length) return true; // Empty string
  if (arr[0] === ')' || arr[0] === '}' || arr[0] === ']') {
    // Starts with closed bracket
    return false;
  }

  let stack = [];
  let currentToken = arr[0];

  function isOpenToken(t) {
    return t === '(' || t === '{' || t === '[';
  }

  function isClosingToken(t) {
    if (currentToken === '(') return t === ')';
    if (currentToken === '{') return t === '}';
    if (currentToken === '[') return t === ']';
    return false;
  }

  arr.forEach(item => {
    if (isOpenToken(item)){
      stack.push(item);
      currentToken = item;
      return;
    }
    // closing bracket
    if (stack.length && isClosingToken(item)){
      stack.pop();
      currentToken = stack[stack.length - 1];
    } else {
      // no prior open
      stack.push(item);
    }
  });
  // if empty, we matched all
  return stack.length === 0;
}

validParentheses('()()()'); // true
validParentheses('()(())'); // true 
validParentheses('()()('); // false
validParentheses('()))'); // false  