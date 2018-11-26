function simpleAdding(num){
  let arr = [...Array(num).keys()].map(x => ++x);
  return arr.reduce((a, b) => a + b);
}

console.log(simpleAdding(4));