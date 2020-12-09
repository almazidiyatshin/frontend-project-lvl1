import readlineSync from 'readline-sync';
import askName from './cli.js';

const runGame = (gameRules, getGameData) => {
  const userName = askName();
  console.log(gameRules);

  const maxCountRound = 3;

  const iter = (currentRound) => {
    const data = getGameData();
    const [question, answer] = data;

    if (currentRound === maxCountRound) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${userName}!"`);
      return;
    }
    console.log('Correct!');
    iter(currentRound + 1);
  };

  return iter(0);
};

export default runGame;
