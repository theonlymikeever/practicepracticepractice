function pigIt(str) {
  let arr = str.split(' ');
  return arr.map(item => {
    let pig;
    if (item.length === 1){
      pig = item.match(/[a-z]/i) ? item + 'ay' : item;
      return pig;
    }
    pig = item.slice(1) + item.charAt(0) + 'ay';
    return pig;
  }).join(' ');
}