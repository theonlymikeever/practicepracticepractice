function validParentheses(parens){
  let arr = [...parens];
  let stack = [];

  arr.forEach(item => {
    if (item === '('){
      stack.push(item);
      return;
    }
    // closing bracket
    if (stack.length && stack[stack.length-1] === '('){
      stack.pop();
    } else {
      // no prior open
      stack.push(item)
    }
  });
  if (stack.length > 0) return false;
  // if empty, we matched all
  return true;
}