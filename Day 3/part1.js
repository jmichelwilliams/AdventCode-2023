const { data } = require('./data.js');

const rows = data.split('\n').map((x) => x.replace(/[^\d.]/g, '*'));

const calculateSum = (arr) => {
  const isValidSymbol = (x, y) => arr[x] && arr[x][y] === '*';

  let sum = 0;

  arr.forEach((row, rowIndex) => {
    const matches = row.match(/\d+/g) || [];
    matches.forEach((match) => {
      let isAdded = false;
      const matchIndex = row.indexOf(match);

      for (let i = rowIndex - 1; i <= rowIndex + 1; i++) {
        for (let j = matchIndex - 1; j <= matchIndex + match.length; j++) {
          if (isValidSymbol(i, j)) {
            isAdded = true;
            break;
          }
        }
        if (isAdded) break;
      }

      if (isAdded) {
        sum += parseInt(match);
      }
    });
  });

  return sum;
};

console.log(calculateSum(rows));
