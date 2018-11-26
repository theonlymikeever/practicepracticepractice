function solution(number){
  let mults = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0){
      mults.push(i);
    }
  };
  return mults.reduce((prev, curr) => prev + curr, 0);
}