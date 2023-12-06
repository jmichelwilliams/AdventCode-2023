const { data } = require('./data.js');

const parseData = (data) => {
  const games = data.split('\n');
  const parsedGames = [];

  games.forEach((game) => {
    const [gameNumberString, colorCountString] = game.split(': ');
    const gameNumber = parseInt(gameNumberString.split(' ')[1]);
    const colorCounts = colorCountString.split('; ');
    const colors = [];

    colorCounts.forEach((colorCount) => {
      const colorCountPairs = colorCount.split(', ');
      const colorCountObj = {};

      colorCountPairs.forEach((pair) => {
        const [count, color] = pair.split(' ');
        colorCountObj[color.trim()] = parseInt(count);
      });

      colors.push(colorCountObj);
    });

    parsedGames.push({
      gameNumber,
      colors,
    });
  });
  return parsedGames;
};

const calculatePowerMinCubes = (parsedGames) => {
  let sumOfPower = 0;

  parsedGames.forEach((game) => {
    let minRedCount = 0;
    let minGreenCount = 0;
    let minBlueCount = 0;

    game.colors.forEach((color) => {
      if (color.red > minRedCount) minRedCount = color.red;
      if (color.green > minGreenCount) minGreenCount = color.green;
      if (color.blue > minBlueCount) minBlueCount = color.blue;
    });

    sumOfPower += minRedCount * minBlueCount * minGreenCount;
    console.log(sumOfPower);
  });
};

calculatePowerMinCubes(parseData(data));
