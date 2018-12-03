/* 

  DAY 2 - Part 2
    Confident that your list of box IDs is complete, you're ready to find the boxes full of prototype fabric.

    The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, 
    given the following box IDs:

    abcde
    fghij
    klmno
    pqrst
    fguij
    axcye
    wvxyz

    The IDs abcde and axcye are close, but they differ by two characters (the second and fourth). However, the IDs fghij 
    and fguij differ by exactly one character, the third (h and u). Those must be the correct boxes.

    What letters are common between the two correct box IDs? (In the example above, this is found by removing the 
      differing character from either ID, producing fgij.)

*/

const input = require('./input');

const findCommon = (first, second) => {
  const split = first.split('');
  let differences = [];
  let common = split.filter((letter, i) => {
    // let index = second.indexOf(letter);
    let matched = letter === second[i];
    
    if (!matched) differences.push(letter);
    // check to see it exists in the second id AND is in same location
    return matched;
  });

  if (differences.length === 1) {
    return common.join('');
  }
  return '';
};
// console.log(findCommon("abcde", "axcye"))
// console.log(findCommon("fghij", "fguij"))

const findBoxes = ids => {
  let res = null, stack = ids;
  while (stack.length > 0 && !res) {
    let next = stack.shift();
    stack.forEach(item => {
      let found = findCommon(next, item);
      if (found.length) res = found;
    });
  }
  return res;
};

console.log(findBoxes(input)); // cypueihajytordkgzxfqplbwn
