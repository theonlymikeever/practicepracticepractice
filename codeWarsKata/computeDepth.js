function computeDepth(n){
  let numBank = [];
  let depth = 0;

  while (numBank.length < 10){
    depth++;
    let digits = ('' + (n * depth)).split('');

    numBank = digits.reduce((prev, curr) => {
      if (prev.indexOf(curr) < 0) return prev.concat(curr);
      return prev;
    }, numBank);
  }

  return depth;
}

console.log(computeDepth(9));

