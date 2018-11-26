function CheckNums(num1,num2) { 
  const first = parseFloat(num1);
  const second = parseFloat(num2.split('num')[1]);
  if (first === second) return -1;
  return second > first ? 'true' : 'false';
         
}

console.log(CheckNums(3, 'num2'))
console.log(CheckNums(67, 'num2'))