const { data } = require('./data.js');

const rows = data.split('\n').map((x) => x.replace(/[^\d.]/g, '*'));

const calculateSum = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const matches = arr[i].matchAll(/\d+/g) || [];

    for (const match of matches) {
      const [number, index] = [match[0], match.index];

      let isAdded = false;

      for (
        let j = Math.max(0, i - 1);
        j <= Math.min(arr.length - 1, i + 1);
        j++
      ) {
        for (
          let k = Math.max(0, index - 1);
          k <= Math.min(arr[i].length - 1, index + number.length);
          k++
        ) {
          if (arr[j][k] === '*') {
            isAdded = true;
            break;
          }
        }
        if (isAdded) break;
      }

      if (isAdded) {
        sum += Number(number);
      }
    }
  }

  return sum;
};

console.log(calculateSum(rows));
