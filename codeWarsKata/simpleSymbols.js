function SimpleSymbols(str) {
  let arr = str.split('');
  let res = false;
  for (var i = 0; i < arr.length; i++) {
    if (/[a-zA-Z]/.test(arr[i])) {
      if (i === 0) return false;
      if (arr[i - 1] === '+' && arr[i + 1] === '+') {
        res = true;
        break;
      }
      res = false;
    }
  }
  return res;
}
console.log(SimpleSymbols('f++d+'))