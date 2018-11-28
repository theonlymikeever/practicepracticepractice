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
      stack.push(item);
    }
  });
  // if empty, we matched all
  // if (stack.length > 0) return false;
  // return true;
  return stack.length === 0;
}

validParentheses('()()()'); // true
validParentheses('()(())'); // true 
validParentheses('()()('); // false
validParentheses('()))'); // false  