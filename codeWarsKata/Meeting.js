/* 

  John has invited some friends. His list is:
  s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

  Could you make a program that

    makes this string uppercase
    gives it sorted in alphabetical order by last name.

  When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

  So the result of function meeting(s) will be:
  "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

  It can happen that in two distinct families with the same family name two people have the same first name too.

*/

function meeting(s) {
  const sortAlpha = ([last1, first1], [last2, first2]) => last1 === last2 ? (first1 < first2 ? -1 : 1) : last1 < last2 ? -1 : 1;
  return s
    .split(';')
    .map(item =>
      item
        .toUpperCase()
        .split(':')
        .reverse()
    )
    .sort(sortAlpha)
    .reduce((acc, curr) => `${acc}(${curr.join(', ')})`, '');
}

const test = [
  'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill',
  'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn',
];
const expected = [
  '(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)',
  '(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)'
];

test.forEach((t, i) => {
  const res =  meeting(t);
  console.log(`res: ${res}`);
  console.log(`matches: ${res === expected[i]}\n`);
});