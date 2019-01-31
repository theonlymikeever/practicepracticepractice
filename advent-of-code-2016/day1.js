/* 

  JavaScript implementation of Day 1 AOC question 'No Time for a Taxicab'
    url: https://adventofcode.com/2016/day/1

  Based on studying:
    url: http://nbviewer.jupyter.org/url/norvig.com/ipython/Advent%20of%20Code.ipynb#Day-1:-No-Time-for-a-Taxicab

*/

const Complex = require('complex.js');

// Headings
const N = new Complex('1i');
const S = new Complex('-1i');

const distance = point => Math.abs(point.re) + Math.abs(point.im); // re = real, im = imaginary

const parseCoords = coords => {
  let dict = {
    R: S,
    L: N
  };
  let split = coords.split(', ');
  return split.map(crd => {
    /*  
      pull out face and distance
      face mapped to complex headings above in order to find angle
      on positive plane (left being north, right being south)
    */
    let [face, dist] = crd;
    return [dict[face], parseFloat(dist)];
  });
};

const howFar = coords => {
  let heading = N;
  let location = 0;
  let parsed = parseCoords(coords);

  parsed.forEach(crd => {
    let [turn, distance] = crd;
    /* 
      left & right turns equal multiplication of the current heading vector
      depending on which direction of the plane you're traveling
      further info: https://betterexplained.com/articles/understanding-why-complex-multiplication-works/
     */
    heading = new Complex(turn).mul(heading);
    /* 
      Location then becomes a calculation of adding current dist traveled (complex num)
      by new heading * distance (to travel) (also complex)
     */
    location = new Complex(location).add(heading.mul(distance));
  });

  return distance(location);
};

// console.log(parseCoords('R2, L3'))
console.log(howFar('R2, L3')); // 5
console.log(howFar('R2, R2, R2')); // 2
console.log(howFar('R5, L5, R5, R3')); // 12
