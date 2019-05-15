function diceShuffle(dice, str) {
  let map = {};
  // O(n * 6) => O(n)
  dice.forEach((die, idx) => {
    map[idx] = { inUse: false };
    die.forEach(letter => {
      map[idx][letter] = (map[idx][letter] || 0) + 1;
    })
  })
  // O(n * m) => m is str length and n $ of die
  let required = str.length;
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    for (die in map) {
      if (map[die][letter] && !map[die].inUse) {
        map[die].inUse = true;
        required--;
        break;
      }
    }
    if (required === 0) return true;
  }
  return false;
}

const diceInOrder = [['a','c','t','d','o','h'], ['r', 'o', 'l', 'w', 'e', 'f'], ['l', 'q', 'e', 'f', 'g', 'y']]; // In Order - true
const diceOutOfOrder = [['r', 'o', 'l', 'w', 'o', 'e'], ['l', 'q', 'e', 'f', 'g', 'y'], ['a','c','t','d','o','h']]; // Out of Order - true
const diceIsWrong = [['r', 'o', 'l', 'w', 'o', 'f'], ['l', 'q', 'e', 'f', 'g', 'y'], ['a','c','t','d','o','h']]; // Out of Order - false
const test = 'hey';

console.log(diceShuffle(diceInOrder, test));
console.log(diceShuffle(diceOutOfOrder, test));
console.log(diceShuffle(diceIsWrong, test));
