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

const calculatePossibleGames = (
  parsedGames,
  nbrOfRedCubes,
  nbrOfGreenCubes,
  nbrOfBlueCubes
) => {
  let sum = 0;
  const possibleGames = parsedGames.filter((game) => {
    let redCount = 0;
    let greenCount = 0;
    let blueCount = 0;
    console.log('game: ', game);
    game.colors.forEach((color) => {
      if (color.red > redCount) redCount = color.red;
      if (color.green > greenCount) greenCount = color.green;
      if (color.blue > blueCount) blueCount = color.blue;
    });

    return (
      redCount <= nbrOfRedCubes &&
      greenCount <= nbrOfGreenCubes &&
      blueCount <= nbrOfBlueCubes
    );
  });

  possibleGames.forEach((game) => {
    console.log('Possible Game Number:', game.gameNumber);
    sum += game.gameNumber;
    console.log('sum: ', sum);
  });

  return sum;
};

const parsedGames = parseData(data);
calculatePossibleGames(parsedGames, 12, 13, 14);
