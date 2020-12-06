import readlineSync from 'readline-sync';
import askName from './cli.js';

export const getRandomNum = (min = 1, max = 20) => Math.floor(Math.random() * (max - min)) + min;

const runGame = (gameRules, gameData) => {
  const userName = askName();
  console.log(gameRules());

  const maxCountRound = 3;

  const iter = (currentCount) => {
    const data = gameData();
    const question = data[0];
    const answer = data[1];

    if (currentCount === maxCountRound) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      iter(currentCount + 1);
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${userName}!"`);
    }
  };

  return iter(0);
};

export default runGame;
