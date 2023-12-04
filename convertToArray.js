const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('data.txt');
const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

let arrayOfStrings = [];

rl.on('line', (line) => {
  arrayOfStrings.push(line);
});

rl.on('close', () => {
  let result = 0;
  arrayOfStrings.forEach((str) => {
    let stringArray = str.split('');
    let firstNumber = stringArray.find((element) => !isNaN(parseInt(element)));
    let lastNumber = stringArray.findLast(
      (element) => !isNaN(parseInt(element))
    );

    result += parseInt(firstNumber + lastNumber);
  });
  console.log(result);
});
