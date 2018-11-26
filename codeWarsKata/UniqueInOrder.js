var uniqueInOrder=function(iterable){
  let arr = [...iterable] || iterable.split('');
  return arr.reduce((prev, curr) => {
    if (prev[prev.length-1] && prev[prev.length-1] !== curr){
      prev.push(curr);
      return prev;
    }
    return prev;
  }, [arr[0]]);
};


// Other terse solution
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
