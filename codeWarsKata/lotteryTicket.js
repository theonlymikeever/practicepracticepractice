function bingo(ticket, win){
  let miniWins = 0;

  ticket.forEach(tick => {
    let str = tick[0];
    let val = tick[1];
    for (var i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) === val) {
        miniWins += 1;
        break;
      }
    }
  });
  return miniWins < win ? 'Loser!' : 'Winner!';
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));